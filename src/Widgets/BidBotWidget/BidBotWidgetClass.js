import * as Scrivito from "scrivito";

const BidBotWidget = Scrivito.provideWidgetClass("BidBotWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidBotWidget;
