import * as Scrivito from "scrivito";

const BidPrivacyWidget = Scrivito.provideWidgetClass("BidPrivacyWidget", {
  attributes: {
    headline: "string",
    body: "html",
    next: "string"
  },
  extractTextAttributes: ["headline","body"],
});

export default BidPrivacyWidget;
