import * as Scrivito from "scrivito";

const BidValuationWidget = Scrivito.provideWidgetClass("BidValuationWidget", {
  attributes: {
    questions: ["widgetlist", { only: "BidValuationQuestionWidget" }],
  },
  
});

export default BidValuationWidget;
