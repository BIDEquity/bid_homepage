import * as Scrivito from "scrivito";

const BidInvestorsWidget = Scrivito.provideWidgetClass("BidInvestorsWidget", {
  attributes: {
    sectionTitle:  "string",
    quote:  "string",
    name:  "string",
    statsNumber:  "string",
    position:  "string",
    statsText:  "string",
    infoTitle:  "string",
    link: "link",
    content: "widgetlist",
    image1: ["reference", {only: "Image"}],
    helpSlide1: ["reference", {only: "Image"}],
    newsTitle: "string",
    helpTitle:  "string",
    tagSection: "widgetlist",
    cards: "widgetlist",
    rowWidget: "widgetlist"
  },
  
});

export default BidInvestorsWidget;
