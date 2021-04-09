import * as Scrivito from "scrivito";

const BidCardTeaserWidget = Scrivito.provideWidgetClass("BidCardTeaserWidget", {
  attributes: {
    image: "reference",
    description: "string",
    content: "widgetlist"
  },
  extractTextAttributes: ["description"],
});

export default BidCardTeaserWidget;
