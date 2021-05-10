import * as Scrivito from "scrivito";

const BidColumnHeadlineTextBlockWidget = Scrivito.provideWidgetClass("BidColumnHeadlineTextBlockWidget", {
  attributes: {
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});

export default BidColumnHeadlineTextBlockWidget;
