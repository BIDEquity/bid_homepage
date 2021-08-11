import * as Scrivito from 'scrivito'

const CardContainerWidget = Scrivito.provideWidgetClass('CardContainerWidget', {
  attributes: {
    items: ['widgetlist', { only: "CardWidget" }],
    moreLink: "link"
  }
})

export default CardContainerWidget
