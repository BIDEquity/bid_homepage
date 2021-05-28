import * as Scrivito from "scrivito";

const BidPrivacyWidget = Scrivito.provideWidgetClass("BidPrivacyWidget", {
  attributes: {
    headline: "string",
    body: "html"
  },
  extractTextAttributes: ["headline","body"],
});

export default BidPrivacyWidget;
