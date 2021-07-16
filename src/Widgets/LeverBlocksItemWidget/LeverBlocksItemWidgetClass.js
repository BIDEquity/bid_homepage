import * as Scrivito from 'scrivito'

const LeverBlocksItemWidget = Scrivito.provideWidgetClass('LeverBlocksItemWidget', {
  onlyInside: 'LeverBlocksWidget',
  attributes: {
    company: 'stringlist',
    title: 'string',
    text: 'string',
    lever: ['widgetlist', {only: ["BidLeverBlock"]}],

  }
})

export default LeverBlocksItemWidget
