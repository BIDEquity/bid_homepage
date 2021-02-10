import * as Scrivito from "scrivito";

const BidHeadlineTextBlockWidget = Scrivito.provideWidgetClass("BidHeadlineTextBlockWidget", {
  attributes: {
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});

export default BidHeadlineTextBlockWidget;
