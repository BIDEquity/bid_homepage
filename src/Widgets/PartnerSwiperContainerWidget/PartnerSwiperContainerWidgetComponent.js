import React, { useRef, useState } from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import ButtonTagList from "../../Components/ButtonTagList";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Pagination]);

class PartnerSwiperComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const widget = this.props.widget;
    const items = widget.get("items");
    const params = {
      loop: "true",
      slidesPerView: 1,
      speed: 500,
      fadeEffect: { crossFade: true },
      effect: "fade",

      pagination: {
        el: ".partners_slider_pagination",
        clickable: "true",
      },
    };

    if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center>
          Add blocks in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }
    //
    return (
      <Swiper {...params}>
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="partners_wrap">
                <div className="partners_left">
                  <div className="partners_info_slider swiper-container">
                    <div className="swiper-wrapper">
                      <div className="partner_info_slide swiper-slide">
                        <div className="testimonial_item">
                          <div className="testimonial_item_text">
                            <Scrivito.ContentTag
                              content={item}
                              attribute="quote"
                              tag="p"
                            />
                          </div>
                          <div className="testimonial_item_bottom">
                            
                            <Scrivito.ContentTag
                        content={item}
                        attribute="name"
                        tag="p"
                        className="testimonial_item_name"
                      />
                            
                            <Scrivito.ContentTag
                        content={item}
                        attribute="position"
                        tag="p"
                        className="testimonial_item_position"
                      />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="partners_slider_pagination slider_pagination"></div>
                  </div>
                  
                </div>
                <div className="partners_right">
                    <div className="partners_logos_slider swiper-container">
                        <div className="swiper-wrapper">
                            <div className="partner_logo_slide swiper-slide">
                                <Scrivito.ImageTag
                                  content={item}
                                  attribute="image"
                                  width="284"
                                  alt=""
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}

Scrivito.provideComponent("PartnerSwiperWidget", PartnerSwiperComponent);
