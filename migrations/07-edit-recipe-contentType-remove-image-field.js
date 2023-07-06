module.exports = function (migration) {
    const recipe = migration.editContentType("recipe");
    recipe.deleteField("featuredImage");
}