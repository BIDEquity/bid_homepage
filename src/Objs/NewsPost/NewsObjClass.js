import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const NewsPost = Scrivito.provideObjClass("NewsPost", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
    category: "string",
    title: "string",
    teaser: "string",
    body: "html",
    next: "string",
    nextLabel: "string",
    prev: "string",
    prevLabel: "string",
    news: "widgetlist",
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default NewsPost;
