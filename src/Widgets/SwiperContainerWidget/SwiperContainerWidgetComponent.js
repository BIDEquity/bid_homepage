import React, { useRef, useState } from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import ButtonTagList from "../../Components/ButtonTagList";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {EffectFade, Pagination } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectFade,Pagination]);

class SwiperComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const widget = this.props.widget;
    const items = widget.get("items");
    const params = {
      loop: 'true',
          slidesPerView: 1,
          speed: 500,
          fadeEffect: { crossFade: true },
          effect: 'fade',
          
          
      pagination: {
        el: '.info_slider_pagination',
        clickable: 'true',
        
      }
    }
    
    if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center>
          Add blocks in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }
    //
    return (
      
        
          <Swiper {...params}
          
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  
                  
                  
                      <Scrivito.ContentTag
                        content={item}
                        attribute="title"
                        tag="h2"
                        className="section_title bottom_line col_6 col_t_12"
                      />
                      <a className="info_slider_link" href="#">
                        The xclinical story
                      </a>
                    
                </SwiperSlide>
              );
            })}
            
          </Swiper>
        
      
    );
  }
}

Scrivito.provideComponent("SwiperWidget", SwiperComponent);
