import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPartnerDetailsWidget", ({ widget }) => {
  const link = widget.get("partnerDetailLink");
  let linktext = link && link.title();
  return (
    <div className="article_content article_partner">
      <div className="container">
        <a className="article_page_category more_link" href="#">
          Partners
        </a>
        <div className="article_content_wrap">
          <div className="article_content_main">
            <div className="article_content_top bottom_line">
              <Scrivito.ContentTag
                content={widget}
                tag="h1"
                attribute="headline"
                className="article_content_title"
              />
            </div>
            <div className="article_content_intro">
              <Scrivito.ContentTag
                content={widget}
                tag="p"
                attribute="articleIntro"
              />
            </div>
            <div className="block_text">
              <Scrivito.ContentTag content={widget} attribute="articleText" />
            </div>
          </div>
          <div className="article_content_sidebar">
            <a className="content_nav_link content_next" href="#">
              <Scrivito.ContentTag
                content={widget}
                attribute="next"
                tag="p"
                className="content_nav_direction"
              />
              <div className="content_nav_info">
                <span className="content_nav_name">
                  <Scrivito.ContentTag
                    content={widget}
                    attribute="nextPartner"
                  />
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
                  content={widget}
                  attribute="quote"
                  tag="p"
                />
              </div>
              <div className="testimonial_item_bottom">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="name"
                  tag="p"
                  className="testimonial_item_name"
                />

                <Scrivito.ContentTag
                  content={widget}
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
                content={widget}
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
              content={widget}
              attribute="partnerDetailImage"
            />
          </div>
        </div>
        <div className="article_content_nav content_nav">
          <a className="content_nav_link content_prev" href="#">
          <Scrivito.ContentTag
                content={widget}
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
                content={widget}
                attribute="prevPartner"
                tag="span"
                className="content_nav_name"
              />
            </div>
          </a>
          <a className="content_nav_link content_next" href="#">
          <Scrivito.ContentTag
                content={widget}
                attribute="next"
                tag="p"
                className="content_nav_direction"
              />
            <div className="content_nav_info">
              <Scrivito.ContentTag
                content={widget}
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
  );
});
