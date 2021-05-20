import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidPersonWidget.scss";

Scrivito.provideComponent("BidPersonWidget", ({ widget }) => {
  return (
    <div className="article_content article_team">
      <div className="container">
        <a className="article_page_category more_link hidden" href="#">
          Team
        </a>
        <div className="article_content_wrap">
          <div className="article_content_main">
            <div className="article_content_top bottom_line">
              <h1 className="article_content_title">
                <Scrivito.ContentTag
                  tag="span"
                  content={widget}
                  attribute="headline"
                />
              </h1>
              <Scrivito.ContentTag
                tag="p"
                content={widget}
                attribute="contentCategory"
                className="article_content_category"
              />
              <div className="article_content_soc">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.946"
                    height="17.946"
                    viewBox="0 0 17.946 17.946"
                  >
                    <path
                      class="a"
                      d="M17.2,0H.748A.749.749,0,0,0,0,.748V17.2a.748.748,0,0,0,.748.748H17.2a.748.748,0,0,0,.748-.748V.748A.748.748,0,0,0,17.2,0M5.324,15.292H2.659V6.728H5.324ZM3.992,5.558A1.544,1.544,0,1,1,5.535,4.014,1.543,1.543,0,0,1,3.992,5.558m11.3,9.734H12.631V11.128c0-.993-.017-2.271-1.382-2.271-1.385,0-1.6,1.083-1.6,2.2v4.236H6.994V6.728H9.545V7.9h.036A2.8,2.8,0,0,1,12.1,6.516c2.695,0,3.193,1.773,3.193,4.08Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="article_content_img">
              <Scrivito.ImageTag
                content={widget}
                attribute="image"
                alt={widget.get("headline")}
              />
            </div>
            <div className="article_content_intro">
              <Scrivito.ContentTag
                tag="p"
                content={widget}
                attribute="articleIntro"
              />
            </div>
            <div className="block_text">
            <Scrivito.ContentTag
                tag="div"
                content={widget}
                attribute="body"
                
              />
              <div className="article_content_quote testimonial_item dark bottom_line">
                <div className="testimonial_item_text">
                <Scrivito.ContentTag
                tag="p"
                content={widget}
                attribute="quote"
                
              />
                </div>
              </div>
              <Scrivito.ContentTag
                tag="div"
                content={widget}
                attribute="bodyBottom"
                
              />
            </div>
          </div>
          <div className="article_content_sidebar">
            <a className="content_nav_link content_next" href="#">
              <p className="content_nav_direction">Next</p>
              <div className="content_nav_info">
                <span className="content_nav_name">
                <Scrivito.ContentTag
                tag="span"
                content={widget}
                attribute="nextMember"
                className="content_nav_name"
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
            <div className="job_post">
              <p className="job_post_category">Jobs</p>
              <Scrivito.ContentTag
                tag="h3"
                content={widget}
                attribute="nextMember"
                className="job_post_name"
              />
              
              <a className="more_link" href="#">
                Learn more
              </a>
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
              <span className="content_nav_name">John Mayer</span>
            </div>
          </a>
          <a className="content_nav_link content_next" href="#">
            <p className="content_nav_direction">Next</p>
            <div className="content_nav_info">
              <span className="content_nav_name">Lars Kloppsteck</span>
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
          <h2 className="section_title bottom_line">From Helge’s desk</h2>
          <div className="posts_slider_wrap">
            <div className="posts_slider swiper-container">
              <div className="swiper-wrapper">
                <a className="post_slide swiper-slide" href="#">
                  <div className="post_item_img">
                    <img src="images/post_1.jpg" alt="" />
                  </div>
                  <div className="post_item_info">
                    <p className="post_item_date bottom_line">5 Mar 2021</p>
                    <div className="post_item_text">
                      <p>
                        Acquisition of Fortress Medical Systems quickens BID
                        Equity‘s life science software group around XClinical
                        and Carenity.
                      </p>
                    </div>
                  </div>
                </a>
                <a className="post_slide swiper-slide" href="#">
                  <div className="post_item_img">
                    <img src="images/post_2.jpg" alt="" />
                  </div>
                  <div className="post_item_info">
                    <p className="post_item_date bottom_line">5 Feb 2021</p>
                    <div className="post_item_text">
                      <p>
                        BID Equity acquires stake in Infopark Group, creator of
                        the SaaS-based Content Management System Scrivito.
                      </p>
                    </div>
                  </div>
                </a>
                <a className="post_slide swiper-slide" href="#">
                  <div className="post_item_img">
                    <img src="images/post_3.jpg" alt="" />
                  </div>
                  <div className="post_item_info">
                    <p className="post_item_date bottom_line">26 Jan 2021</p>
                    <div className="post_item_text">
                      <p>
                        BID Equity Fund II announces the acquisition of PiSA
                        sales GmbH to strengthen the recently acquired Infopark
                        Group.
                      </p>
                    </div>
                  </div>
                </a>
                <a className="post_slide swiper-slide" href="#">
                  <div className="post_item_img">
                    <img src="images/post_4.jpg" alt="" />
                  </div>
                  <div className="post_item_info">
                    <p className="post_item_date bottom_line">26 Jan 2021</p>
                    <div className="post_item_text">
                      <p>
                        myneva Group acquires SWING to further strengthen its
                        market-leading position in the social software sector.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
