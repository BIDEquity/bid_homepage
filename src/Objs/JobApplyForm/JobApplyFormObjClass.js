import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const JobApplyForm = Scrivito.provideObjClass("JobApplyForm", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
    name: "string",
    apply: "string",
    contact: "string",
    cv: "string",
    mail: "string",
    at: "string",
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default JobApplyForm;
