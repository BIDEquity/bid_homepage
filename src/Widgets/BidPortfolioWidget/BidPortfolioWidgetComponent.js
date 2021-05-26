import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPortfolioWidget", ({ widget }) => {
  const link = widget.get("sectionLink");
  let linktext = link && link.title();

  return (
    <>
      <div className="portfolio_posts">
        <div className="container">
          <div className="portfolio_posts_wrap">
            <Scrivito.ContentTag
              content={widget}
              attribute="card"
              className="portfolio_post_item"
            />
          </div>
        </div>
      </div>
      <div className="about_us">
        <Scrivito.ImageTag
          content={widget}
          attribute="bgImage"
          className="info_bg"
          alt=""
        />
        <div className="info_slider swiper-container">
          <div className="swiper-wrapper">
            <div className="info_slider_item swiper-slide">
              <div className="container">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="sectionHeadline"
                  className="section_title bottom_line col_6 col_t_12"
                  tag="h2"
                />

                <Scrivito.LinkTag to={link} className="info_slider_link">
                  {linktext}
                </Scrivito.LinkTag>
              </div>
            </div>
          </div>
          <div className="info_slider_bottom">
            <div className="container">
              <div className="info_slider_pagination slider_pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_news">
        <div className="container">
          <Scrivito.ContentTag
            content={widget}
            attribute="newsHeadline"
            tag="h2"
            className="section_title bottom_line"
          />
          <Scrivito.ContentTag content={widget} attribute="content" />
        </div>
      </div>
    </>
  );
});
