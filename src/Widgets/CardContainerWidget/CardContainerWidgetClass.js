import * as Scrivito from 'scrivito'

const CardContainerWidget = Scrivito.provideWidgetClass('CardContainerWidget', {
  attributes: {
    items: ['widgetlist', { only: "CardWidget" }],
  }
})

export default CardContainerWidget
