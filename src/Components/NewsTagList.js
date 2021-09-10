import * as React from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function NewsTagList({ showTags, tags, currentTag, setTag }) {
  if (!showTags) {
    return null;
  }
console.log(tags)
  const onClick = (e, tag) => {
    e.preventDefault();
    e.stopPropagation();
    setTag(tag);
  };

  return (
    <>
      
        <ul className="">
          <li
            role="presentation"
            className={!currentTag ? "active" : ""}
          >
            <a className="" onClick={(e) => onClick(e, "")} href="#">
              All
            </a>
          </li>
          {tags.map((tag) => (
            <li
              role="presentation"
              key={tag}
              className={currentTag === tag ? "active" : ""}
            >
              <a className="" onClick={(e) => onClick(e, tag)} href="#">
                {tag}
              </a>
            </li>
          ))}
        </ul>
      
      <select
        onChange={(e) => setTag(e.target.value)}
        value={currentTag}
        className="d-block d-sm-none"
      >
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </>
  );
}
/* eslint-enable jsx-a11y/anchor-is-valid */

export default NewsTagList;
