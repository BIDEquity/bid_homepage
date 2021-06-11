import * as Scrivito from "scrivito";

const BidPartnerDetailsWidget = Scrivito.provideWidgetClass("BidPartnerDetailsWidget", {
  attributes: {
    headline: "string",
    contentCategory: "string",
    bgImage: ["reference", { only: "Image" }],
    articleIntro: "html",
    articleText: "html",
    statsItem1: ["widgetlist", {only: "BidFactWidget"}],
    statsItem2: ["widgetlist", {only: "BidFactWidget"}],
    statsItem3: ["widgetlist", {only: "BidFactWidget"}],
    body: "html",
    quote: "string",
    bodyBottom: "html",
    navNext: "string",
    nextPartner: "string",
    prevPartner: "string",
    name: "string",
    position: "string",
    partnerDetailTitle: "string",
    partnerDetailImage: ["reference", { only: "Image" }],
    partnerDetailLink: "link",
    articleIntro: "html",
    content: "widgetlist",
    next: "string",
    prev: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidPartnerDetailsWidget;
