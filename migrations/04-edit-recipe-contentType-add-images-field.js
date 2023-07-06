module.exports = function(migration) {
    const recipe = migration.editContentType("recipe");

    const images = recipe
    .createField("gallery")
    .name("Gallery")
    .type("Array")
    .items({
        type: "Link",
        linkType: "Entry",
        validations: [{linkContentType: ["mediaWrapper"]}]
    });

    recipe.editField("featuredImage").disabled(true);
}