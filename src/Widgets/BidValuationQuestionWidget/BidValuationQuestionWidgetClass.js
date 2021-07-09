import * as Scrivito from "scrivito";

const BidValuationQuestionWidget = Scrivito.provideWidgetClass("BidValuationQuestionWidget", {
  onlyInside: "BidValuationWidget",
  attributes: {
    question: "string",
    errorMsg: "string",
  },
  
});

export default BidValuationQuestionWidget;
