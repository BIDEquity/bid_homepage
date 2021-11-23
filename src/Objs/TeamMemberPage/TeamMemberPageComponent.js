import * as React from "react";
import * as Scrivito from "scrivito";
import NextLink from "../../Components/NextLink";
import PreviousLink from "../../Components/PreviousLink";

Scrivito.provideComponent("TeamMemberPage", ({ page }) => {
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
                  content={page}
                  attribute="headline"
                />
              </h1>
              <Scrivito.ContentTag
                tag="p"
                content={page}
                attribute="contentCategory"
                className="article_content_category"
              />
              <div className="article_content_soc">
                <Scrivito.LinkTag to={page.get("linkedIn")} href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 17.946 17.946"
                  >
                    <path
                      className="a"
                      d="M17.2,0H.748A.749.749,0,0,0,0,.748V17.2a.748.748,0,0,0,.748.748H17.2a.748.748,0,0,0,.748-.748V.748A.748.748,0,0,0,17.2,0M5.324,15.292H2.659V6.728H5.324ZM3.992,5.558A1.544,1.544,0,1,1,5.535,4.014,1.543,1.543,0,0,1,3.992,5.558m11.3,9.734H12.631V11.128c0-.993-.017-2.271-1.382-2.271-1.385,0-1.6,1.083-1.6,2.2v4.236H6.994V6.728H9.545V7.9h.036A2.8,2.8,0,0,1,12.1,6.516c2.695,0,3.193,1.773,3.193,4.08Z"
                    />
                  </svg>
                </Scrivito.LinkTag>
              </div>
            </div>
            <div className="article_content_img">
              <Scrivito.ImageTag content={page} attribute="image" alt="" />
            </div>
            <div className="article_content_intro">
              <Scrivito.ContentTag
                tag="p"
                content={page}
                attribute="articleIntro"
              />
            </div>
            <div className="block_text">
              <Scrivito.ContentTag tag="div" content={page} attribute="body" />
              <div className="article_content_quote testimonial_item dark bottom_line">
                <div className="testimonial_item_text">
                  <Scrivito.ContentTag
                    tag="p"
                    content={page}
                    attribute="quote"
                  />
                </div>
              </div>
              <Scrivito.ContentTag
                tag="div"
                content={page}
                attribute="bodyBottom"
              />
            </div>
          </div>
          <div className="article_content_sidebar">
            <NextLink type="TeamMemberPage" currentPost={page} />

            
          </div>
        </div>
        <div className="article_content_nav content_nav">
          <PreviousLink type="TeamMemberPage" currentPost={page} />

          <NextLink type="TeamMemberPage" currentPost={page} />
        </div>
        <div className="article_posts">
          
          <Scrivito.ContentTag
            content={page}
            attribute="desk"
            tag="h2"
            className="section_title bottom_line"
          />

          <Scrivito.ContentTag content={page} attribute="content" />
        </div>
      </div>
    </div>
  );
});
