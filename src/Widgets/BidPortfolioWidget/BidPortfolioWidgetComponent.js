import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPortfolioWidget", ({ widget }) => {
  const link = widget.get("sectionLink");
  let linktext = link && link.title();

  return (
    <>
      <div className="portfolio_posts">
        <div className="container">
          
            <Scrivito.ContentTag
              content={widget}
              attribute="card"
              
            />
        
        </div>
      </div>
      <div className="about_us info_section">
        
        <Scrivito.ImageTag 
          content={widget}
          attribute="sliderBgImage"
          className="info_bg"
          alt=""
        />
        <div className="info_slider swiper-container">
            <div className="swiper-wrapper">
                <div className="info_slider_item swiper-slide">
                    <div className="container">
                        
                        <Scrivito.ContentTag
                          content={widget}
                          attribute="slides"
                          
                        />
                        
                        
                    </div>
                </div>
                
                
            </div>
        </div>
        <div className="info_slider_bottom">
            <div className="container">
                <div className="info_slider_pagination slider_pagination"></div>
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
