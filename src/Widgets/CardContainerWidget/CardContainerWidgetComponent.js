import * as React from 'react'
import * as Scrivito from 'scrivito'

Scrivito.provideComponent('CardContainerWidget', ({ widget }) => (
  <div className="posts_section">
  <Scrivito.ContentTag
    content={widget}
    attribute="content"
    className="posts_wrap"
    />
  </div>
))
