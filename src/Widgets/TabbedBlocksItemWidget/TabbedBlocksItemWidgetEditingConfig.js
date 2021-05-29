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
    tags: {
      title: 'Tags'
    }
  },
  properties: [
    'teaser',
    'title',
    'text',
    'image',
    'tags'
  ]

})
