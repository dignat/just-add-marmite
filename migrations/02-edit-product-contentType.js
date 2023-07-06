module.exports = function (migration) {
    const recipe = migration.editContentType("recipe");

    recipe.changeFieldControl("slug", "builtin", "slugEditor");

    recipe.editField("method")
    .validations ([
        {
            enabledNodeTypes: ["heading-1", "hyperlink", "ordered-list"]
        },
        {
            enabledMarks: ["bold", "italic", "underline"]
        }
    ])
}