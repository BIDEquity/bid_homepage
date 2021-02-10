import * as Scrivito from "scrivito";
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";
import HeadlineWidget from "../HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";

Scrivito.provideEditingConfig("BidCtaTeaser", {
  title: "Bid Cta Teaser",
  initialContent: {
    
    content: [
      new HeadlineWidget({}),
      new TextWidget({
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation sed do eiusmod tempor incididunt ut labore et dolore magna."
      }),
      
      new ButtonWidget({
        style: "btn-primary",
        alignment: "center" 
      })
    ]
  },
});
