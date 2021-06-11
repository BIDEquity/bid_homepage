import * as Scrivito from "scrivito";

const BidJobOverviewWidget = Scrivito.provideWidgetClass("BidJobOverviewWidget", {
  attributes: {
    statsNumber: "string",
    statsText: "string",
    quote: "string",
    name: "string",
    position: "string",
    info1: ["reference", {only:"Image"}],
    infoTitle1: "string",
    infoLink1: "link",
  },
});

export default BidJobOverviewWidget;
