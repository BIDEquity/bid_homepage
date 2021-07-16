import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("PartnerPost", ({ page }) => {
  const categorylink = page.get("category");
  let categorytext = categorylink && categorylink.title();
  const link = page.get("partnerDetailLink");
  let linktext = link && link.title();
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
                <div className="testimonial_item dark bottom_line">
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
            <div className="partner_details_row">
              <div className="partner_details_box">
                <div className="partner_details_titles">
                  <Scrivito.ContentTag
                    content={page}
                    attribute="partnerDetailTitle"
                    tag="h2"
                    className="title_block bottom_line light"
                  />

                  <Scrivito.LinkTag to={link} className="partner_details_link">
                    {linktext}
                  </Scrivito.LinkTag>
                </div>
              </div>
              <div className="partner_details_img">
                <Scrivito.ImageTag
                  content={page}
                  attribute="partnerDetailImage"
                />
              </div>
            </div>
            <div className="article_content_nav content_nav">
          <a className="content_nav_link content_prev" href="#">
          <Scrivito.ContentTag
                content={page}
                attribute="prev"
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

              <Scrivito.ContentTag
                content={page}
                attribute="prevPartner"
                tag="span"
                className="content_nav_name"
              />
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
              <Scrivito.ContentTag
                content={page}
                attribute="nextPartner"
                tag="span"
                className="content_nav_name"
              />

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
    </>
  );
});
