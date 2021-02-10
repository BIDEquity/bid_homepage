import * as Scrivito from "scrivito";

const BidTwoColumnsTextWidget = Scrivito.provideWidgetClass("BidTwoColumnsTextWidget", {
  attributes: {
    col1: "html",
    col2: "html",
    content: "widgetlist"
  },
  extractTextAttributes: ["col1", "col2", "content"],
});

export default BidTwoColumnsTextWidget;
