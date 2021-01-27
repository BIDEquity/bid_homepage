import * as Scrivito from "scrivito";

const ExtendedFactWidget = Scrivito.provideWidgetClass("ExtendedFactWidget", {
  attributes: {
    title: "string",
    key: "string",
    value: "string",
  },
  extractTextAttributes: ["title", "key", "value"],
});

export default ExtendedFactWidget;
