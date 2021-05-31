import * as Scrivito from 'scrivito'

const SwiperItemWidget = Scrivito.provideWidgetClass('SwiperItemWidget', {
  onlyInside: 'SwiperWidget',
  attributes: {
    title: 'string',
    link: 'link',
    image: ['reference', {only: "Image"}],

  }
})

export default SwiperItemWidget
