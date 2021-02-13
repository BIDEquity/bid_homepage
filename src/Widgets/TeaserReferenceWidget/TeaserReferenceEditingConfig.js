import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('TeaserReferenceWidget', {
  title: 'Page Reference',
  attributes: {
    page: {
      title: 'Page',
      description: 'A reference to another page.'
    }
  },
  properties: [
    'page'
  ]
})
