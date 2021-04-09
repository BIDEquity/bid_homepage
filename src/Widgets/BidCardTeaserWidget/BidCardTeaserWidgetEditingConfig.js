import * as Scrivito from "scrivito";
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";
import HeadlineWidget from "../HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";
import ImageWidget from "../ImageWidget/ImageWidgetClass";

Scrivito.provideEditingConfig("BidCardTeaserWidget", {
  title: "Bid Card Teaser",
  attributes: {
    attribute: {
      title: 'Float',
      description: 'Float of the block. Default: left',
      values: [
        { value: "left", title: "Left" },
        { value: "right", title: "Right" },
      ],
  
    },
  },
  properties: ['float'],
  initialContent: {
    float: "left",
    content: [
      new ImageWidget({}),
      new HeadlineWidget({}),
      new TextWidget({}),
      
      new ButtonWidget({
        style: "btn-primary",
        alignment: "center" 
      })
    ]
  },
});
