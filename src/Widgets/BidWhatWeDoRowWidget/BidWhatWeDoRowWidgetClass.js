import * as Scrivito from "scrivito";

const BidWhatWeDoRowWidget = Scrivito.provideWidgetClass("BidWhatWeDoRowWidget", {
  attributes: {
    headline: "string",
    image: ["reference", {only: "Image"}],
    description: "string",
    reverse: ["enum", { values: ["yes", "no"] }],
    text: "html",
    link: "link",
    popup1: "html",
    showPopup: ["enum", { values: ["yes", "no"] }],
  },
  extractTextAttributes: ["headline"],
});

export default BidWhatWeDoRowWidget;
