import * as Scrivito from "scrivito";

const BidColumnHeadlineTextBlockWidget = Scrivito.provideWidgetClass("BidColumnHeadlineTextBlockWidget", {
  attributes: {
    content: "widgetlist",
    showDividingLine: ["enum", { values: ["yes", "no"] }],
  },
  extractTextAttributes: ["content"],
});

export default BidColumnHeadlineTextBlockWidget;
