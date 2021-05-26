import * as React from 'react'
import * as Scrivito from 'scrivito'

Scrivito.provideComponent('BidPortfolioCardContainerWidget', ({ widget }) => (
  
  <Scrivito.ContentTag
    content={widget}
    attribute="content"
    className="portfolio_posts_wrap"
    />
    
))
