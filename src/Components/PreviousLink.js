import * as React from "react";
import * as Scrivito from "scrivito";

const PreviousLink = Scrivito.connect(({ currentPost, type }) => {
  const currentDate = currentPost.get("date");

  // find less than or equal publishedAt
  const olderPost = Scrivito.getClass(type)
    .all()
    .andNot("id", "equals", currentPost.id())
    .andNot("date", "isGreaterThan", currentDate)
    .order("date", "desc")
    .first();

  if (!olderPost) {
    return null;
  }

  return (
    <Scrivito.LinkTag className="content_nav_link content_prev" to={olderPost}>
      <Scrivito.ContentTag
                  content={currentPost}
                  attribute="prevLabel"
                  tag="p"
                  className="content_nav_direction"
                />
                <div className="content_nav_info">
                  <span className="arrow_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.284"
                      height="10.73"
                      viewBox="0 0 17.284 10.73"
                      fill="none"
                      strokeWidth="1.5"
                    >
                      <g transform="translate(-570.625 -853.857)">
                        <path
                          d="M576.989,860.911l4.3,4.3-4.3,4.3"
                          transform="translate(5.865 -5.993)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="15.783"
                          transform="translate(571.375 859.222)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="content_nav_name">
                    {olderPost.get("title")}
                  </span>
                </div>
    </Scrivito.LinkTag>
  );
});

export default PreviousLink;