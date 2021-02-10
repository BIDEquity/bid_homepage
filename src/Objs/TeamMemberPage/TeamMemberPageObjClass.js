import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const TeamMemberPage = Scrivito.provideObjClass("TeamMemberPage", {
  attributes: {
    title: "string",
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default TeamMemberPage;
