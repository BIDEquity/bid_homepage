import * as Scrivito from "scrivito";

const BidPortfolioWidget = Scrivito.provideWidgetClass("BidPortfolioWidget", {
  attributes: {
    headline: "string",
    content: "widgetlist",
    bgImage: ["reference", {only: "Image"}],
    sectionHeadline: "string",
    sectionLink: "link",
    newsHeadline: "string",
    
      },
  
});

export default BidPortfolioWidget;
