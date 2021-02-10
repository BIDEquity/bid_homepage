import * as Scrivito from "scrivito";

const BidCtaTeaser = Scrivito.provideWidgetClass("BidCtaTeaser", {
  attributes: {
    
    content: "widgetlist"
  },
  extractTextAttributes: ["content"],
});

export default BidCtaTeaser;
