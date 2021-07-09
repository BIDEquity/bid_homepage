import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("BidValuationQuestionWidget", {
  title: "Bid Valuation Question",
  attributes: {
    attribute: {
      title: 'Bot question',
    },
  },
  properties: ['question', 'errorMsg'],
});
