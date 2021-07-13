import React, { useRef, useState } from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import ButtonTagList from "../../Components/ButtonTagList";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Pagination]);

class ProcessSwiperComponent extends React.Component {
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
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}

Scrivito.provideComponent("ProcessSwiperWidget", ProcessSwiperComponent);
