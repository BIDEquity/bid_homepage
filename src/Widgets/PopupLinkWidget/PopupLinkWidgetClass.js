import * as Scrivito from "scrivito";

const PopupLinkWidget = Scrivito.provideWidgetClass("PopupLinkWidget", {
  attributes: {
    linkText: "string",
    body: "widgetlist"
  },
  extractTextAttributes: ["linkText"],
});

export default PopupLinkWidget;
