import * as Scrivito from "scrivito";

const BidNewsBlockWidget = Scrivito.provideWidgetClass("BidNewsBlockWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidNewsBlockWidget;
