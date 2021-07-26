import * as React from "react";
import * as Scrivito from "scrivito";

const NextLink = Scrivito.connect(({ currentPost, type }) => {
  const currentDate = currentPost.get("date");

  // find greater than publishedAt
  const newerPost = Scrivito.getClass(type)
    .where("date", "isGreaterThan", currentDate)
    .order("date", "asc")
    .first();

  if (!newerPost) {
    return null;
  }
  
  return (
    <Scrivito.LinkTag className="content_nav_link content_next" to={newerPost}>
      <Scrivito.ContentTag
                  content={currentPost}
                  attribute="nextLabel"
                  tag="p"
                  className="content_nav_direction"
                />
                  <div className="content_nav_info">
                    <span className="content_nav_name">
                      {newerPost.get("title")}
                    </span>
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
                  </div>
    </Scrivito.LinkTag>
  );
});

export default NextLink;