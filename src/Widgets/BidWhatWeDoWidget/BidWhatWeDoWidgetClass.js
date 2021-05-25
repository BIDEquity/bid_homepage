import * as Scrivito from "scrivito";

const BidWhatWeDoWidget = Scrivito.provideWidgetClass("BidWhatWeDoWidget", {
  attributes: {
    headline: "string",
    content: "widgetlist",
    bgImage: ["reference", {only: "Image"}],
    sectionHeadline: "string",
    sectionLink: "link"
  },
  extractTextAttributes: ["headline"],
});

export default BidWhatWeDoWidget;
