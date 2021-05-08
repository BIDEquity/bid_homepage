import * as Scrivito from "scrivito";
import headlineWidgetIcon from "../../assets/images/headline_widget.svg";

Scrivito.provideEditingConfig("BidHomeHeroHeadlineWidget", {
  title: "Bid Home Hero Headline",
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
