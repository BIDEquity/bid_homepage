import * as Scrivito from "scrivito";
import * as ScrivitoPicks from 'scrivito-picks';
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
    backgroundImage: {
      title: "Background image",
    },
  },
  properties: [
    "backgroundImage",
    "useFullWidth",
    "useFullHeight",
    "showPadding",
  ],
  propertiesGroups: [
    {
      title: 'Background Image',
      component: ScrivitoPicks.createComponent([

        {
          attribute: 'backgroundGradientImage',
              values: [
                { value: "full-stripes", title: "Full stripes", previewClassName: 'picks-full-stripes picks-preview' },
                { value: "left-block-stripes", title: "Left block stripes", previewClassName: 'picks-left-block-stripes picks-preview' },
                { value: "small-left-block-stripes", title: "Small left block stripes", previewClassName: 'picks-small-left-block-stripes picks-preview' },
                { value: "small-right-block-stripes", title: "Small right block stripes", previewClassName: 'picks-small-right-block-stripes picks-preview' },
                { value: "dark-blue", title: "Dark blue", previewClassName: 'dark-blue picks-preview' },
                { value: "light-blue", title: "Light blue", previewClassName: 'light-blue picks-preview' },
              ],
            }

          ]),
        },
      ],
  initialContent: {
    showPadding: "yes",
    useFullHeight: "no",
    useFullWidth: "no",
  },
});
