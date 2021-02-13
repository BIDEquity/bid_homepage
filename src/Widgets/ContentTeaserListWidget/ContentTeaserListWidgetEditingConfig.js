import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('ContentTeaserListWidget', {
  title: 'Content teaser list (aggregated)',
  attributes: {
    count: {
      title: 'Number of records',
      description: 'Default: 6'
    },
    pageType: {
      title: 'Page Type',
      description: 'Default: News Post',
      values: [
        { value: 'NewsPost', title: 'News Post' },
        { value: 'PortfolioPost', title: 'Portfolio Post' },
        { value: 'Job', title: 'Job' }

      ]
    }

  },
  properties: [
    'pageType',
    'count'
  ],
  initialContent: {
    count: 6,
    pageType: 'NewsPost'
  }
})
