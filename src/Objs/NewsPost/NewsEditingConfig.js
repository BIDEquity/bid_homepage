import * as Scrivito from "scrivito";
import PageObjIcon from "../../assets/images/page_obj.svg";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import ColumnContainerWidget from "../../Widgets/ColumnContainerWidget/ColumnContainerWidgetClass";
import ColumnWidget from "../../Widgets/ColumnWidget/ColumnWidgetClass";
import BoxWidget from "../../Widgets/BoxWidget/BoxWidgetClass";
import ExtendedFactWidget from "../../Widgets/BidFactWidget/BidFactWidgetClass";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("NewsPost", {
  title: "News Post",
  thumbnail: PageObjIcon,
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "News title",
    },
    tags: {
      title: "Tags"
    },
    
    datePosted: {
      title: "Posted at",
      description: "The news was posted at.",
    },
  },
  properties: ["title", "tags", "datePosted"],

  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...metadataInitialContent,
    title: "Title of the news (Click to edit)",
    text: "News content (Click to edit)",
    body: [
      
      new SectionWidget({
        useFullHeight: "yes",
        content: [
          new ColumnContainerWidget({
            alignment: "stretch",
            columns: [
              new ColumnWidget({
                colSize: 4,
                content: [
                  new BoxWidget({
                    useOffset: "yes",
                    body: [
                      new ExtendedFactWidget ({title: "01"})
                    ]
                  }),
                ],
              }),
              new ColumnWidget({
                colSize: 4,
                content: [
                  new BoxWidget({
                    useOffset: "yes",
                    body: [
                      new ExtendedFactWidget ({title: "02"})
                    ]
                  }),
                ],
              }),
              new ColumnWidget({
                colSize: 4,
                content: [
                  new BoxWidget({
                    useOffset: "yes",
                    body: [
                      new ExtendedFactWidget ({title: "03"})
                    ]
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
    datePosted: new Date(),
  },
  validations: [
    ...metadataValidations,
    [
      "title",

      (title) => {
        if (!title) {
          return {
            message: "The news title must be set.",
            severity: "error",
          };
        }
      },
    ],
  ],
});
