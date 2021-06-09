import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidHeroHeadlineWidget", ({ widget }) => {
  return (
    <div className="top_about">
      <div className="top_inner">
    <div className="top_info">
      <Scrivito.ContentTag 
        content={widget}
        attribute="category"
        className="top_category more_link"
      />
      <Scrivito.ContentTag
        data-aos="animation"
        tag="h1"
        content={widget}
        attribute="headline"
        className="top_title bottom_line aos-init aos-animate"
      />
      <Scrivito.ContentTag
        content={widget}
        attribute="subtitle"
        className="top_info_description"
        tag="p"
      />
      </div>
    </div>
    </div>
  );
});
