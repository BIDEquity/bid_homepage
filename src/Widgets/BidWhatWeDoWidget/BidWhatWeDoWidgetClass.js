import * as Scrivito from "scrivito";

const BidWhatWeDoWidget = Scrivito.provideWidgetClass("BidWhatWeDoWidget", {
  attributes: {
    image: ["reference", {only:"Image"}],
    content: "widgetlist",
    slides: "widgetlist"
    
  },
  extractTextAttributes: ["content"],
});

export default BidWhatWeDoWidget;
