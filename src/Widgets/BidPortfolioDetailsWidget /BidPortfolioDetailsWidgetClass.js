import * as Scrivito from "scrivito";

const BidPortfolioDetailsWidget = Scrivito.provideWidgetClass("BidPortfolioDetailsWidget", {
  attributes: {
    headline: "string",
    contentCategory: "string",
    bgImage: ["reference", { only: "Image" }],
    articleIntro: "string",
    statsItem1: ["widgetlist", {only: "BidFactWidget"}],
    statsItem2: ["widgetlist", {only: "BidFactWidget"}],
    statsItem3: ["widgetlist", {only: "BidFactWidget"}],
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

export default BidPortfolioDetailsWidget;
