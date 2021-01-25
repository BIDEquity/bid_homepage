import * as Scrivito from "scrivito";

const PersonWidget = Scrivito.provideWidgetClass("PersonWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default PersonWidget;
