import * as Scrivito from 'scrivito'

const ProcessSwiperItemWidget = Scrivito.provideWidgetClass('ProcessSwiperItemWidget', {
  onlyInside: 'ProcessSwiperWidget',
  attributes: {
    stepTitle: 'string',
    content: 'html',
    durationLabel: 'string',
    duration: 'string',
    media: "reference",
    button: "link"
  }
})

export default ProcessSwiperItemWidget
