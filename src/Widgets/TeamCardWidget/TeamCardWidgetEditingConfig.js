import * as Scrivito from 'scrivito';
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";

Scrivito.provideEditingConfig("TeamCardWidget", {
  title: "Team Card",
  
  properties: ['image', 'name', 'position','link'],
  
});