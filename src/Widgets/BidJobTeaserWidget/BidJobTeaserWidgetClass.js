import * as Scrivito from "scrivito";

const BidJobTeaserWidget = Scrivito.provideWidgetClass("BidJobTeaserWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidJobTeaserWidget;
