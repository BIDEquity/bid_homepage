import * as Scrivito from 'scrivito'

const TabbedBlocksItemWidget = Scrivito.provideWidgetClass('TabbedBlocksItemWidget', {
  onlyInside: 'TabbedBlocksWidget',
  attributes: {
    
    title: 'string',
    text: 'html',
    image: 'reference',
    tag: 'string',
    sliderLink: "link",
  }
})

export default TabbedBlocksItemWidget
