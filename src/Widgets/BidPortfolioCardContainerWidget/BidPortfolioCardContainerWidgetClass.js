import * as Scrivito from 'scrivito'

const BidPortfolioCardContainerWidget = Scrivito.provideWidgetClass('BidPortfolioCardContainerWidget', {
  attributes: {
    content: ['widgetlist', { only: "BidPortfolioCardWidget" }],
    link: "link",
  }
})

export default BidPortfolioCardContainerWidget
