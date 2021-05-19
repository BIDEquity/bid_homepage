import * as Scrivito from "scrivito";
import columnContainerWidgetIcon from "../../assets/images/column_container_widget.svg";
import ColumnWidget from "../ColumnWidget/ColumnWidgetClass";

Scrivito.provideEditingConfig("ColumnContainerWidget", {
  title: "Columns",
  thumbnail: columnContainerWidgetIcon,
  attributes: {
    reverseMobile: {
      title: "Reverse columns on mobile?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
  },
  properties: ['reverseMobile'],
  initialContent: {
    reverseMobile: "no"
  },
  propertiesGroups: [
    {
      title: "Columns layout",
      component: "ColumnsEditorTab",
    },
  ],
  initialContent: {
    columns: [
      new ColumnWidget({ colSize: 4 }),
      new ColumnWidget({ colSize: 4 }),
      new ColumnWidget({ colSize: 4 }),
    ],
    alignment: "start",
  },
});
