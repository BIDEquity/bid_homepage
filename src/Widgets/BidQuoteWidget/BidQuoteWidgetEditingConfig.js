import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("BidQuoteWidget", {
  title: "Bid Quote",
  attributes: {
    color: {
      title: "Color",
      description: "Default: white",
      values: [
        { value: "white", title: "White" },
        { value: "dark", title: "Dark" },
      ],
    },
    showDividingLine: {
      title: "Show dividing line?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
  },
  properties: ["color","showDividingLine"],
  initialContent: {
    quote: "Id minim eiusmod aliqua proident irure.",
    name: "Joe Doe",
    position: "Founder",
    company: "Xscape",
    color: "white",
    showDividingLine: "no,"
  },
});
