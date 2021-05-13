import * as Scrivito from "scrivito";

const BidColumnHeadlineWidget = Scrivito.provideWidgetClass("BidColumnHeadlineWidget", {
  attributes: {
    headline: "string",
    showDividingLine: ["enum", { values: ["yes", "no"] }],
  },
  
});

export default BidColumnHeadlineWidget;
