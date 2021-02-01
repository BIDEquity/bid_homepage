import * as Scrivito from "scrivito";

const CtaTeaser = Scrivito.provideWidgetClass("CtaTeaser", {
  attributes: {
    content: "widgetlist"
  },
  extractTextAttributes: ["content"],
});

export default CtaTeaser;
