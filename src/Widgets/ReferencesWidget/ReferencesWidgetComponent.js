import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('ReferencesWidget', ({ widget }) => {
  const refType = widget.get('pageType')

  const references = Scrivito.getClass(`${refType}`).all().order('date', 'desc')

  if (!references.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Add a reference to another page in widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (

    <>
      {[...references].map((item, index) => (

        <div key={index}>
          {item.get('title') && <h3>{item.get('title')}</h3>}

        </div>
      ))}
    </>
  )
}
)
