module.exports = function (migration) {
    const productSection = migration.editContentType("productSection");

    const backgroundColor = productSection
    .createField("backgroundColor")
    .name(" Background Color")
    .type("Symbol")
    .required(true);

    const textColor = productSection
    .createField("textColor")
    .name("Text Color")
    .type("Symbol")
    .required(true);
}