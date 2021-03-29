import * as Scrivito from "scrivito";

const BidProcessItemWidget = Scrivito.provideWidgetClass("BidProcessItemWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidProcessItemWidget;
