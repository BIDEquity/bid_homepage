import * as Scrivito from "scrivito";

const BidFactWidget = Scrivito.provideWidgetClass("BidFactWidget", {
  attributes: {
    title: "string",
    key: "string",
    value: "string",
  },
  extractTextAttributes: ["title", "key", "value"],
});

export default BidFactWidget;
