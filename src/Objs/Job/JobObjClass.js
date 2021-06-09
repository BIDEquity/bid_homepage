import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const Job = Scrivito.provideObjClass("Job", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
    title: "string",
    location: "string",
    industry: "string",
    department: "string",
    teaser: "string",
    subtitle: "string",
    text: "html",
    apply: "link",
    sideText: "string",
    sideLink: "link",
    headLogo: ["reference", {only: "Image"}],
    headText: "string",
    headLink: "link",
    linkToJobs: "link",
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default Job;
