import * as Scrivito from "scrivito";

const BidPartnerCardWidget = Scrivito.provideWidgetClass("BidPartnerCardWidget", {
  attributes: {
    image: ["reference", {only: "Image"}],
    backgroundColor: ["enum", { values: ["yes", "no"] }],
    company: "string",
    position: "string",
    text: "html",

  },
  
});

export default BidPartnerCardWidget;
