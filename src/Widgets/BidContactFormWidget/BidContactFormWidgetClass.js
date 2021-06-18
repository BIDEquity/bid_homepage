import * as Scrivito from "scrivito";

const BidContactFormWidget = Scrivito.provideWidgetClass("BidContactFormWidget", {
  attributes: {
    title: "string",
    iAm: "string",
    company: "string"
  },
});

export default BidContactFormWidget;
