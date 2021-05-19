import * as Scrivito from "scrivito";

const ColumnContainerWidget = Scrivito.provideWidgetClass(
  "ColumnContainerWidget",
  {
    attributes: {
      columns: ["widgetlist", { only: "ColumnWidget" }],
      alignment: ["enum", { values: ["start", "center", "end", "stretch"] }],
      reverseMobile: ["enum", { values: ["yes", "no"] }],
    },
    extractTextAttributes: ["columns"],
  }
);

export default ColumnContainerWidget;
