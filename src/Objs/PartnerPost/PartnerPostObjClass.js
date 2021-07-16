import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const PartnerPost = Scrivito.provideObjClass("PartnerPost", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
    category: "link",
    title: "string",
    teaser: "string",
    body: "html",
    body2: "html",
    quote: "string",
    name: "string",
    position: "string",
    image: ["reference", {only: "Image"}],
    newsImage: ["reference", {only: "Image"}],
    nextLabel: "string",
    prev: "string",
    prevLabel: "string",
    partnerDetailTitle: "string",
    partnerDetailImage: ["reference", { only: "Image" }],
    partnerDetailLink: "link",
    nextPartner: "string",
    prevPartner: "string",
    more: "link",
    
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default PartnerPost;
