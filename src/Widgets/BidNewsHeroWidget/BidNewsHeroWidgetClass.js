import * as Scrivito from "scrivito";

const BidNewsHeroWidget = Scrivito.provideWidgetClass("BidNewsHeroWidget", {
  attributes: {
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});

export default BidNewsHeroWidget;
