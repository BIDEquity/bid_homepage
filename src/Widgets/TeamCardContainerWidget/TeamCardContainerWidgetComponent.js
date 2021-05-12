import * as React from 'react'
import * as Scrivito from 'scrivito'

Scrivito.provideComponent('TeamCardContainerWidget', ({ widget }) => (
  <div className="posts_section">
  <Scrivito.ContentTag
    content={widget}
    attribute="content"
    className="posts_wrap"
    />
    <div className="posts_more">
				<a className="more_link" href="#">Full Team</a>
			</div>
  </div>
))
