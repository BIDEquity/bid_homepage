import * as Scrivito from "scrivito";

const BidProcessWidget = Scrivito.provideWidgetClass("BidProcessWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidProcessWidget;
