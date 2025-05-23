import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const NewsPost = Scrivito.provideObjClass("NewsPost", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
    headerLink: "link",
    category: "string",
    title: "string",
    teaser: "string",
    body: "html",
    body2: "html",
    image: ["reference", {only: "Image"}],
    newsImage: ["reference", {only: "Image"}],
    next: "string",
    nextLabel: "string",
    prev: "string",
    prevLabel: "string",
    news: "widgetlist",
    newsTitle: "string",
    more: "link",
    date: "date",
    company: "string"
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default NewsPost;
