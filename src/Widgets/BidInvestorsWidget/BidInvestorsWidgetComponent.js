import * as React from "react";
import * as Scrivito from "scrivito";
import { Swiper, SwiperSlide } from 'swiper/react';

Scrivito.provideComponent("BidInvestorsWidget", ({ widget }) => {
  const link = widget.get("link");
  let linktext = link && link.title();

  return (
    <>
      <div className="investors_content bg_blue_light">
        <div className="container">
          <Scrivito.ContentTag
            content={widget}
            attribute="sectionTitle"
            tag="h2"
            className="section_title col_8 col_t_12"
          />
          <div className="content_info">
            <div className="content_info_inner">
              <div className="content_info_top">
                <div className="testimonial_item">
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
                <div className="content_stats_box">
                  <div className="content_stats_inner">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="statsNumber"
                      tag="span"
                      className="content_stats_number"
                    />

                    <Scrivito.ContentTag
                      content={widget}
                      attribute="statsText"
                      tag="p"
                      className="content_stats_text"
                    />
                  </div>
                </div>
              </div>
              <div className="content_info_bottom">
                <div className="content_info_box info_box left">
                  <div className="info_box_content">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="infoTitle"
                      tag="h2"
                      className="title_block bottom_line light"
                    />

                    <Scrivito.LinkTag to={link} className="info_box_link">
                      {linktext}
                    </Scrivito.LinkTag>
                  </div>
                </div>
                <div className="content_info_img">
                  <Scrivito.ImageTag content={widget} attribute="image1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="investors_news">
        <div className="container">
        
          <Scrivito.ContentTag 
            content={widget}
            attribute="newsTitle"
            tag="h2"
            className="section_title col_9 col_t_12"
          />
                <Scrivito.ContentTag
                  content={widget}
                  attribute="cards"
                  className="xswiper-wrapper"
                />
              
            
          <div className="posts_more">
            <a className="more_link" href="#">
              More news
            </a>
          </div>
        </div>
      </div>
      <div className="entrepreneurs_help">
        <div className="container">
          
          <Scrivito.ContentTag
            content={widget}
            attribute="helpTitle"
            tag="h2"
            className="section_title col_8 col_t_12"
          />
          
          
            
            <Scrivito.ContentTag
              content={widget}
              attribute="tagSection"
              
            />
            
            
          
        </div>
      </div>
    </>
  );
});
