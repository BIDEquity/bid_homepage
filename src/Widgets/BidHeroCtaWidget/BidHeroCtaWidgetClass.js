import * as Scrivito from "scrivito";

const BidHeroCtaWidget = Scrivito.provideWidgetClass("BidHeroCtaWidget", {
  attributes: {
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});

export default BidHeroCtaWidget;
