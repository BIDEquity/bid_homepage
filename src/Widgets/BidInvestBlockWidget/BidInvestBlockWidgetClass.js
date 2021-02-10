import * as Scrivito from "scrivito";

const BidInvestBlockWidget = Scrivito.provideWidgetClass("BidInvestBlockWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidInvestBlockWidget;
