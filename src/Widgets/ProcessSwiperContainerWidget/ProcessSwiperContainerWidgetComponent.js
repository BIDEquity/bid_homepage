import React, { useRef, useState } from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, EffectFade, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel, EffectFade, Pagination]);

class ProcessSwiperComponent extends React.Component {
  constructor(props) {
    super(props);
    this.widget = this.props.widget;
    this.state = { items: "" };
  }

  componentDidMount() {
    this.setState({ items: this.widget.get("items") });
  }

  render() {
    const params = {
      loop: false,
      slidesPerView: 1,
      direction: "vertical",
      speed: 2000,
      grabCursor: false,
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

    if (!this.state.items.length) {
      return (
        <InPlaceEditingPlaceholder center>
          Add blocks in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }
    //
    return (
      <Swiper {...params}>
        
        
        
        {this.state.items.map((item, index) => {
          var link = item.get("button");
          var linktext = link && link.title();

          return (
            <SwiperSlide key={index}>
              <div className="slider_pagination transaction_process_dots"></div>
              
                <div className="transaction_process_slider swiper-container">
                  <div className="swiper-wrapper">
                    <div className="transaction_process_item swiper-slide">
                      <div
                        className={`transaction_process_content step_${index}`}
                      >
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
                            
                              <Scrivito.ContentTag
                                content={item}
                                attribute="content"
                                className="transaction_process_text"
                              />
                            

                            {linktext && 
                              <Scrivito.LinkTag
                                className="btn"
                                to={link}
                              >
                                {linktext}
                              </Scrivito.LinkTag>
                            }
                          </div>
                        </div>
                        <div className="transaction_process_right">
                          <div className="transaction_duration">
                            {item.get("duration") && (
                              <Scrivito.ContentTag
                                content={item}
                                attribute="durationLabel"
                                tag="h3"
                                className="transaction_duration_title"
                              />
                            )}
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
              
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    );
  }
}

Scrivito.provideComponent("ProcessSwiperWidget", ProcessSwiperComponent);
