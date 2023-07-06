module.exports = function (migration) {
  const blogPost = migration
    .createContentType("blogPost")
    .name("Blog Post")
    .description("")
    .displayField("title");
  blogPost
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blogPost
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blogPost
    .createField("heroImage")
    .name("Hero Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  blogPost
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blogPost
    .createField("body")
    .name("Body")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("author")
    .name("Author")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["person"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  blogPost
    .createField("publishDate")
    .name("Publish Date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("tags")
    .name("Tags")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: ["general", "javascript", "static-sites"],
        },
      ],
    });

  blogPost.changeFieldControl("title", "builtin", "singleLine", {});
  blogPost.changeFieldControl("slug", "builtin", "slugEditor", {});
  blogPost.changeFieldControl("heroImage", "builtin", "assetLinkEditor", {});
  blogPost.changeFieldControl("description", "builtin", "markdown", {});
  blogPost.changeFieldControl("body", "builtin", "markdown", {});
  blogPost.changeFieldControl("author", "builtin", "entryLinkEditor", {});

  blogPost.changeFieldControl("publishDate", "builtin", "datePicker", {
    ampm: "24",
    format: "timeZ",
  });

  blogPost.changeFieldControl("tags", "builtin", "tagEditor", {});
};
