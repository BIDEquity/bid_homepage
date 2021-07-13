import * as Scrivito from 'scrivito'

const ProcessSwiperItemWidget = Scrivito.provideWidgetClass('ProcessSwiperItemWidget', {
  onlyInside: 'ProcessSwiperWidget',
  attributes: {
    stepTitle: 'string',
    content: 'html',
    duration: 'string',
    media: "reference",
    button: "link"
  }
})

export default ProcessSwiperItemWidget
