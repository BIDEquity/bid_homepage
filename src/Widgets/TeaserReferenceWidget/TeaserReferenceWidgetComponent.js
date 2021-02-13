import * as React from 'react'
import * as Scrivito from 'scrivito'
import { truncate } from "lodash-es";
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('TeaserReferenceWidget', ({ widget }) => {
  const teaser = widget.get('page')

  if (!teaser) {
    return (

      <InPlaceEditingPlaceholder>
          Provide a reference to a page in the widget properties.
      </InPlaceEditingPlaceholder>

    )
  }

  return (
    <div className='text-left teaser-ref'>
      <Scrivito.LinkTag to={teaser}>
        
        <div>
          
          <h3 className="h3 m-0 p-3">{ teaser.get("title") }</h3>
          <p className="p-3">
          {truncate(Scrivito.extractText(teaser, { length: 130 }), {
            length: 100,
            separator: /,? +/,
          })}
            </p>
        </div>
      </Scrivito.LinkTag>
      <Scrivito.LinkTag to={teaser} className="p-3">
        <span className="btn-link text-uppercase">Learn more</span>
      </Scrivito.LinkTag>
    </div>
  )
})
