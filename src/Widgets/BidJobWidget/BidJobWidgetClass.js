import * as Scrivito from "scrivito";

const BidJobWidget = Scrivito.provideWidgetClass("BidJobWidget", {
  attributes: {
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
  //extractTextAttributes: ["headline"],
});

export default BidJobWidget;
