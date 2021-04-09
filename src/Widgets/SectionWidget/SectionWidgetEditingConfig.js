import * as Scrivito from "scrivito";
import sectionWidgetIcon from "../../assets/images/section_widget.svg";

Scrivito.provideEditingConfig("SectionWidget", {
  title: "Section",
  thumbnail: sectionWidgetIcon,
  attributes: {
    backgroundColor: {
      title: "Background color",
      description:
        "Does not apply if a background image is set. Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "greywhite", title: "White grey" },
        { value: "greylight", title: "Light grey" },
        { value: "greymiddle", title: "Grey" },
        { value: "greydark", title: "Dark grey" },
        { value: "brand-primary", title: "Primary color" },
        { value: "brand-secondary", title: "Secondary color" },
      ],
    },
    useFullWidth: {
      title: "Use full width?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
    useFullHeight: {
      title: "Use full screen height?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
    showPadding: {
      title: "Show padding?",
      description: "Padding adds space around this section. Default: Yes",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
    contentSteps: {
      title: "Content steps?",
      description: "Is this a section with content steps. Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
    backgroundImage: {
      title: "Background image",
    },
  },
  properties: [
    "backgroundColor",
    "backgroundImage",
    "useFullWidth",
    "useFullHeight",
    "showPadding",
    "contentSteps"
  ],
  initialContent: {
    backgroundColor: "brand-secondary",
    showPadding: "yes",
    useFullHeight: "no",
    useFullWidth: "no",
    contentSteps: "no"
  },
});
