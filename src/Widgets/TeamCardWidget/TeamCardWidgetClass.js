import * as Scrivito from 'scrivito'

const CardWidget = Scrivito.provideWidgetClass("TeamCardWidget", {
  attributes: {
    image: "reference",
    name: "string",
    position: "string",
    
  },
  
});