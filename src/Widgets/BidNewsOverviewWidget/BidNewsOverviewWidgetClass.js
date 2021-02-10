import * as Scrivito from "scrivito";

const BidNewsOverviewWidget = Scrivito.provideWidgetClass("BidNewsOverviewWidget", {
  attributes: {
    showTags: ["enum", { values: ["yes", "no"] }],
    tags: "stringlist",
  },
});

export default BidNewsOverviewWidget;
