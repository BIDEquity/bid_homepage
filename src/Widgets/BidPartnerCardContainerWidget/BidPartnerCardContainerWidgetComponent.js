import * as React from 'react'
import * as Scrivito from 'scrivito'

Scrivito.provideComponent('BidPartnerCardContainerWidget', ({ widget }) => (
  
  <Scrivito.ContentTag
    content={widget}
    attribute="content"
    className="partners_posts"
    />
    
))
