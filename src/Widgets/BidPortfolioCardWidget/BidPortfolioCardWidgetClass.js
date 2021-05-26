import * as Scrivito from "scrivito";

const BidPortfolioCardWidget = Scrivito.provideWidgetClass("BidPortfolioCardWidget", {
  attributes: {
    image: ["reference", {only: "Image"}],
    company: "string",
    text: "html",

  },
  
});

export default BidPortfolioCardWidget;
