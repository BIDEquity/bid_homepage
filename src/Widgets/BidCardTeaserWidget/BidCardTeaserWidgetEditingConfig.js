import * as Scrivito from "scrivito";
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";
import HeadlineWidget from "../HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";
import ImageWidget from "../ImageWidget/ImageWidgetClass";

Scrivito.provideEditingConfig("BidCardTeaserWidget", {
  title: "Bid Card Teaser",
  
  properties: ['image', 'description', 'content'],
  initialContent: {
    content: [
      new ButtonWidget({
        style: "post_item_more",
        alignment: "center" 
      })
    ]
  },
});
