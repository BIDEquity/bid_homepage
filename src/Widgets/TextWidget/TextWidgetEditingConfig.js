import * as Scrivito from "scrivito";
import textWidgetIcon from "../../assets/images/text_widget.svg";

Scrivito.provideEditingConfig("TextWidget", {
  title: "Text",
  thumbnail: textWidgetIcon,
  attributes: {
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
    float: {
      title: "Float Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "right", title: "Right" },
      ],
    },
    width: {
      title: "Width of the text element (optional)",
      values: [
        { value: "25", title: "25%" },
        { value: "33", title: "33%" },
        { value: "40", title: "40%" },
        { value: "45", title: "45%" },
        { value: "50", title: "50%" },
        { value: "60", title: "60%" },
        { value: "66", title: "66%" },
        { value: "75", title: "75%" },
      ],
    },
    showDividingLine: {
      title: "Show dividing line?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
    text: {
      title: "Text",
      description: "The actual source code of this text",
    },
  },
  properties: ["alignment", "float", "width", "showDividingLine", "text"],
  initialContent: {
    alignment: "left",
  },
});
