import * as Scrivito from "scrivito";

const BidCollaborateBlockWidget = Scrivito.provideWidgetClass("BidCollaborateBlockWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidCollaborateBlockWidget;
