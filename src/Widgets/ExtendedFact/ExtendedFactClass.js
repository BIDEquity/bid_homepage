import * as Scrivito from "scrivito";

const ExtendedFact = Scrivito.provideWidgetClass("ExtendedFact", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default ExtendedFact;
