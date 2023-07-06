module.exports = function (migration) {
    migration.transformEntriesToType({
        sourceContentType: "recipe",
        targetContentType: "mediaWrapper",
        from: ["featuredImage", "slug"],
        shouldPublish: true,
        updateReference: false,
        removedOldEntries: false,
        identityKey: function(fields) {
            try {
                const slug = fields.slug['en-US'].toString();
                if (slug) {
                    return slug;
                }
            } catch (error) 
            {}
        }  ,
        transformEntryForLocale: function(formFields, currentLocale) {
            try {
                const oldImage = formFields.featuredImage['en-US'].sys.id.toString();
                const slug = formFields.slug['en-US'].toString();
                if (oldImage && slug) {
                    const derivedAsset = {
                        sys: {type: "Link", linkType: "Asset", id: oldImage}
                    };

                    let returnedObject = {}
                    returnedObject.internalName = slug;
                    returnedObject.title = slug;
                    returnedObject.altText = 'no AltText';
                    returnedObject.image = derivedAsset;

                    return returnedObject;
                }
                return false;
            }catch (error) {
                return false;
            }
        }     
    })
}