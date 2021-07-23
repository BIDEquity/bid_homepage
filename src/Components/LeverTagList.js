import * as React from 'react'

function LeverTagList ({ showTags, tags, currentTag, setTag }) {
  if (!showTags) { return null }

  const onClick = (e, tag) => {
    e.preventDefault()
    e.stopPropagation()
    setTag(tag)
    
  }

  return (
    
    <div>
        <ul className='operational_value_buttons tabs_buttons'>

          {
            tags.map(tag =>
              <li
                role='presentation'
                key={tag}
                className={currentTag === tag ? 'operational_value_btn tab_btn current' : 'operational_value_btn tab_btn'}
              >
                <a onClick={e => onClick(e, tag)} href='#'>{tag}</a>
              </li>
            )
          }
        </ul>
      
      
    </div>
  )
}

export default LeverTagList
