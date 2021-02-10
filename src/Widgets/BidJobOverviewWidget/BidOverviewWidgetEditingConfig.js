import * as Scrivito from "scrivito";
import jobOverviewWidgetIcon from "../../assets/images/job_overview_widget.svg";

Scrivito.provideEditingConfig("BidJobOverviewWidget", {
  title: "Job Overview",
  thumbnail: jobOverviewWidgetIcon,
  attributes: {
    tags: {
      title: "Filter by tags",
      description:
        "Only show jobs, that have one of the given tags." +
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
    showTags: "yes",
  },
});
