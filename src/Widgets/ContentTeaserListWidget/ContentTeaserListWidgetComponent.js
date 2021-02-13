import * as React from 'react'
import * as Scrivito from 'scrivito'
import formatDate from '../../utils/formatDate'
import { truncate } from 'lodash-es'

Scrivito.provideComponent('ContentTeaserListWidget', ({ widget }) => {
  const refType = widget.get('pageType') || 'BlogPost'
  const count = widget.get('count') || 6

  const references = Scrivito.getClass(refType).all().order('_createdAt', 'desc').take(count)

  if (!references.length && Scrivito.isInPlaceEditingActive()) {
    return (
      <h4 className='text-center'>
        Provide a reference to a content type in the widget properties.
      </h4>
    )
  }

  return (
    <div>

      {[...references].map((item, index) => (

        <div key={index} className='row mb-5'>
          <div className='col-md-3'>
            {item.get('titleImage') && <Scrivito.ImageTag content={item.get('titleImage')} alt='Image' />}
          </div>
          <div className='col-md-9'>
            {item.get('title') && <h2 className='h5 mt-0'><b>{item.get('title')}</b></h2>}
            <Teaser key={item.id()} post={item} />
            <Scrivito.LinkTag to={item}>Artikel lesen</Scrivito.LinkTag>
          </div>

        </div>

      ))}
    </div>
  )
}
)

const Teaser = Scrivito.connect(({ post }) => {
  return (
    <p>
      {truncate(Scrivito.extractText(post, { length: 330 }), {
        length: 300,
        separator: /,? +/,
      })}
    </p>

  )
})
