import * as Scrivito from "scrivito";

const BidStepBoxWidget = Scrivito.provideWidgetClass("BidStepBoxWidget", {
  attributes: {
    headline: "string",
    link: "reference",
    text: "html",
    image: ["reference", {only: "Image"}],
    orientation: ['enum', { values: ['left', 'right'] }],
    color: ['enum', { values: ['red', 'blue'] }],
    stepNumber: "string"
  },
  extractTextAttributes: ["headline"],
});

export default BidStepBoxWidget;
