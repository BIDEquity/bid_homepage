import * as Scrivito from "scrivito";

const NewsOverviewWidget = Scrivito.provideWidgetClass("NewsOverviewWidget", {
  attributes: {
    showTags: ["enum", { values: ["yes", "no"] }],
    tags: "stringlist",
  },
});

export default NewsOverviewWidget;
