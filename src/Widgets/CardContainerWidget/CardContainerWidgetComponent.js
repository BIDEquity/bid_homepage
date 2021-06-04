import * as React from "react";
import * as Scrivito from "scrivito";
import { Swiper } from "swiper/react";
Scrivito.provideComponent("CardContainerWidget", ({ widget }) => {
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
    <Swiper {...params}>
      <Scrivito.ContentTag
        content={widget}
        attribute="content"
        className="posts_wrap"
      />
    </Swiper>
  );
});
