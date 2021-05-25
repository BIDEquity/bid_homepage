import * as Scrivito from "scrivito";

const BidPartnerWidget = Scrivito.provideWidgetClass("BidPartnerWidget", {
  attributes: {
    headline: "string",
    content: "widgetlist",
    bottomHeadline: "string",
    bottomText: "html",
    bottomLink: "link",
  },
  extractTextAttributes: ["headline"],
});

export default BidPartnerWidget;
