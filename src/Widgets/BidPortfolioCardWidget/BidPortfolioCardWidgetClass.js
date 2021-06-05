import * as Scrivito from "scrivito";

const BidPortfolioCardWidget = Scrivito.provideWidgetClass("BidPortfolioCardWidget", {
  attributes: {
    image: ["reference", {only: "Image"}],
    backgroundColor: ["enum", { values: ["yes", "no"] }],
    logo: ["enum", { values: ["yes", "no"] }],
    company: "string",
    text: "html",

  },
  
});

export default BidPortfolioCardWidget;
