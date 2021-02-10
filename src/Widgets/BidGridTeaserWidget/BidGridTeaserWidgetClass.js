import * as Scrivito from "scrivito";

const BidGridTeaserWidget = Scrivito.provideWidgetClass("BidGridTeaserWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidGridTeaserWidget;
