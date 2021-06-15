import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const NewsPost = Scrivito.provideObjClass("NewsPost", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
    category: "link",
    title: "string",
    teaser: "string",
    body: "html",
    image: ["reference", {only: "Image"}],
    next: "string",
    nextLabel: "string",
    prev: "string",
    prevLabel: "string",
    news: "widgetlist",
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default NewsPost;
