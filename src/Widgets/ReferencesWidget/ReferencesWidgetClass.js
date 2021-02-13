import * as Scrivito from 'scrivito'

const ReferencesWidget = Scrivito.provideWidgetClass('ReferencesWidget', {

  attributes: {
    pageType: ['enum', { values: ['NewsPost', 'PortfolioPost'] }]
  }
})

export default ReferencesWidget
