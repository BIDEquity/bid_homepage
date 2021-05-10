import * as Scrivito from "scrivito";
import headlineWidgetIcon from "../../assets/images/headline_widget.svg";

Scrivito.provideEditingConfig("BidColumnHeadlineWidget", {
  title: "Bid Column Headline",
  thumbnail: headlineWidgetIcon,
  
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
