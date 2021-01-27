import * as Scrivito from "scrivito";

const QuoteWidget = Scrivito.provideWidgetClass("QuoteWidget", {
  attributes: {
    quote: "string",
    name: "string",
    position: "string",
    company: "string",
  },
  extractTextAttributes: ["quote", "name", "position", "company"],
});

export default QuoteWidget;
