import * as Scrivito from "scrivito";

const BidRelatedStoryBlock = Scrivito.provideWidgetClass("BidRelatedStoryBlock", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidRelatedStoryBlock;
