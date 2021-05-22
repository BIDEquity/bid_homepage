import * as Scrivito from "scrivito";

const BidPortfolioDetailsWidget = Scrivito.provideWidgetClass("BidPortfolioDetailsWidget", {
  attributes: {
    headline: "string",
    logo: ["reference", { only: "Image" }],
    bgImage: ["reference", { only: "Image" }],
    articleIntro: "string",
    articleBody: "html",
    navNext: "string",
    nextPortfolio: "string",
    statsItem1: ["widgetlist", {only: "BidFactWidget"}],
    statsItem2: ["widgetlist", {only: "BidFactWidget"}],
    statsItem3: ["widgetlist", {only: "BidFactWidget"}],
    headline2: "string",
    body: "html",
    quote: "string",
    bodyBottom: "html",
    name: "string",
    position: "string",
    prev: "string",
    next: "string",
    sectionTitle: "string",
    content: "widgetlist",
    detailsText: "string",
    detailsButton: "link",
  },
  extractTextAttributes: ["headline"],
});

export default BidPortfolioDetailsWidget;
