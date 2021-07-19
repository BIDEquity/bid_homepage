import * as Scrivito from 'scrivito';
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";

Scrivito.provideEditingConfig("CardWidget", {
  title: "Bid News Card",
  
  properties: ['image', 'date', 'description', 'content', 'newsLink'],
  
});