import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidStepBoxWidget.scss";

Scrivito.provideComponent("BidStepBoxWidget", ({ widget }) => {
  const reverse = widget.get("orientation") === "left";
  const color = widget.get("color");

  return (
    <div className={`content_step_section animate ${color} ${reverse ? "reverse" : ""}`}>
      <div className="content_step_box">
      <Scrivito.ContentTag
        content={widget}
          attribute="headline"
          tag="h2"
          className="content_step_title bottom_line"
      />
      <Scrivito.LinkTag className="content_step_link"  to={widget.get("link")}>
        Lesen
      </Scrivito.LinkTag>
      </div>
      
      <div className="content_step_info">
        <Scrivito.ContentTag
          content={widget}
          attribute="stepNumber"
          tag="p"
          className="content_step_number"
      />
        <Scrivito.ImageTag content={widget.get("image")} className="content_step_img" alt="" />
      <div className="content_step_description">
      <Scrivito.ContentTag
        className="content_step_text"
        content={widget}
          attribute="text"
          tag="p"
          />
        </div>
      </div>
    </div>
  );
});

const LinkTitle = Scrivito.connect(({ link }) => {
  if (link.title() === null)
    return;
  if (link.title()) {
    return link.title();
  }

  if (link.isInternal()) {
    return link.obj().get("title");
  }

  return link.url();
});
