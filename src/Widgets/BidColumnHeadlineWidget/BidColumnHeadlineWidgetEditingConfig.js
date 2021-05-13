import * as Scrivito from "scrivito";
import headlineWidgetIcon from "../../assets/images/headline_widget.svg";

Scrivito.provideEditingConfig("BidColumnHeadlineWidget", {
  title: "Bid Column Headline",
  thumbnail: headlineWidgetIcon,
  attributes: {
    showDividingLine: {
      title: "Show dividing line?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
  },
  properties: ["headline", "showDividingLine"],
  validations: [
    [
      "headline",

      (headline) => {
        if (!headline) {
          return { message: "The headline must be set.", severity: "error" };
        }
      },
    ],
  ],
});
