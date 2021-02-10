import * as Scrivito from "scrivito";

const BidCaseStudyBlockWidget = Scrivito.provideWidgetClass("BidCaseStudyBlockWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default BidCaseStudyBlockWidget;
