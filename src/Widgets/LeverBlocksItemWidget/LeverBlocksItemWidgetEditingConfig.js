import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('LeverBlocksItemWidget', {
  title: 'Lever Block',
  attributes: {

    company: {
      title: 'Company'
    },

    title: {
      title: 'Title'
    },
    text: {
      title: 'Text'
    },
    lever: {
      title: 'Lever Block Widget'
    },
  },
  properties: [
    'company',
    'title',
    'text',
    'lever',
  ]

})
