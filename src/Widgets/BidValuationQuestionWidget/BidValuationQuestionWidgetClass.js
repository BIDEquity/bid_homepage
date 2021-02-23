import * as Scrivito from "scrivito";

const BidValuationQuestionWidget = Scrivito.provideWidgetClass("BidValuationQuestionWidget", {
  onlyInside: "BidValuationWidget",
  attributes: {
    question: "html",
  },
  
});

export default BidValuationQuestionWidget;
