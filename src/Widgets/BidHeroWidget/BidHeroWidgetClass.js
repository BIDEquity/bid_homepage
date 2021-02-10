import * as Scrivito from "scrivito";

const BidHeroWidget = Scrivito.provideWidgetClass("BidHeroWidget", {
  attributes: {
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});

export default BidHeroWidget;
