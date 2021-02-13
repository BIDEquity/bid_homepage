import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const NewsPost = Scrivito.provideObjClass("NewsPost", {
  attributes: {

    datePosted: "date",
    tags: "stringlist",
    text: "html",
    ...defaultPageAttributes,
    ...metadataAttributes,
  },
  extractTextAttributes: ["text"],
});

export default NewsPost;
