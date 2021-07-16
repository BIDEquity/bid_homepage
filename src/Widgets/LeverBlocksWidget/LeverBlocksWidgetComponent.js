import React, { useRef, useState } from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import ButtonTagList from "../../Components/ButtonTagList";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

// Import Swiper styles
//import "swiper/swiper.scss";

class LeverBlocksComponent extends React.Component {
  constructor(props) {
    super(props);
    const widget = this.props.widget;
    const items = widget.get("items");
    const tags = allTags(items);

    this.state = {
      currentTag: tags[0],
    };

    this.setTag = this.setTag.bind(this);
  }

  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }

  render() {
    const widget = this.props.widget;
    const items = widget.get("items");
    const params = {
      loop: "true",
      slidesPerView: 1,
      speed: 800,
      loop: "false",

      pagination: {
        el: ".entrepreneurs_help_navbar",
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
      <>
        <div className="entrepreneurs_help_navbar bottom_line">
          <ButtonTagList
            showTags
            tags={allTags(items)}
            currentTag={this.state.currentTag}
            setTag={this.setTag}
            //onClick={swiper.slideTo(3)}
          />
        </div>

        <Swiper {...params}>
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index} className="help_slide_item swiper-slide">
                <div className="help_slide_box info_box">
                  <div className="info_box_content">
                    <div className="title_block bottom_line light">
                      <Scrivito.ContentTag content={item} attribute="text" />
                    </div>
                    <a className="info_box_link" href="#">
                      <span>Lorem ipsum dolor</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17.284"
                        height="10.73"
                        viewBox="0 0 17.284 10.73"
                        fill="none"
                        strokeWidth="1.5"
                      >
                        <g transform="translate(-570.625 -853.857)">
                          <path
                            d="M576.989,860.911l4.3,4.3-4.3,4.3"
                            transform="translate(5.865 -5.993)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <line
                            x1="15.783"
                            transform="translate(571.375 859.222)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="help_slide_img">
                  <Scrivito.ImageTag content={item} attribute="image" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }
}

Scrivito.provideComponent("LeverBlocksWidget", LeverBlocksComponent);

const TabbedBlock = Scrivito.connect(({ widget, currentTag }) => {
  const company = widget.get("company");
  const text = widget.get("text");
  const title = widget.get("title");
  const lever = widget.get("lever");
  const classNames = ["help_slide_item", "swiper-slide", "squeezed"];
  
  if (currentTag && tags.includes(currentTag)) {
    classNames.pop("squeezed");
  }

  return (
    <SwiperSlide>
      <div className="help_slide_box info_box">
        <div className="info_box_content">
          <div className="title_block bottom_line light">
            <Scrivito.ContentTag tag="div" content={widget} attribute="text" />
          </div>
          <a className="info_box_link" href="#">
            <span>Lorem ipsum dolor</span>
            svg
          </a>
        </div>
      </div>
      <div className="help_slide_img">
        <Scrivito.ImageTag content={widget} attribute="image" />
      </div>
    </SwiperSlide>
  );
});

function allTags(items) {
  const tagsArray = items.map((item) => item.get("tags"));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags;
}
