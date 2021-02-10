import * as Scrivito from "scrivito";

const BidPortfolioTeaserWidget = Scrivito.provideWidgetClass("BidPortfolioTeaserWidget", {
  attributes: {
    content: "widgetlist",
    float: ['enum', { values: ['left', 'right'] }]
  },
  extractTextAttributes: ["content"],
});

export default BidPortfolioTeaserWidget;
