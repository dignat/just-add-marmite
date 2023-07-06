module.exports = function (migration) {
  const person = migration
    .createContentType("person")
    .name("Person")
    .description("")
    .displayField("name");
  person
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("company")
    .name("Company")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("shortBio")
    .name("Short Bio")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("email")
    .name("Email")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("phone")
    .name("Phone")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("facebook")
    .name("Facebook")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("twitter")
    .name("Twitter")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("github")
    .name("Github")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  person
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  person.changeFieldControl("name", "builtin", "singleLine", {});
  person.changeFieldControl("title", "builtin", "singleLine", {});
  person.changeFieldControl("company", "builtin", "singleLine", {});
  person.changeFieldControl("shortBio", "builtin", "markdown", {});
  person.changeFieldControl("email", "builtin", "singleLine", {});
  person.changeFieldControl("phone", "builtin", "singleLine", {});
  person.changeFieldControl("facebook", "builtin", "singleLine", {});
  person.changeFieldControl("twitter", "builtin", "singleLine", {});
  person.changeFieldControl("github", "builtin", "singleLine", {});
  person.changeFieldControl("image", "builtin", "assetLinkEditor", {});
};
