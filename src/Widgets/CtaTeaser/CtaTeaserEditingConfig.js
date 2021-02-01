import * as Scrivito from "scrivito";
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";
import HeadlineWidget from "../HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";

Scrivito.provideEditingConfig("CtaTeaser", {
  title: "Cta Teaser",
  initialContent: {
    
    content: [
      new HeadlineWidget({}),
      new TextWidget({}),
      
      new ButtonWidget({
        style: "btn-primary",
        alignment: "center" 
      })
    ]
  },
});
