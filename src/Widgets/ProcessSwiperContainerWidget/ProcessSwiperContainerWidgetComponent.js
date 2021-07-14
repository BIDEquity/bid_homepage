import React, { useRef, useState } from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import ButtonTagList from "../../Components/ButtonTagList";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, EffectFade, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel, EffectFade, Pagination]);

class ProcessSwiperComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const widget = this.props.widget;
    const items = widget.get("items");
    const params = {
      loop: false,
      slidesPerView: 1,
      direction: "vertical",
      speed: 2000,
      pagination: {
        el: ".slider_pagination",
        clickable: true,
      },
      mousewheel: true,
      allowTouchMove: true,
      autoHeight: true,
      effect: "fade",

      fadeEffect: {
        crossFade: true,
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
          const link = item.get("button");
          const linktext = link && link.title();
          return (
            <SwiperSlide key={index}>
              
              <div className="transaction_process_section">
                <div className="slider_pagination transaction_process_dots"></div>

                <div className="transaction_process_line line_1"></div>
                <div className="transaction_process_line line_2"></div>
                <div className="transaction_process_line line_3"></div>
                <div className="transaction_process_line line_4"></div>
                <div className="transaction_process_line line_5"></div>
                <div className="transaction_process_slider swiper-container">
                  <div className="swiper-wrapper">
                    <div className="transaction_process_item swiper-slide">
                    
                      <div className={`transaction_process_content step_${index + 1}`}>
                        <div className="transaction_process_left">
                          <div className="transaction_process_box">
                            <Scrivito.ContentTag
                              content={item}
                              attribute="stepTitle"
                              tag="p"
                              className="transaction_process_name"
                            />
                          </div>
                        </div>
                        <div className="transaction_process_center">
                          <div className="transaction_process_block">
                            <div className="transaction_process_text">
                              <Scrivito.ContentTag
                                content={item}
                                attribute="content"
                              />
                            </div>
                            
                            {
                              linktext &&
                              <Scrivito.LinkTag className="btn" to={link}>{linktext}</Scrivito.LinkTag>
                            }
                          </div>
                        </div>
                        <div className="transaction_process_right">
                          <div className="transaction_duration">
                            {item.get("duration") &&
                            <h3 className="transaction_duration_title">
                              Duration
                            </h3>
                            }
                            <Scrivito.ContentTag
                              content={item}
                              attribute="duration"
                              tag="p"
                              className="transaction_process_text"
                            />
                          </div>
                        </div>
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

Scrivito.provideComponent("ProcessSwiperWidget", ProcessSwiperComponent);
