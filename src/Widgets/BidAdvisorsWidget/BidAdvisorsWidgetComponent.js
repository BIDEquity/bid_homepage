import * as React from "react";
import * as Scrivito from "scrivito";
import { Swiper, SwiperSlide } from "swiper/react";

Scrivito.provideComponent("BidAdvisorsWidget", ({ widget }) => {
  const link = widget.get("topLink");
  let linktext = link && link.title();
  const howitworkslink = widget.get("howItWorksButton");
  let howitworkslinktext = howitworkslink && howitworkslink.title();
  const infolink1 = widget.get("infoBoxLink");
  let infolinktext1 = infolink1 && infolink1.title();
  const infolink2 = widget.get("infoBoxLink2");
  let infolinktext2 = infolink2 && infolink2.title();
  const infolink3 = widget.get("infoBoxLink3");
  let infolinktext3 = infolink3 && infolink3.title();
  const strategylink = widget.get("strategyLink");
  let strategylinktext = strategylink && strategylink.title();
  const leverLink = widget.get("leverCTA");
  let leverLinkText = leverLink && leverLink.title();

  const [showPopup, setShowPopUp] = React.useState(false);
  const [popup, setPopup] = React.useState("");

  const onClick = () => setShowPopUp(!showPopup);
  
  return (
    <>
      <div className="top_article top_entrepreneurs bg-grey">
        <div className="entrepreneurs_intro bg-grey">
          <div className="container">
            
            <div className="entrepreneurs_intro_box info_box">
              <div className="info_box_content">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="topTitle"
                  tag="h2"
                  className="section_title bottom_line light"
                />

                <Scrivito.LinkTag to={link} className="info_box_link">
                  {linktext}
                </Scrivito.LinkTag>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="advisors_partners bg_blue_light">
        <div className="container">
          <Scrivito.ContentTag
            content={widget}
            attribute="sectionTitle"
            tag="h2"
            className="section_title col_8 col_t_12"
          />
          <Scrivito.ContentTag content={widget} attribute="partnerSlider" />
          <div className="content_info" style={{position: "relative"}}>
          {showPopup && (
              <div className="form-wrapper">
                <svg
                  className="close"
                  onClick={onClick}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.121"
                  height="18.121"
                  viewBox="0 0 18.121 18.121"
                  fill="red"
                  stroke="red"
                  strokeWidth="1.5"
                >
                  <g transform="translate(-478.939 -846.939)">
                    <line
                      x1="16"
                      y2="16"
                      transform="translate(480 848)"
                      strokeLinecap="round"
                    />
                    <line
                      x1="16"
                      y1="16"
                      transform="translate(480 848)"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
                <Scrivito.ContentTag content={widget} attribute="formWidget" />
              </div>
            )}
            <div className="content_info_inner">
              <div className="content_info_top">
                <div className="content_info_img">
                  <Scrivito.ImageTag
                    content={widget}
                    attribute="infoBoxImage"
                  />
                </div>
                <div className="content_info_box info_box">
                  <div className="info_box_content">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="infoBoxTitle"
                      tag="h2"
                      className="title_block bottom_line light"
                    />
                    <Scrivito.LinkTag className="info_box_link" onClick={onClick}>
                      {infolinktext1}
                    </Scrivito.LinkTag>
                  </div>
                </div>
              </div>
              <div className="content_info_bottom">
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
            </div>
          </div>
        </div>
      </div>
      <div className="advisors_how_work">
        <div className="container">
          <div className="how_work">
            <div className="how_work_description">
              <Scrivito.ContentTag
                content={widget}
                attribute="howItWorksTitle"
                tag="h2"
                className="section_title"
              />

              <Scrivito.ContentTag
                content={widget}
                attribute="howItWorksText"
                tag="p"
              />
            </div>
            <div className="how_wrap">
              <div className="how_box">
                <div className="how_box_icon">
                  <Scrivito.ImageTag content={widget} attribute="howImage1" />
                </div>
                <Scrivito.ContentTag
                  content={widget}
                  attribute="howTitle1"
                  tag="p"
                  className="how_box_name"
                />
                <div className="how_box_text">
                  <Scrivito.ContentTag
                    content={widget}
                    attribute="howText1"
                    tag="p"
                  />
                </div>
              </div>
              <div className="how_box">
                <div className="how_box_icon">
                  <Scrivito.ImageTag content={widget} attribute="howImage2" />
                </div>
                <Scrivito.ContentTag
                  content={widget}
                  attribute="howTitle2"
                  tag="p"
                  className="how_box_name"
                />
                <div className="how_box_text">
                  <Scrivito.ContentTag
                    content={widget}
                    attribute="howText2"
                    tag="p"
                  />
                </div>
              </div>
              <div className="how_box">
                <div className="how_box_icon">
                  <Scrivito.ImageTag content={widget} attribute="howImage3" />
                </div>
                <Scrivito.ContentTag
                  content={widget}
                  attribute="howTitle3"
                  tag="p"
                  className="how_box_name"
                />
                <div className="how_box_text">
                  <Scrivito.ContentTag
                    content={widget}
                    attribute="howText3"
                    tag="p"
                  />
                </div>
              </div>
            </div>
            <div className="how_work_bottom">
              <Scrivito.LinkTag className="btn" to={howitworkslink}>
                {howitworkslinktext}
              </Scrivito.LinkTag>
            </div>
          </div>
          <div className="advisors_news">
            <Scrivito.ContentTag
              content={widget}
              attribute="sliderTitle"
              tag="h2"
              className="section_title"
            />

            <div className="swiper-wrapper">
              <Scrivito.ContentTag content={widget} attribute="slider" />
            </div>
          </div>
          <div className="content_info">
            <div className="content_info_inner">
              <div className="content_info_top">
                <div className="content_stats_box">
                  <div className="content_stats_inner">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="statsNumber2"
                      className="content_stats_number"
                      tag="span"
                    />

                    <Scrivito.ContentTag
                      content={widget}
                      attribute="statsText2"
                      className="content_stats_text"
                      tag="p"
                    />
                  </div>
                </div>
              </div>
              <div className="content_info_bottom">
                <div className="content_info_box info_box left">
                  <div className="info_box_content">
                  {popup === "popup1" &&
                  <div className="info-popup-wrapper">
                    <svg  onClick={() => setPopup("")} xmlns="http://www.w3.org/2000/svg" width="18.121" height="18.121" viewBox="0 0 18.121 18.121" fill="red" stroke="red" strokeWidth="1.5"><g transform="translate(-478.939 -846.939)"><line x1="16" y2="16" transform="translate(480 848)" strokeLinecap="round"/><line x1="16" y1="16" transform="translate(480 848)" strokeLinecap="round"/></g></svg>
                  <Scrivito.ContentTag
                      content={widget}
                      attribute="popup1"
                      className="info-popup"
                    />

                     
                    </div>
                  }
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="infoBoxTitle2"
                      className="title_block bottom_line light"
                      tag="h2"
                    />

                    <Scrivito.LinkTag className="info_box_link" onClick={() => setPopup("popup1")}>
                      {infolinktext2}
                    </Scrivito.LinkTag>
                  </div>
                </div>
                <div className="content_info_img">
                  <Scrivito.ImageTag
                    content={widget}
                    attribute="infoBoxImage2"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transaction_process bg_blue">
        <div className="transaction_process_overview bg_blue">
          <div className="container">
            <div className="transaction_process_wrap">
              <Scrivito.ContentTag
                content={widget}
                attribute="processTitle"
                tag="h2"
                className="section_title col_8 col_t_12"
              />
              <div className="transaction_process_section">
              
              <div className="transaction_process_line line_1"></div>
        <div className="transaction_process_line line_2"></div>
        <div className="transaction_process_line line_3"></div>
        <div className="transaction_process_line line_4"></div>
        <div className="transaction_process_line line_5"></div>
                <Scrivito.ContentTag
                  content={widget}
                  attribute="processSlider"
                />
              </div>
            </div>
            <div className="content_info">
              <div className="content_info_inner">
                <div className="content_info_top">
                  <div className="content_stats_box">
                    <div className="content_stats_inner">
                      <Scrivito.ContentTag
                        content={widget}
                        attribute="statsNumber3"
                        tag="span"
                        className="content_stats_number"
                      />
                      <Scrivito.ContentTag
                        content={widget}
                        attribute="statsText3"
                        tag="p"
                        className="content_stats_text"
                      />
                    </div>
                  </div>
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
                </div>
                <div className="content_info_bottom">
                  <div className="content_info_img">
                    <Scrivito.ImageTag
                      content={widget}
                      attribute="infoBoxImage3"
                    />
                  </div>
                  <div className="content_info_box info_box">
                    <div className="info_box_content">
                      <Scrivito.ContentTag
                        content={widget}
                        attribute="infoBoxTitle3"
                        tag="h2"
                        className="title_block bottom_line light"
                      />
                      <Scrivito.LinkTag
                        className="info_box_link"
                        to={infolink3}
                      >
                        {infolinktext3}
                      </Scrivito.LinkTag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="advisors_brands">
        <div className="container">
          <Scrivito.ContentTag
            content={widget}
            attribute="brandsTitle"
            tag="h2"
            className="section_title col_8 col_t_12"
          />
          <div className="portfolio_posts_wrap">
            <Scrivito.ContentTag content={widget} attribute="portfolio" />
          </div>
          
        </div>
      </div>
      <div className="entrepreneurs_help">
        <div className="container">
          <Scrivito.ContentTag
            content={widget}
            attribute="entrepreneurTitle"
            tag="h2"
            className="section_title col_8 col_t_12"
          />

          <Scrivito.ContentTag content={widget} attribute="tagSection" />
        </div>
      </div>
    </>
  );
});
