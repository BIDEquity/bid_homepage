import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPortfolioDetailsWidget", ({ widget }) => {
  const link = widget.get("detailsButton");
  let linkText = link && link.title();
  
  return (
    <div className="article_content article_portfolio">
      <div className="article_portfolio_top">
        <div className="container">
          <a className="article_page_category more_link" href="#">
            Portfolio
          </a>
          <div className="article_content_wrap">
            <div className="article_content_main">
              <div className="article_content_top">
                <div className="article_content_logo">
                  <Scrivito.ImageTag
                    content={widget}
                    attribute="logo"
                    alt="Company logo"
                  />
                </div>

                <Scrivito.ContentTag
                  content={widget}
                  attribute="headline"
                  tag="h1"
                  className="article_content_title"
                />
              </div>
              <div className="article_content_intro">
                <strong>
                  <Scrivito.ContentTag
                    content={widget}
                    attribute="articleIntro"
                    tag="p"
                  />
                </strong>
              </div>
              <div className="block_text">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="articleBody"
                  tag="p"
                />
              </div>
            </div>
            <div className="article_content_sidebar">
              <a className="content_nav_link content_next" href="#">
                <p className="content_nav_direction">Next</p>
                <div className="content_nav_info">
                  <Scrivito.ContentTag
                    tag="span"
                    content={widget}
                    attribute="nextPortfolio"
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
      <div className="portfolio_stats">
        <div className="container">
          <div className="portfolio_stats_wrap">
            <div className="portfolio_stats_item">
              <Scrivito.ContentTag content={widget} attribute="statsItem1" />
            </div>

            <div className="portfolio_stats_item">
              <Scrivito.ContentTag content={widget} attribute="statsItem2" />
            </div>

            <div className="portfolio_stats_item">
              <Scrivito.ContentTag content={widget} attribute="statsItem3" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_details_img">
        <Scrivito.ImageTag content={widget} attribute="bgImage" alt="" />
      </div>
      <div className="article_portfolio_bottom">
        <div className="container">
          <div className="article_content_wrap">
            <div className="article_content_main">
              <Scrivito.ContentTag
                content={widget}
                attribute="headline2"
                tag="h2"
                className="section_title"
              />
              <div className="block_text">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="body"
                  tag="p"
                />
              </div>
            </div>
            <div className="article_content_sidebar">
              <div className="testimonial_item dark">
                <div className="testimonial_item_text">
                  <Scrivito.ContentTag
                    tag="p"
                    content={widget}
                    attribute="quote"
                  />
                </div>
                <div className="testimonial_item_bottom">
                  
                  <Scrivito.ContentTag
                    tag="p"
                    content={widget}
                    attribute="name"
                    className="testimonial_item_name"
                  />
                  
                  <Scrivito.ContentTag
                    tag="p"
                    content={widget}
                    attribute="position"
                    className="testimonial_item_position"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="article_content_nav content_nav">
            <a className="content_nav_link content_prev" href="#">
              <p className="content_nav_direction">Previous</p>
              <div className="content_nav_info">
                <span className="arrow_btn"><svg
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
                  </svg></span>
                <span className="content_nav_name">Midoco’s Travel Tech</span>
              </div>
            </a>
            <a className="content_nav_link content_next" href="#">
              <p className="content_nav_direction">Next</p>
              <div className="content_nav_info">
                <span className="content_nav_name">
                  xClinical’s innovations
                </span>
                <span className="arrow_btn"><svg
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
                  </svg></span>
              </div>
            </a>
          </div>
          <div className="article_posts">
            
            <Scrivito.ContentTag
              content={widget}
              tag="h2"
              attribute="sectionTitle"
              className="section_title bottom_line"
            />
            <div className="posts_slider_wrap">
              <div className="posts_slider swiper-container">
                <div className="swiper-wrapper">
                  <Scrivito.ContentTag
                    content={widget}
                    attribute="content"
                  />
                </div>
              </div>
            </div>
            
          </div>
          <div className="portfolio_details_bottom row">
            <div className="col_6 col_t_12">
              <div className="portfolio_details_text">
              <Scrivito.ContentTag
                    content={widget}
                    attribute="detailsText"
                    tag="p"
                  />
              </div>
              <Scrivito.LinkTag to={link} className="btn">
                {linkText}
              </Scrivito.LinkTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
