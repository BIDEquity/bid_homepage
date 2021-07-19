import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate"
import { Swiper, SwiperSlide } from "swiper/react";
Scrivito.provideComponent("CardContainerWidget", ({ widget }) => {
  
  const items = widget.get("items");
  
  const params = {
    loop: false,
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    speed: 500,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="posts_slider_wrap">
            <div className="posts_slider swiper-container">
    <Swiper {...params}>
      {items.map((item, index) => {
        let link = item.get("newsLink")
        return (
          <SwiperSlide key={index} className="post_slide swiper-slide">
            <Scrivito.LinkTag to={link}>
            <Scrivito.ImageTag
              content={item}
              attribute="image"
              className="post_item_img"
            />
          </Scrivito.LinkTag>
            <div className="post_item_info">
              <Scrivito.WidgetTag
                className="post_item_date bottom_line"
                tag="div"
              >
                <Scrivito.ContentTag content={item} attribute="date">
                  {formatDate(item.get("date"), "dd mmm yyyy")}
                </Scrivito.ContentTag>
              </Scrivito.WidgetTag>
              <div className="post_item_text">
                <Scrivito.ContentTag
                  content={item}
                  attribute="description"
                  tag="p"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper></div></div>
  );
});
