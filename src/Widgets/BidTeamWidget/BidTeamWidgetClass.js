import * as Scrivito from "scrivito";

const BidTeamWidget = Scrivito.provideWidgetClass("BidTeamWidget", {
  attributes: {
    headline: "string",
    content: "widgetlist",
    bottomHeadline: "string",
    moreLink: "link",
    bottomText: "html",
    bottomLink: "link",
  },
  extractTextAttributes: ["headline"],
});

export default BidTeamWidget;
