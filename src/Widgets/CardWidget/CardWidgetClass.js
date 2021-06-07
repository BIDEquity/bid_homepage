import * as Scrivito from 'scrivito'

const CardWidget = Scrivito.provideWidgetClass("CardWidget", {
  onlyInside: 'CardContainerWidget',
  attributes: {
    image: "reference",
    description: "string",
    date: "date"
  },
  extractTextAttributes: ["description"],
});