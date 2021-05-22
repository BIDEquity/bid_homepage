import * as React from 'react'
import * as Scrivito from 'scrivito'

Scrivito.provideComponent('CardContainerWidget', ({ widget }) => (
  <div className="xxposts_section">
  <Scrivito.ContentTag
    content={widget}
    attribute="content"
    className="posts_wrap"
    />
    <div className="posts_more">
				<a className="more_link" href="#">More news</a>
			</div>
  </div>
))
