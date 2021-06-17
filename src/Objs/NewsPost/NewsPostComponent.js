import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";

Scrivito.provideComponent("NewsPost", ({ page }) => {
  const categorylink = page.get("category");
  let categorytext = categorylink && categorylink.title();

  const morelink = page.get("more");
  let moretext = morelink && morelink.title();

  return (
    <>
      <div className="article_content article_new">
        <div className="article_new_top">
          <div className="container">
            <Scrivito.LinkTag
              to={categorylink}
              className="article_page_category more_link"
            >
              {categorytext}
            </Scrivito.LinkTag>
            <div className="article_content_wrap">
              <div className="article_content_main">
                <div className="article_content_top">
                  <Scrivito.ContentTag
                    content={page}
                    attribute="title"
                    tag="h1"
                    className="article_content_title"
                  />
                  <div>{page.get("company")}, {formatDate(page.get("date"), "dd mmm yyyy")}</div>
                </div>
                <div className="block_text">
                  <p>
                    <Scrivito.ContentTag
                      content={page}
                      attribute="teaser"
                      tag="strong"
                    />
                  </p>
                  <Scrivito.ContentTag content={page} attribute="body" />
                </div>
              </div>
              <div className="article_content_sidebar">
                <a className="content_nav_link content_next" href="#">
                  <Scrivito.ContentTag
                    content={page}
                    attribute="nextLabel"
                    tag="p"
                    className="content_nav_direction"
                  />
                  <div className="content_nav_info">
                    <span className="content_nav_name">
                      Acquisition of US-based Fortress Medical Systems
                      accelerates BID Equity‘s life science software group
                      around German XClinical and French Carenity
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
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="new_post_img">
          <Scrivito.ImageTag content={page} attribute="image" />
        </div>
        <div className="article_new_bottom">
          <div className="container">
            <div className="article_content_wrap">
              <div className="article_content_main">
                <Scrivito.ContentTag
                  content={page}
                  attribute="body2"
                  className="block_text"
                />
              </div>
              <div className="article_content_sidebar">
                <div className="testimonial_item dark">
                  <div className="testimonial_item_text">
                    <Scrivito.ContentTag
                      content={page}
                      attribute="quote"
                      tag="p"
                    />
                  </div>
                  <div className="testimonial_item_bottom">
                    <Scrivito.ContentTag
                      content={page}
                      attribute="name"
                      tag="p"
                      className="testimonial_item_name"
                    />

                    <Scrivito.ContentTag
                      content={page}
                      attribute="position"
                      tag="p"
                      className="testimonial_item_position"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="article_content_nav content_nav">
              <a className="content_nav_link content_prev" href="#">
                <Scrivito.ContentTag
                  content={page}
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
                    BID Equity Fund II acquires analytics platform Carenity
                    forging a new life science group with XClinical
                  </span>
                </div>
              </a>
              <a className="content_nav_link content_next" href="#">
                <Scrivito.ContentTag
                  content={page}
                  attribute="nextLabel"
                  tag="p"
                  className="content_nav_direction"
                />
                <div className="content_nav_info">
                  <span className="content_nav_name">
                    Acquisition of US-based Fortress Medical Systems accelerates
                    BID Equity‘s life science software group around German
                    XClinical and French Carenity
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
              </a>
            </div>
            <div className="article_posts">
              <Scrivito.ContentTag
                content={page}
                attribute="newsTitle"
                tag="h2"
                className="section_title bottom_line"
              />
              
              <Scrivito.ContentTag content={page} attribute="news" />
              <div className="posts_more">
                <Scrivito.LinkTag to={morelink} className="more_link">
                  {moretext}
                </Scrivito.LinkTag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
