import * as Scrivito from "scrivito";

const BidNewsOverviewWidget = Scrivito.provideWidgetClass("BidNewsOverviewWidget", {
  attributes: {
    termsTitle: "string",
    teaser: "string",
    terms: "html",
    privacy: "html",
    signUp: "string",
    more: "link"
  },
});

export default BidNewsOverviewWidget;
