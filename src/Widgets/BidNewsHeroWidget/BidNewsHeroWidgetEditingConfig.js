import * as Scrivito from "scrivito";
import HeadlineWidget from "../HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";

Scrivito.provideEditingConfig("BidNewsHeroWidget", {
  title: "Bid News Hero",
  initialContent: {
    
    content: [
      new HeadlineWidget({
        headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        showDividingLine: "yes",
        level: "h2",
        style: "h2",
      }),
      
      
      new ButtonWidget({
        style: "btn-clear",
        alignment: "left" 
      })
    ]
  },
});

