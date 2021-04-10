import * as Scrivito from 'scrivito';
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";

Scrivito.provideEditingConfig("CardWidget", {
  title: "Card",
  
  properties: ['image', 'description', 'content'],
  
});