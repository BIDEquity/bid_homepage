import * as Scrivito from 'scrivito'

const LeverBlocksWidget = Scrivito.provideWidgetClass('LeverBlocksWidget', {
  attributes: {
    items: ['widgetlist', { only: 'LeverBlocksItemWidget' }],
    bottomTeaser: "string",
    button: "link",
  }
})

export default LeverBlocksWidget
