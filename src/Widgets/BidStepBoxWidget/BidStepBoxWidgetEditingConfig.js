import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("BidStepBoxWidget", {
  title: "Bid Step Box",
  attributes: {
    orientation: {
      title: 'Orientation',
      description: 'Default: right',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'right', title: 'Right' },
      ]
    },
    color: {
      title: 'Color',
      description: 'Default: red',
      values: [
        { value: 'red', title: 'Red' },
        { value: 'blue', title: 'Blue' },
      ]
    },
  },
  properties: ["orientation", "color", "link", "image"],
  initialContent: {
    headline: "Lorem Ipsum",
    orientation: "right",
    color: "red",
    stepNumber: "001",
  },
});
