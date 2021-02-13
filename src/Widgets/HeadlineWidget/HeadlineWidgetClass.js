import * as Scrivito from "scrivito";

const HeadlineWidget = Scrivito.provideWidgetClass("HeadlineWidget", {
  attributes: {
    headline: "string",
    level: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    style: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    width: ["enum", { values: ["25", "33", "40", "45", "50", "60", "66", "75"] }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    float: ["enum", { values: ["left", "right"] }],
    showDividingLine: ["enum", { values: ["yes", "no"] }],
    showMargin: ["enum", { values: ["yes", "no"] }],
  },
  
});

export default HeadlineWidget;
