import * as Scrivito from "scrivito";

const QuoteWidget = Scrivito.provideWidgetClass("QuoteWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default QuoteWidget;
