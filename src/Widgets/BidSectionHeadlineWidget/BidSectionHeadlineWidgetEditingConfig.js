import * as Scrivito from "scrivito";
import headlineWidgetIcon from "../../assets/images/headline_widget.svg";

Scrivito.provideEditingConfig("BidSectionHeadlineWidget", {
  title: "Bid Section Headline",
  thumbnail: headlineWidgetIcon,
  properties: ['headline'],
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
