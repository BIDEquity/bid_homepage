import * as Scrivito from 'scrivito'

const PartnerSwiperWidget = Scrivito.provideWidgetClass('PartnerSwiperWidget', {
  attributes: {
    items: ['widgetlist', { only: 'PartnerSwiperItemWidget' }]

  }
})

export default PartnerSwiperWidget
