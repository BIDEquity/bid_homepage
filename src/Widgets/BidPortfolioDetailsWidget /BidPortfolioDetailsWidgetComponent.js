import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPortfolioDetailsWidget", ({ widget }) => {
  return (
    
    <div className="article_content article_portfolio">
    <div className="article_portfolio_top">
        <div className="container">
            <a className="article_page_category more_link" href="#">Portfolio</a>
            <div className="article_content_wrap">
                <div className="article_content_main">
                    <div className="article_content_top">
                        <div className="article_content_logo">
            <picture>
              <source media="(max-width: 767px)" srcSet="images/evidentiq_mobile_logo.svg"/>
              <source media="(min-width: 768px)" srcSet="images/evidentiq_logo.svg"/>
              <img src="images/evidentiq_logo.svg" alt=""/>
            </picture>
                        </div>
                        
                        <Scrivito.ContentTag
                          content={widget}
                          attribute="headline"
                          tag="h1"
                          className="article_content_title"
                        />
                    </div>
                    <div className="article_content_intro">
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.</strong></p>
                    </div>
                    <div className="block_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="article_content_sidebar">
                    <a className="content_nav_link content_next" href="#">
                        <p className="content_nav_direction">Next</p>
                        <div className="content_nav_info">
                            <span className="content_nav_name">xClinical’s innovations</span>
                            <span className="arrow_btn">
                                SVG
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
                    <Scrivito.ContentTag 
                      content={widget}
                      attribute="statsItem1"
                    />
                </div>
                
                <div className="portfolio_stats_item">
                    <Scrivito.ContentTag 
                      content={widget}
                      attribute="statsItem2"
                    />
                </div>
                
                
                <div className="portfolio_stats_item">
                    <Scrivito.ContentTag 
                      content={widget}
                      attribute="statsItem3"
                    />
                </div>
            </div>
        </div>
    </div>
    <div className="portfolio_details_img">
        <Scrivito.ImageTag 
          content={widget}
          attribute="bgImage"
          alt=""
        />
    </div>
    <div className="article_portfolio_bottom">
        <div className="container">
            <div className="article_content_wrap">
                <div className="article_content_main">
        <h2 className="section_title">BID’S CONTRIBUTION Lorem ipsum dolor sit amet consectetur.</h2>
                    <div className="block_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="article_content_sidebar">
                    <div className="testimonial_item dark">
                        <div className="testimonial_item_text">
                            <p>They’re fun to work with. Nice people. So you tend to go the extra mile and and try to achieve things with them, rather than someone where you just do your duty.</p>
                        </div>
                        <div className="testimonial_item_bottom">
                            <p className="testimonial_item_name">Julian Brandt</p>
                            <p className="testimonial_item_position">Founder, Xscape</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="article_content_nav content_nav">
                <a className="content_nav_link content_prev" href="#">
                    <p className="content_nav_direction">Previous</p>
                    <div className="content_nav_info">
                        <span className="arrow_btn">
                            SVG
                        </span>
                        <span className="content_nav_name">Midoco’s Travel Tech</span>
                    </div>
                </a>
                <a className="content_nav_link content_next" href="#">
                    <p className="content_nav_direction">Next</p>
                    <div className="content_nav_info">
                        <span className="content_nav_name">xClinical’s innovations</span>
                        <span className="arrow_btn">
                            SVG
                        </span>
                    </div>
                </a>
            </div>
    <div className="article_posts">
      <h2 className="section_title bottom_line">EVIDENTIQ in the news</h2>
      <div className="posts_slider_wrap">
        <div className="posts_slider swiper-container">
          <div className="swiper-wrapper">
            <a className="post_slide swiper-slide" href="#">
              <div className="post_item_img" >
                <img src="images/post_1.jpg" alt=""/>
              </div>
              <div className="post_item_info">
                <p className="post_item_date bottom_line">5 Mar 2021</p>
                <div className="post_item_text">
                  <p>Acquisition of Fortress Medical Systems quickens BID Equity‘s life science software group around XClinical and Carenity.</p>
                </div>
              </div>
            </a>
            <a className="post_slide swiper-slide" href="#">
              <div className="post_item_img">
                <img src="images/post_2.jpg" alt=""/>
              </div>
              <div className="post_item_info">
                <p className="post_item_date bottom_line">5 Feb 2021</p>
                <div className="post_item_text">
                  <p>BID Equity acquires stake in Infopark Group, creator of the SaaS-based Content Management System Scrivito.</p>
                </div>
              </div>
            </a>
            <a className="post_slide swiper-slide" href="#">
              <div className="post_item_img">
                <img src="images/post_3.jpg" alt=""/>
              </div>
              <div className="post_item_info">
                <p className="post_item_date bottom_line">26 Jan 2021</p>
                <div className="post_item_text">
                  <p>BID Equity Fund II announces the acquisition of PiSA sales GmbH to strengthen the recently acquired Infopark Group.</p>
                </div>
              </div>
            </a>
            <a className="post_slide swiper-slide" href="#">
              <div className="post_item_img">
                <img src="images/post_4.jpg" alt=""/>
              </div>
              <div className="post_item_info">
                <p className="post_item_date bottom_line">26 Jan 2021</p>
                <div className="post_item_text">
                  <p>myneva Group acquires SWING to further strengthen its market-leading position in the social software sector.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="posts_more">
        <a className="more_link" href="#">More news</a>
      </div>
    </div>
    <div className="portfolio_details_bottom row">
      <div className="col_6 col_t_12">
        <div className="portfolio_details_text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
        <a className="btn" href="#">Let’s talk!</a>
      </div>
    </div>
        </div>
    </div>
</div>
  );
});
