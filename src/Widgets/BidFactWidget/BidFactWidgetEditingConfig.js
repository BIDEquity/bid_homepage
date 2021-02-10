import * as Scrivito from "scrivito";
import factWidgetIcon from "../../assets/images/fact_widget.svg";

Scrivito.provideEditingConfig("BidFactWidget", {
  title: "Bid Extended Fact",
  thumbnail: factWidgetIcon,
  initialContent: {
    title: "01",
    key: "Lorem ipsum",
    value: "12",
  },
  validations: [
    [
      "value",

      (value, { widget }) => {
        if (!widget.get("key") && !value) {
          return {
            message: "The key or value (or both) must be set.",
            severity: "error",
          };
        }
      },
    ],
  ],
});
