import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidHeroHeadlineWidget", ({ widget }) => {
  return (
    <div className="top_about">
    <div className="top_inner">
      <Scrivito.ContentTag
        data-aos="animation"
        tag="h1"
        content={widget}
        attribute="headline"
        className="top_title bottom_line aos-init aos-animate"
      />
      
    </div>
    </div>
  );
});
