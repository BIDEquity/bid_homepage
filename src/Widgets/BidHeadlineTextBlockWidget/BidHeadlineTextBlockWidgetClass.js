import * as Scrivito from "scrivito";

const BidHeadlineTextBlockWidget = Scrivito.provideWidgetClass("BidHeadlineTextBlockWidget", {
  attributes: {
    color: ["enum", { values: ["dark", "white"] }],
    content: "widgetlist",
  },
  extractTextAttributes: ["content"],
});

export default BidHeadlineTextBlockWidget;
