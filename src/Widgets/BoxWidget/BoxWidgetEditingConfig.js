import * as Scrivito from "scrivito";
import * as ScrivitoPicks from 'scrivito-picks';
import boxWidgetIcon from "../../assets/images/box_widget.svg";

Scrivito.provideEditingConfig("BoxWidget", {
  title: "Box",
  thumbnail: boxWidgetIcon,
  attributes: {
    boxStyle: {
      title: "Background color",
      description: "Default: Transparent",
      values: [
        { value: "transparent", title: "Transparent" },
        { value: "white", title: "White with border" },
      ],
    },
    useOffset: {
      title: "Use offset?",
      description: 'If so, the box will move "up". Default: No',
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
  },
  properties: ["boxStyle", "useOffset"],
  propertiesGroups: [
    {
      title: 'Background Image',
      component: ScrivitoPicks.createComponent([

        {
          attribute: 'backgroundGradientImage',
              values: [
                { value: "full-stripes", title: "Full stripes", previewClassName: 'picks-full-stripes picks-preview' },
                { value: "small-full-stripes", title: "Small full stripes", previewClassName: 'picks-small-full-stripes picks-preview' },
                { value: "top-stripes", title: "Top stripes", previewClassName: 'top-stripes picks-preview' },
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
    boxStyle: "transparent",
    useOffset: "no",
  },
});
