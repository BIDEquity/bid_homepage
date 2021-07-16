import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const TeamMemberPage = Scrivito.provideObjClass("TeamMemberPage", {
  attributes: {
    ...defaultPageAttributes,
    headline: "string",
    contentCategory: "string",
    image: ["reference", { only: "Image" }],
    articleIntro: "string",
    body: "html",
    quote: "string",
    bodyBottom: "html",
    navNext: "string",
    nextMember: "string",
    job: "string",
    content: "widgetlist",
    next: "string",
    prev: "string",
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default TeamMemberPage;
