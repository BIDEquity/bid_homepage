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
          <div className="partners_wrap">
            <div className="partners_left">
              <div className="partners_info_slider swiper-container">
                <div className="swiper-wrapper">
                  <div className="partner_info_slide swiper-slide">
                    <div className="testimonial_item">
                      <div className="testimonial_item_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris bibendum enim sed velit blandit
                          faucibus.Aenean orci arcu, vehicula fermentum mauris
                          at, auctor suscipit ligula.
                        </p>
                      </div>
                      <div className="testimonial_item_bottom">
                        <p className="testimonial_item_name">Julian Brandt</p>
                        <p className="testimonial_item_position">
                          Founder, MyNeva
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="partner_info_slide swiper-slide">
                    <div className="testimonial_item">
                      <div className="testimonial_item_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris bibendum enim sed velit blandit
                          faucibus.Aenean orci arcu, vehicula fermentum mauris
                          at, auctor suscipit ligula.
                        </p>
                      </div>
                      <div className="testimonial_item_bottom">
                        <p className="testimonial_item_name">Julian Brandt</p>
                        <p className="testimonial_item_position">
                          Founder, MyNeva
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="partner_info_slide swiper-slide">
                    <div className="testimonial_item">
                      <div className="testimonial_item_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris bibendum enim sed velit blandit
                          faucibus.Aenean orci arcu, vehicula fermentum mauris
                          at, auctor suscipit ligula.
                        </p>
                      </div>
                      <div className="testimonial_item_bottom">
                        <p className="testimonial_item_name">Julian Brandt</p>
                        <p className="testimonial_item_position">
                          Founder, MyNeva
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="partner_info_slide swiper-slide">
                    <div className="testimonial_item">
                      <div className="testimonial_item_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris bibendum enim sed velit blandit
                          faucibus.Aenean orci arcu, vehicula fermentum mauris
                          at, auctor suscipit ligula.
                        </p>
                      </div>
                      <div className="testimonial_item_bottom">
                        <p className="testimonial_item_name">Julian Brandt</p>
                        <p className="testimonial_item_position">
                          Founder, MyNeva
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="partners_slider_pagination slider_pagination"></div>
              </div>
            </div>
            <div className="partners_right">
              <div className="partners_logos_slider swiper-container">
                <div className="swiper-wrapper">
                  <div className="partner_logo_slide swiper-slide">
                    <img src="images/partner_logo_1.png" width="284" alt="" />
                  </div>
                  <div className="partner_logo_slide swiper-slide">
                    <img src="images/partner_logo_2.png" width="192" alt="" />
                  </div>
                  <div className="partner_logo_slide swiper-slide">
                    <img src="images/partner_logo_3.png" width="208" alt="" />
                  </div>
                  <div className="partner_logo_slide swiper-slide">
                    <img src="images/partner_logo_1.png" width="284" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content_info">
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
                    <Scrivito.LinkTag className="info_box_link" to={infolink1}>
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

            <div className="posts_more">
              <a className="more_link" href="#">
                More news
              </a>
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
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="infoBoxTitle2"
                      className="title_block bottom_line light"
                      tag="h2"
                    />

                    <Scrivito.LinkTag className="info_box_link" to={infolink2}>
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
              <h2 className="section_title col_8 col_t_12">
                We ensure a collaborative, professional and rapid transaction
                process
              </h2>
              <div className="transaction_process_section">
                <div className="transaction_process_dots">
                  <div className="transaction_process_dot active">
                    <span>Step 1</span>
                  </div>
                  <div className="transaction_process_dot">
                    <span>Step 2</span>
                  </div>
                  <div className="transaction_process_dot">
                    <span>Step 3</span>
                  </div>
                  <div className="transaction_process_dot small">
                    <span>Step 4</span>
                  </div>
                  <div className="transaction_process_dot small">
                    <span>Step 5</span>
                  </div>
                  <div className="transaction_process_dot">
                    <span>Step 6</span>
                  </div>
                  <div className="transaction_process_dot">
                    <span>Step 7</span>
                  </div>
                </div>
                <div className="transaction_process_line line_1"></div>
                <div className="transaction_process_line line_2"></div>
                <div className="transaction_process_line line_3"></div>
                <div className="transaction_process_line line_4"></div>
                <div className="transaction_process_line line_5"></div>
                <div className="transaction_process_slider swiper-container">
                  <div className="swiper-wrapper">
                    <div className="transaction_process_item swiper-slide">
                      <div className="transaction_process_content step_1">
                        <div className="transaction_process_left">
                          <div className="transaction_process_box">
                            <p className="transaction_process_step">Step 1</p>
                            <p className="transaction_process_name">Contact</p>
                          </div>
                        </div>
                        <div className="transaction_process_center">
                          <div className="transaction_process_block">
                            <div className="transaction_process_text">
                              <p>
                                There are many ways how you and BID Equity find
                                to each other. In many cases, entrepreneurs
                                enter in discussions with financial advisors who
                                then find suitable investors such as BID Equity.
                                In other cases, BID Equity approaches the
                                entrepreneurs like you directly to jointly
                                investigate a future partnership or sale of the
                                company.
                              </p>
                              <h3>First meeting</h3>
                              <p>
                                1st Milestone is a personal meeting between you
                                and our founding partners. In talking to us you
                                should find out if you like our approach and if
                                you can see how we bring value to your company.
                              </p>
                            </div>
                            <a className="btn">Request a first meeting</a>
                          </div>
                        </div>
                        <div className="transaction_process_right"></div>
                      </div>
                    </div>
                    <div className="transaction_process_item swiper-slide">
                      <div className="transaction_process_content step_2">
                        <div className="transaction_process_left">
                          <div className="transaction_process_box">
                            <p className="transaction_process_step">Step 2</p>
                            <p className="transaction_process_name">
                              Screening
                            </p>
                          </div>
                        </div>
                        <div className="transaction_process_center">
                          <div className="transaction_process_block">
                            <div className="transaction_process_text">
                              <p>
                                During the initial screening you and BID Equity
                                will have a series of discussions about the
                                objectives and strategic rationale for selling a
                                stake of the company. Both we need to understand
                                how we can help achieve the next level of
                                growth, professionalism, and innovation. We will
                                jointly reflect on the current market position,
                                strengths and weaknesses, as well as potential
                                opportunities and threats.
                              </p>
                            </div>
                          </div>
                          <div className="transaction_process_block block_2">
                            <div className="transaction_process_text">
                              <h3>Indicative offer</h3>
                              <p>
                                If we then conclude that an investment could be
                                beneficial to both parties, BID Equity will
                                pursue an in-depth assessment including a rough
                                evaluation and first hypothesis on the
                                transaction structure. These parameters will be
                                outlined in a formal indicative offer.
                              </p>
                            </div>
                            <div className="transaction_player">
                              <div className="transaction_player_equalizer">
                                <img src="images/equalizer.svg" alt="" />
                              </div>
                              <div className="transaction_player_bottom">
                                <div className="transaction_player_info">
                                  <p className="transaction_player_name">
                                    Listen to Alex’s podcast on indicative
                                    offers
                                  </p>
                                  <p className="transaction_player_duration">
                                    2 mins
                                  </p>
                                </div>
                                <div className="transaction_player_play">
                                  <svg className="svg_play">svg</svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="transaction_process_right">
                          <div className="transaction_duration">
                            <h3 className="transaction_duration_title">
                              Duration
                            </h3>
                            <p className="transaction_duration_text">
                              One to two weeks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transaction_process_item swiper-slide">
                      <div className="transaction_process_content transaction_subprocess_first step_3">
                        <div className="transaction_process_left">
                          <div className="transaction_process_box">
                            <p className="transaction_process_step">Step 3</p>
                            <p className="transaction_process_name">Due</p>
                          </div>
                        </div>
                        <div className="transaction_process_center">
                          <div className="transaction_process_block">
                            <div className="transaction_process_text">
                              <p>
                                If a mutual understanding about the general
                                terms can be reached between the entrepreneur
                                and BID Equity, both parties formulate a Letter
                                of Intent (LOI) that summarizes all the
                                transaction parameters including a cost coverage
                                clause by the vendor before pursuing the
                                detailed due diligence.
                              </p>
                            </div>
                            <a className="btn">Letter of Intent example</a>
                          </div>
                        </div>
                        <div className="transaction_process_right">
                          <div className="transaction_duration">
                            <h3 className="transaction_duration_title">
                              Duration
                            </h3>
                            <p className="transaction_duration_text">
                              Four to six weeks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transaction_process_item swiper-slide">
                      <div className="transaction_process_content transaction_subprocess_step step_4">
                        <div className="transaction_process_left">
                          <div className="transaction_process_box">
                            <p className="transaction_process_step">Step 4</p>
                            <p className="transaction_process_name">Due</p>
                          </div>
                        </div>
                        <div className="transaction_process_center">
                          <div className="transaction_process_block">
                            <div className="transaction_process_text">
                              <h3>What happens during a due diligence ?</h3>
                              <p>
                                The objective of the due diligence phase is to
                                understand all aspects of your company in
                                sufficient detail to conclude the acquisition.
                                BID Equity typically nominates specialized
                                external advisors to conduct commercial,
                                financial, tax, legal, and technical
                                assessments.
                              </p>
                            </div>
                          </div>
                          <div className="transaction_process_block">
                            <div className="due_diligence_stages">
                              <div className="due_diligence_column">
                                <p className="due_diligence_name">Commercial</p>
                              </div>
                              <div className="due_diligence_column">
                                <p className="due_diligence_name">Financial</p>
                              </div>
                              <div className="due_diligence_column">
                                <p className="due_diligence_name">Tax</p>
                              </div>
                              <div className="due_diligence_column">
                                <p className="due_diligence_name">Legal</p>
                              </div>
                              <div className="due_diligence_column">
                                <p className="due_diligence_name">Technical</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="transaction_process_right">
                          <div className="transaction_duration">
                            <h3 className="transaction_duration_title">
                              Duration
                            </h3>
                            <p className="transaction_duration_text">
                              Four to six weeks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transaction_process_item swiper-slide">
                      <div className="transaction_process_content transaction_subprocess_last step_5">
                        <div className="transaction_process_left">
                          <div className="transaction_process_box">
                            <p className="transaction_process_step">Step 5</p>
                            <p className="transaction_process_name">Due</p>
                          </div>
                        </div>
                        <div className="transaction_process_center">
                          <div className="transaction_process_block">
                            <div className="transaction_process_text">
                              <h3>What will you need to do?</h3>
                              <p>
                                As seller you need provide all required
                                documentation, which will be shared with all
                                relevant parties via a secure data room. BID
                                Equity aims to simplify this process as much as
                                possible, for example by building on existing
                                raw data from accounting systems instead of
                                requiring tailormade analysis.
                              </p>
                            </div>
                          </div>
                          <div className="transaction_process_block">
                            <div className="transaction_process_text">
                              <h3>Share purchase agreement</h3>
                              <p>
                                The results of the due diligence will enable BID
                                Equity to provide a detailed SPA, which includes
                                all financial and legal details to conclude the
                                transaction.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="transaction_process_right">
                          <div className="transaction_duration">
                            <h3 className="transaction_duration_title">
                              Duration
                            </h3>
                            <p className="transaction_duration_text">
                              Four to six weeks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transaction_process_item swiper-slide">
                      <div className="transaction_process_content step_6">
                        <div className="transaction_process_left">
                          <div className="transaction_process_box">
                            <p className="transaction_process_step">Step 6</p>
                            <p className="transaction_process_name">
                              Finalization
                            </p>
                          </div>
                        </div>
                        <div className="transaction_process_center">
                          <div className="transaction_process_block">
                            <div className="transaction_process_text">
                              <h3>Signing/closing</h3>
                              <p>
                                Once the SPA all is agreed, BID Equity’s
                                investment committee signs off the acquisition
                                and all involved parties proceed with the
                                signing. The date the actual transfer of
                                ownership of shares is referred to as closing,
                                which usually takes place 2-3 weeks after
                                signing unless more comprehensive regulatory
                                clearance.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="transaction_process_right">
                          <div className="transaction_duration">
                            <h3 className="transaction_duration_title">
                              Duration
                            </h3>
                            <p className="transaction_duration_text">
                              One to two weeks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transaction_process_item swiper-slide">
                      <div className="transaction_process_content step_7">
                        <div className="transaction_process_left">
                          <div className="transaction_process_box">
                            <p className="transaction_process_step">Step 7</p>
                            <p className="transaction_process_name">
                              Value creation
                            </p>
                          </div>
                        </div>
                        <div className="transaction_process_center">
                          <div className="transaction_process_block">
                            <div className="value_creation_columns">
                              <div className="value_creation_item">
                                <div className="value_creation_box">
                                  <h3>
                                    Lorem ipsum dolor sit amet adipiscing elit
                                  </h3>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </p>
                                </div>
                              </div>
                              <div className="value_creation_item">
                                <div className="value_creation_box">
                                  <h3>
                                    Lorem ipsum dolor sit amet adipiscing elit
                                  </h3>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="transaction_process_block">
                            <div className="value_creation_bottom">
                              <h3>
                                Get a reliable valuation for your business
                                within two hours from us.
                              </h3>
                              <a className="btn">Let’s go!</a>
                            </div>
                          </div>
                        </div>
                        <div className="transaction_process_right"></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                      <Scrivito.LinkTag className="info_box_link" to={infolink3}>{infolinktext3}</Scrivito.LinkTag>
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
            <Scrivito.ContentTag
              content={widget}
              attribute="portfolio"
            />
          </div>
          <div className="advisors_brands_more">
            <a className="more_link" href="#">
              Explore all
            </a>
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
