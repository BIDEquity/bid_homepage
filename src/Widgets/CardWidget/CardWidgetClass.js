import * as Scrivito from 'scrivito'

const CardWidget = Scrivito.provideWidgetClass("CardWidget", {
  attributes: {
    image: "reference",
    description: "string",
    content: "widgetlist",
    date: "date"
  },
  extractTextAttributes: ["description"],
});