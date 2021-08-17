import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidAboutWidget", ({ widget }) => {
  const link1 = widget.get("teamLink1");
  const link2 = widget.get("teamLink2");
  const button = widget.get("aboutButton");
  const allServicesLink = widget.get("allServicesLink");
  let linktext1 = link1 && link1.title();
  let linktext2 = link2 && link2.title();
  let buttonText = button && button.title();
  let allServicesText = allServicesLink && allServicesLink.title();
  return (
    <div>
      <div className="content_section">
        <div className="container">
          <div className="about_stats">
            <div className="about_stat_item">
              <div className="about_stat_info">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="fact1"
                  tag="p"
                  className="about_stat_number"
                />

                <Scrivito.ContentTag
                  content={widget}
                  attribute="fact1Text"
                  tag="p"
                  className="about_stat_text"
                />
              </div>
            </div>
            <div className="about_stat_item">
              <div className="about_stat_info">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="fact2"
                  tag="p"
                  className="about_stat_number"
                />
                <Scrivito.ContentTag
                  content={widget}
                  attribute="fact2Text"
                  tag="p"
                  className="about_stat_text"
                />
              </div>
            </div>
            <div className="about_stat_item">
              <div className="about_stat_info">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="fact3"
                  tag="p"
                  className="about_stat_number"
                />
                <Scrivito.ContentTag
                  content={widget}
                  attribute="fact3Text"
                  tag="p"
                  className="about_stat_text"
                />
              </div>
            </div>
            <div className="about_stat_item">
              <div className="about_stat_info">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="fact4"
                  tag="p"
                  className="about_stat_number"
                />
                <Scrivito.ContentTag
                  content={widget}
                  attribute="fact4Text"
                  tag="p"
                  className="about_stat_text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_section about_intro">
        <div className="container">
          <div className="about_intro_wrap">
            <div className="about_intro_left">
              <div className="about_intro_img">
                <Scrivito.ImageTag
                  content={widget}
                  attribute="teamImage"
                  alt=""
                />
              </div>
              <div className="about_intro_description">
                <div className="about_intro_column">
                  <Scrivito.ContentTag
                    content={widget}
                    tag="p"
                    attribute="aboutIntro1"
                  />
                </div>
                <div className="about_intro_column">
                  <Scrivito.ContentTag
                    content={widget}
                    tag="p"
                    attribute="aboutIntro2"
                  />
                </div>
              </div>
              <Scrivito.LinkTag to={button} className="btn">
                {buttonText}
              </Scrivito.LinkTag>
            </div>
            <div className="about_intro_right">
              <div className="about_intro_links">
                <Scrivito.LinkTag to={link1}>{linktext1}</Scrivito.LinkTag>
                <Scrivito.LinkTag to={link2}>{linktext2}</Scrivito.LinkTag>
              </div>
              <div className="about_intro_quote">
                <div className="testimonial_item dark">
                  <div className="testimonial_item_text">
                    <Scrivito.ContentTag
                      content={widget}
                      tag="p"
                      attribute="quote"
                    />
                  </div>
                  <div className="testimonial_item_bottom">
                    <Scrivito.ContentTag
                      content={widget}
                      tag="p"
                      attribute="name"
                      className="testimonial_item_name"
                    />
                    <Scrivito.ContentTag
                      content={widget}
                      tag="p"
                      attribute="position"
                      className="testimonial_item_position"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_us">
        <div className="container">
          <div className="about_us_wrap">
            <div className="about_us_left">
              <Scrivito.ImageTag
                content={widget}
                attribute="testimonialsBg"
                alt=""
                className="about_us_bg"
              />
              <div className="about_us_info">
                <Scrivito.ContentTag
                  content={widget}
                  tag="h2"
                  attribute="aboutTitle"
                  className="about_us_title bottom_line"
                />
                
                <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="aboutDescription"
                  className="about_us_description"
                />
                <div className="about_us_text">
                  <Scrivito.ContentTag
                    content={widget}
                    tag="p"
                    attribute="aboutText"
                  />
                </div>
              </div>
            </div>
            <div className="about_us_right">
              <div className="about_trigger">
                
                <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="triggerName1"
                  className="about_trigger_name"
                />
                <div className="about_trigger_text">
                <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="triggerText1"
                  
                />
                </div>
              </div>
              <div className="about_trigger">
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="triggerName2"
                  className="about_trigger_name"
                />
                <div className="about_trigger_text">
                <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="triggerText2"
                  
                />
              </div>
              </div>
              <div className="about_trigger">
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="triggerName3"
                  className="about_trigger_name"
                />
                <div className="about_trigger_text">
                <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="triggerText3"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="content_section bg_blue service_section">
        <div className="container">
          
          <Scrivito.ContentTag
                  content={widget}
                  tag="h2"
                  attribute="sectionTitle"
                  className="section_title bottom_line col_6 col_t_12"
                />
          <div className="service_wrap">
            <div className="service_item">
              
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemName1"
                  className="service_item_name"
                />
              <div className="service_item_text">
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemText1"
                  
                />
              </div>
            </div>
            <div className="service_item">
              
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemName2"
                  className="service_item_name"
                />
              <div className="service_item_text">
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemText2"
                  
                />
              </div>
            </div>
            <div className="service_item">
              
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemName3"
                  className="service_item_name"
                />
              <div className="service_item_text">
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemText3"
                  
                />
              </div>
            </div>

            <div className="service_item">
              
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemName4"
                  className="service_item_name"
                />
              <div className="service_item_text">
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemText4"
                  
                />
              </div>
            </div>

            <div className="service_item">
              
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemName5"
                  className="service_item_name"
                />
              <div className="service_item_text">
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemText5"
                  
                />
              </div>
            </div>

            <div className="service_item">
              
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemName6"
                  className="service_item_name"
                />
              <div className="service_item_text">
              <Scrivito.ContentTag
                  content={widget}
                  tag="p"
                  attribute="serviceItemText6"
                  
                />
              </div>
            </div>
            
          </div>
          <div className="services_more">
          <Scrivito.LinkTag to={allServicesLink} className="more_link">
                {allServicesText}
              </Scrivito.LinkTag>
          </div>
        </div>
      </div>
      <div className="content_section team_section">
        <div className="container">
          
          <Scrivito.ContentTag
              content={widget}
              attribute="teamSectionTitle"
              className="section_title bottom_line col_5 col_t_12"
              tag="h2"
            />
          
            <Scrivito.ContentTag
              content={widget}
              attribute="bodyBottom"
              
            />
          
          <div className="team_more">
            <a className="more_link" href="#">
              Full team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
