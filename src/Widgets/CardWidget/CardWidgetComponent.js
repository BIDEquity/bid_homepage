import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";
import { SwiperSlide } from "swiper/react";
Scrivito.provideComponent("CardWidget", ({ widget }) => (
  
  
  <SwiperSlide className="swiper-slide post_slide"
  
  >
  
    
      <Scrivito.ImageTag
        content={widget}
        attribute="image"
        className="post_item_img"
      />
      
      <div className="post_item_info">
      <Scrivito.WidgetTag className="post_item_date bottom_line" tag="div">
          <Scrivito.ContentTag content={widget} attribute="date" >
            {formatDate(widget.get("date"),"dd mmm yyyy")}
            </Scrivito.ContentTag>
        </Scrivito.WidgetTag>
        <div className="post_item_text">
          <Scrivito.ContentTag
            content={widget}
            attribute="description"
            tag="p"
          />
      </div>
      
      </div>
    
  
    </SwiperSlide>
    
  )
)