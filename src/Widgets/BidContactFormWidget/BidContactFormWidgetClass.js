import * as Scrivito from "scrivito";

const BidContactFormWidget = Scrivito.provideWidgetClass("BidContactFormWidget", {
  attributes: {
    title: "string",
    iAm: "string",
    founder: "string",
    company: "string",
    headquarter: "string",
    revenue: "string",
    name: "string",
    mail: "string",
    tel: "string",
    telNumber: "string",
    addition: "string",
    submit: "string",
    positions: "stringlist"
  },
});

export default BidContactFormWidget;
