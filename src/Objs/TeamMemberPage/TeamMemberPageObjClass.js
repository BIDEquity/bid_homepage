import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const TeamMemberPage = Scrivito.provideObjClass("TeamMemberPage", {
  attributes: {
    ...defaultPageAttributes,
    headline: "string",
    date: "date",
    contentCategory: "string",
    image: ["reference", { only: "Image" }],
    articleIntro: "string",
    body: "html",
    quote: "string",
    bodyBottom: "html",
    navNext: "string",
    nextMember: "string",
    content: "widgetlist",
    nextLabel: "string",
    prevLabel: "string",
    linkedIn: "link",
    desk: "string",
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default TeamMemberPage;
