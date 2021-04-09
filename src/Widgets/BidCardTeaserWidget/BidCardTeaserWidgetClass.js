import * as Scrivito from "scrivito";

const BidCardTeaserWidget = Scrivito.provideWidgetClass("BidCardTeaserWidget", {
  attributes: {
    content: "widgetlist",
    float: ['enum', { values: ['left', 'right'] }]
  },
  extractTextAttributes: ["content"],
});

export default BidCardTeaserWidget;
