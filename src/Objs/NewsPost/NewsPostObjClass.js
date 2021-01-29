import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const NewsPost = Scrivito.provideObjClass("NewsPost", {
  attributes: {
    logo: ["reference", { only: ["Image"] }],
    datePosted: "date",
    text: "html",
    ...defaultPageAttributes,
    ...metadataAttributes,
  },
  extractTextAttributes: ["body", "title", "text"],
});

export default NewsPost;
