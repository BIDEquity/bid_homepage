import * as Scrivito from "scrivito";

const BotWidget = Scrivito.provideWidgetClass("BotWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BotWidget;
