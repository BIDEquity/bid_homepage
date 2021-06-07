import * as Scrivito from 'scrivito'
import sectionWidgetIcon from '../../assets/images/section_widget.svg'

Scrivito.provideEditingConfig('CardContainerWidget', {
  title: 'Card Container',
  thumbnail: sectionWidgetIcon,
  
  properties: [
    'items'

  ],
})
