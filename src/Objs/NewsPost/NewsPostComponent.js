import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";
import NextLink from "../../Components/NextLink";
import PreviousLink from "../../Components/PreviousLink";

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
                <NextLink type="NewsPost" currentPost={page}/>
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
        </div>
        <div className="new_post_img">
          <Scrivito.ImageTag content={page} attribute="image" />
        </div>
        <div className="article_new_bottom">
          <div className="container">
            
            <div className="article_content_nav content_nav">
              
                <PreviousLink type="NewsPost" currentPost={page}  />
              
              <NextLink type="NewsPost" currentPost={page} />
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
      </div>
    </>
  );
});
