import * as Scrivito from "scrivito";
import HeadlineWidget from "../HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";

Scrivito.provideEditingConfig("BidHeadlineTextBlockWidget", {
  title: "Bid Headline Text Block",
  
  initialContent: {
    
    content: [
      new HeadlineWidget({
        headline: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT.",
        level: "h2",
        style: "h2"
      }),
      new TextWidget({
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation sed do eiusmod tempor incididunt ut labore et dolore magna."
      }),
    ]
  },
});
