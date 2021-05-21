import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const PortfolioPost = Scrivito.provideObjClass("PortfolioPost", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default PortfolioPost;
