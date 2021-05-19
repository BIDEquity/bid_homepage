import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidStepBoxWidget.scss";

Scrivito.provideComponent("BidStepBoxWidget", ({ widget }) => {
  const reverse = widget.get("orientation") === "left";
  const color = widget.get("color");
  const link = widget.get("link")
  return (
    <div className={`content_step_section ${color} ${reverse ? "reverse" : ""}`}>
      <div className="content_step_box">
      <Scrivito.ContentTag
        content={widget}
          attribute="headline"
          tag="h2"
          className="content_step_title bottom_line"
      />
        <Scrivito.LinkTag className="content_step_link" to={ link } >
          {link.get("title")} 
        </Scrivito.LinkTag>
        
      </div>
      
      <div className="content_step_info">
        <div className="content_step_chapter">
        <Scrivito.ContentTag
          content={widget}
          attribute="stepNumber"
          tag="p"
          className="content_step_number"
      />
      <div className="content_step_img">
        <Scrivito.ImageTag content={widget.get("image")}  alt="" />
        </div>
        </div>
      <div className="content_step_description">
      <Scrivito.ContentTag
        className="content_step_text"
        content={widget}
          attribute="text"
          />
        </div>
      </div>
    </div>
  );
});
