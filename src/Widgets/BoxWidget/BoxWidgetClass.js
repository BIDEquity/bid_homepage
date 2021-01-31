import * as Scrivito from "scrivito";

const BoxWidget = Scrivito.provideWidgetClass("BoxWidget", {
  attributes: {
    body: "widgetlist",
    boxStyle: ["enum", { values: ["transparent", "white"] }],
    useOffset: ["enum", { values: ["yes", "no"] }],
    backgroundGradientImage: [
      "enum",
      {
        values: [
          "full-stripes",
          "small-full-stripes",
          "top-stripes",
          "left-block-stripes",
          "small-left-block-stripes",
          "small-right-block-stripes",
          "dark-blue",
          "light-blue",
          "card-blue",
          "footer-blue",
        ]
      }
    ],
  },
  extractTextAttributes: ["body"],
});

export default BoxWidget;
