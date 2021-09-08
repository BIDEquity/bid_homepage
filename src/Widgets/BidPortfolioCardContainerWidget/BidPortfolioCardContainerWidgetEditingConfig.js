import * as Scrivito from 'scrivito'
import sectionWidgetIcon from '../../assets/images/section_widget.svg'

Scrivito.provideEditingConfig('BidPortfolioCardContainerWidget', {
  title: 'Bid Portfolio Card Container',
  thumbnail: sectionWidgetIcon,
  
  properties: [
    'content',
    'link'
  ],
})
