import * as Scrivito from "scrivito";

const SectionWidget = Scrivito.provideWidgetClass("SectionWidget", {
  attributes: {
    content: "widgetlist",
    useFullWidth: ["enum", { values: ["yes", "no"] }],
    useFullHeight: ["enum", { values: ["yes", "no"] }],
    showPadding: ["enum", { values: ["yes", "no"] }],
    backgroundGradientImage: [
      "enum",
      {
        values: [
          "full-stripes",
          "left-block-stripes",
          "small-left-block-stripes",
          "small-right-block-stripes",
          "dark-blue",
          "mid-blue",
          "light-blue",
        ]
      }
    ],
    backgroundColor: [
      "enum",
      {
        values: [
          "white",
          "greywhite",
          "greylight",
          "greymiddle",
          "greydark",
          "brand-primary",
          "brand-secondary",
        ],
      },
    ],
    backgroundImage: ["reference", { only: ["Image"] }],
  },
  extractTextAttributes: ["content"],
});

export default SectionWidget;
