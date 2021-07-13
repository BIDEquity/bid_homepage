import * as Scrivito from 'scrivito'

const PartnerSwiperItemWidget = Scrivito.provideWidgetClass('PartnerSwiperItemWidget', {
  onlyInside: 'PartnerSwiperWidget',
  attributes: {
    quote: 'string',
    name: 'string',
    position: 'string',
    image: ['reference', {only: "Image"}],

  }
})

export default PartnerSwiperItemWidget
