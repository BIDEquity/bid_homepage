import * as Scrivito from "scrivito";

const BidJobOverviewWidget = Scrivito.provideWidgetClass("BidJobOverviewWidget", {
  attributes: {
    showTags: ["enum", { values: ["yes", "no"] }],
    tags: "stringlist",
  },
});

export default BidJobOverviewWidget;
