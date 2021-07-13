import * as Scrivito from 'scrivito'

const ProcessSwiperWidget = Scrivito.provideWidgetClass('ProcessSwiperWidget', {
  attributes: {
    items: ['widgetlist', { only: 'ProcessSwiperItemWidget' }]

  }
})

export default ProcessSwiperWidget
