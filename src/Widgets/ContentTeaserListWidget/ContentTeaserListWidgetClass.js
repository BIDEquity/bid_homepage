import * as Scrivito from 'scrivito'

const ContentTeaserListWidget = Scrivito.provideWidgetClass('ContentTeaserListWidget', {

  attributes: {

    pageType: ['enum', { values: ['NewsPost', 'PortfolioPost', 'Job'] }],
    count: 'integer'
  }
})

export default ContentTeaserListWidget
