import * as Scrivito from 'scrivito'

const SwiperWidget = Scrivito.provideWidgetClass('SwiperWidget', {
  attributes: {
    items: ['widgetlist', { only: 'SwiperItemWidget' }]

  }
})

export default SwiperWidget
