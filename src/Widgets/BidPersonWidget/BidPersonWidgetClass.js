import * as Scrivito from "scrivito";

const BidPersonWidget = Scrivito.provideWidgetClass("BidPersonWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidPersonWidget;
