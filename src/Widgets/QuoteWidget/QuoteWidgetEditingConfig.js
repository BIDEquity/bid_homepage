import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("QuoteWidget", {
  title: "Quote",
  attributes: {
    showDividingLine: {
      title: "Show dividing line?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
  },
  properties: ["showDividingLine"],
  initialContent: {
    quote: "Id minim eiusmod aliqua proident irure.",
    name: "Joe Doe",
    position: "Founder",
    company: "Xscape"
  },
});
