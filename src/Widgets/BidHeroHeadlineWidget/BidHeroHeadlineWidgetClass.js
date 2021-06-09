import * as Scrivito from "scrivito";

const BidHeroHeadlineWidget = Scrivito.provideWidgetClass("BidHeroHeadlineWidget", {
  attributes: {
    headline: "string",
    subtitle: "string",
    category: "string",
  },
  
});

export default BidHeroHeadlineWidget;
