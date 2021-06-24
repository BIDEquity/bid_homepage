import * as Scrivito from "scrivito";

const BidPortfolioWidget = Scrivito.provideWidgetClass("BidPortfolioWidget", {
  attributes: {
    headline: "string",
    card: "widgetlist",
    content: "widgetlist",
    bgImage: ["reference", {only: "Image"}],
    sectionHeadline: "string",
    sectionLink: "link",
    newsHeadline: "string",
    slides: "widgetlist",
    sliderBgImage: ["reference", {only: "Image"}],
      },
  
});

export default BidPortfolioWidget;
