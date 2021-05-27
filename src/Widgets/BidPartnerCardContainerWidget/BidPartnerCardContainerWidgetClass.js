import * as Scrivito from 'scrivito'

const BidPartnerCardContainerWidget = Scrivito.provideWidgetClass('BidPartnerCardContainerWidget', {
  attributes: {
    content: ['widgetlist', { only: "BidPartnerCardWidget" }],
  }
})

export default BidPartnerCardContainerWidget
