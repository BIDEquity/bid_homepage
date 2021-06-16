import * as Scrivito from "scrivito";


Scrivito.provideEditingConfig("BidNewsOverviewWidget", {
  title: "Bid News Overview",
  
  attributes: {
    tags: {
      title: "Filter by tags",
      description:
        "Only show news, that have one of the given tags." +
        " Leave empty to not filter by tags.",
    },
    showTags: {
      title: "Show list of tags?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
  },
  properties: ["showTags", "tags"],
  initialContent: {
    showTags: "no",
  },
});
