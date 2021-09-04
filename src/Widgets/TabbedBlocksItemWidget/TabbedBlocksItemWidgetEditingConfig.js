import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('TabbedBlocksItemWidget', {
  title: 'Block',
  attributes: {

    teaser: {
      title: 'Teaser'
    },

    title: {
      title: 'Title'
    },
    text: {
      title: 'Text'
    },
    image: {
      title: 'Image'
    },
    tag: {
      title: 'Tab label'
    }
  },
  properties: [
    'title',
    'text',
    'image',
    'tag',
    'sliderLink'
  ]

})
