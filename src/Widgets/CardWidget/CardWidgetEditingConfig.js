import * as Scrivito from 'scrivito';
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";

Scrivito.provideEditingConfig("CardWidget", {
  title: "Card",
  
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