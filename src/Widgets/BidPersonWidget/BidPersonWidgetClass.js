import * as Scrivito from "scrivito";

const BidPersonWidget = Scrivito.provideWidgetClass("BidPersonWidget", {
  attributes: {
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
    content: "widgetlist"
  },
  extractTextAttributes: ["headline"],
});

export default BidPersonWidget;
