import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('ReferencesWidget', {
  title: 'Content Reference',
  attributes: {

    pageType: {
      title: 'Content Type',
      description: 'Default: News Post',
      values: [
        { value: 'NewsPost', title: 'News Post' },
        { value: 'PortfolioPost', title: 'Portfolio Post' },

      ]
    }

  },
  properties: [
    'pageType'

  ],
  initialContent: {
    pageType: 'NewsPost'
  }
})
