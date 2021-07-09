import * as Scrivito from "scrivito";

const BidValuationWidget = Scrivito.provideWidgetClass("BidValuationWidget", {
  attributes: {
    headline: "html",
    welcomeMessage: "html",
    botTitle: "string",
    botMessage: "string",
    botImage: ["reference", {only: "Image"}],
    thxMessage: "string",
    questions: ["widgetlist", { only: "BidValuationQuestionWidget" }],
    image: ["reference", {only: "Image"}],
    blockTitle: "string",
    link: "link",
    statsNumber: "string",
    statsText: "string",
  },
  
});

export default BidValuationWidget;
