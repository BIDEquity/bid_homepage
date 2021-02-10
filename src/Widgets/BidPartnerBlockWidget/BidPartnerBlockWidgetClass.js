import * as Scrivito from "scrivito";

const BidPartnerBlockWidget = Scrivito.provideWidgetClass("BidPartnerBlockWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidPartnerBlockWidget;
