import * as Scrivito from "scrivito";

const BidFormWidget = Scrivito.provideWidgetClass("BidFormWidget", {
  attributes: {
    termsTitle: "string",
    teaser: "string",
    terms: "html",
    privacy: "html",
    signUp: "string",
    errorMail: "string",
    errorName: "string",
    errorBoxes: "string",
  },
  
});

export default BidFormWidget;
