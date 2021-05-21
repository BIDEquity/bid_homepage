import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const PartnerPost = Scrivito.provideObjClass("PartnerPost", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default PartnerPost;
