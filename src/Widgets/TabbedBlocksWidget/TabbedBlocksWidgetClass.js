import * as Scrivito from 'scrivito'

const TabbedBlocksWidget = Scrivito.provideWidgetClass('TabbedBlocksWidget', {
  attributes: {
    items: ['widgetlist', { only: 'TabbedBlocksItemWidget' }]

  }
})

export default TabbedBlocksWidget
