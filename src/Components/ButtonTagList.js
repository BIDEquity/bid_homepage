import * as React from 'react'

function ButtonTagList ({ showTags, tags, currentTag, setTag }) {
  if (!showTags) { return null }

  const onClick = (e, tag) => {
    e.preventDefault()
    e.stopPropagation()
    setTag(tag)
  }

  return (
    
    <div className='negative-margin-top nav-centered select-icon'>
      <div className='d-none d-sm-block'>
        <ul className='entrepreneurs_help_nav'>

          {
            tags.map(tag =>
              <li
                role='presentation'
                key={tag}
                className={currentTag === tag ? 'active nav-item' : 'nav-item'}
              >
                <a className='nav-link' onClick={e => onClick(e, tag)} href='#'>{tag}</a>
              </li>
            )
          }
        </ul>
      </div>
      
    </div>
  )
}

export default ButtonTagList
