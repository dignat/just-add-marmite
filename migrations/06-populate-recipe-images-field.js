module.exports = async function(migration, {makeRequest}) {
    migration.transformEntries({
        contentType: "recipe",
        from: ["featuredImage", "slug"],
        to: ["gallery"],
        transformEntryForLocale: async function (formFields, currenLocale) {
            if (currenLocale === "de-DE") {
                return;
            }

            try {
                const slug = formFields.slug["en-US"].toString();
                const mediaWrapperEntries = await makeRequest({
                    method: "GET",
                    url: `/entries?content_type=mediaWrapper&fields.title=${slug}`,
                });
                const mediaWrapperItems = mediaWrapperEntries.items

                if (mediaWrapperItems) {
                    let itemArray = [];
                    mediaWrapperItems.map((item) => {
                        const itemId = item.sys.id.toString();
                        const derivedMediaWrapper = {
                            sys: {type: "Link", linkType: "Entry", id: itemId},
                        };
                        itemArray.push(derivedMediaWrapper);
                    });
                    return {
                        gallery: itemArray
                    }
                } else {
                    return false;
                }

            }catch(error) {
                return false;
            }
        }
    })
}