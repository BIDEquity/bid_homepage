import * as Scrivito from "scrivito";

const BidQuoteWidget = Scrivito.provideWidgetClass("BidQuoteWidget", {
  attributes: {
    quote: "string",
    name: "string",
    position: "string",
    company: "string",
    showDividingLine: ["enum", { values: ["yes", "no"] }],
  },
  extractTextAttributes: ["quote", "name", "position", "company"],
});

export default BidQuoteWidget;
