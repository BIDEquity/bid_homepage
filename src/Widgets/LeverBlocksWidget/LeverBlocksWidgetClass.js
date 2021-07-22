import * as Scrivito from 'scrivito'

const LeverBlocksWidget = Scrivito.provideWidgetClass('LeverBlocksWidget', {
  attributes: {
    items: ['widgetlist', { only: 'LeverBlocksItemWidget' }],
    
    
  }
})

export default LeverBlocksWidget
