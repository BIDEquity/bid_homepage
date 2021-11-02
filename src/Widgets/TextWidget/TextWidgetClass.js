import * as Scrivito from "scrivito";

const TextWidget = Scrivito.provideWidgetClass("TextWidget", {
  attributes: {
    text: "html",
    color: ["enum", { values: ["black", "white"] }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    float: ["enum", { values: ["left", "right"] }],
    width: ["enum", { values: ["25", "33", "40", "45", "50", "60", "66", "75"] }],
    showDividingLine: ["enum", { values: ["yes", "no"] }],
  },
  extractTextAttributes: ["text"],
});

export default TextWidget;
