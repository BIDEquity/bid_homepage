import * as Scrivito from 'scrivito'

const CardContainerWidget = Scrivito.provideWidgetClass('CardContainerWidget', {
  attributes: {
    content: ['widgetlist', { only: "CardWidget" }],
  }
})

export default CardContainerWidget
