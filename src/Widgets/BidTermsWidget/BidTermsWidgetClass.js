import * as Scrivito from "scrivito";

const BidTermsWidget = Scrivito.provideWidgetClass("BidTermsWidget", {
  attributes: {
    headline: "string",
    body: "html"
  },
  extractTextAttributes: ["headline","body"],
});

export default BidTermsWidget;
