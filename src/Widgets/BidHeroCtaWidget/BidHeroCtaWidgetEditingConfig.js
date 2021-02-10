import * as Scrivito from "scrivito";
import HeadlineWidget from "../HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";


Scrivito.provideEditingConfig("BidHeroCtaWidget", {
  title: "Bid Hero CTA Headline and Paragraph",
  initialContent: {
    
    content: [
      new HeadlineWidget({
        headline: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD",
        showDividingLine: "yes",
        level: "h1",
        style: "h1",
      }),
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
