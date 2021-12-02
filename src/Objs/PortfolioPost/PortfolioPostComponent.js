import * as React from "react";
import * as Scrivito from "scrivito";
import { Swiper } from "swiper/react";
import NextLink from "../../Components/NextLink";
import PreviousLink from "../../Components/PreviousLink"

Scrivito.provideComponent("PortfolioPost", ({ page }) => {
  const exited = page.get("exited") || "no"
  const params = {
    loop: false,
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    speed: 500,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
    },
  };
  const link = page.get("detailsButton");
  let linkText = link && link.title();
  
  return (
    <div className="article_content article_portfolio">
      <div className="article_portfolio_top">
        <div className="container">
          <Scrivito.LinkTag className="article_page_category more_link" to={page.get("portfolioLink")}>
            Portfolio
            </Scrivito.LinkTag>
          <div className="article_content_wrap">
            <div className="article_content_main">
              <div className="article_content_top">
                {exited === "yes" && <div className="exited">Exited</div>}
                <div className="article_content_logo">
                  <Scrivito.ImageTag
                    content={page}
                    attribute="logo"
                    alt="Company logo"
                  />
                </div>

                <Scrivito.ContentTag
                  content={page}
                  attribute="headline"
                  tag="h1"
                  className="article_content_title"
                />
              </div>
              <div className="article_content_intro">
                <strong>
                  <Scrivito.ContentTag
                    content={page}
                    attribute="articleIntro"
                    tag="p"
                  />
                </strong>
              </div>
              <div className="block_text">
                <Scrivito.ContentTag
                  content={page}
                  attribute="articleBody"
                  
                />
              </div>
            </div>
            <div className="article_content_sidebar">
            <NextLink type="PortfolioPost" currentPost={page} />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_stats">
        <div className="container">
          <div className="portfolio_stats_wrap">
            <div className="portfolio_stats_item">
              <Scrivito.ContentTag content={page} attribute="statsItem1" />
            </div>

            <div className="portfolio_stats_item">
              <Scrivito.ContentTag content={page} attribute="statsItem2" />
            </div>

            <div className="portfolio_stats_item">
              <Scrivito.ContentTag content={page} attribute="statsItem3" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_details_img">
        <Scrivito.ImageTag content={page} attribute="bgImage" alt="" />
      </div>
      <div className="article_portfolio_bottom">
        <div className="container">
          <div className="article_content_wrap">
            <div className="article_content_main">
              <Scrivito.ContentTag
                content={page}
                attribute="headline2"
                tag="h2"
                className="section_title"
              />
              <div className="block_text">
                <Scrivito.ContentTag
                  content={page}
                  attribute="body"
                  
                />
              </div>
            </div>
            <div className="article_content_sidebar">
              <div className="testimonial_item dark">
                <div className="testimonial_item_text">
                  <Scrivito.ContentTag
                    tag="p"
                    content={page}
                    attribute="quote"
                  />
                </div>
                <div className="testimonial_item_bottom">
                  
                  <Scrivito.ContentTag
                    tag="p"
                    content={page}
                    attribute="name"
                    className="testimonial_item_name"
                  />
                  
                  <Scrivito.ContentTag
                    tag="p"
                    content={page}
                    attribute="position"
                    className="testimonial_item_position"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="article_content_nav content_nav">
          <PreviousLink type="PortfolioPost" currentPost={page} />
            <NextLink type="PortfolioPost" currentPost={page} />
          </div>
          <div className="article_posts">
            
            <Scrivito.ContentTag
              content={page}
              tag="h2"
              attribute="sectionTitle"
              className="section_title bottom_line"
            />
           
					  <div className="posts_slider_wrap">
              <div className="posts_slider xxxswiper-container">
                <div className="xxxswiper-wrapper">
                  <Swiper {...params}>
                  <Scrivito.ContentTag
                    content={page}
                    attribute="content"
                    
                  />
                  </Swiper>
                </div>
              </div>
            </div>
            
          </div>
          <div className="portfolio_details_bottom row">
            <div className="col_6 col_t_12">
              <div className="portfolio_details_text">
              <Scrivito.ContentTag
                    content={page}
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

)});
