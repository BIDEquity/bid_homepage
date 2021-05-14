import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidSectionHeadlineWidget", ({ widget }) => {
  return (
    <div className="section-headline">
    <div className="section_top_inner">
      <Scrivito.ContentTag
        data-aos="animation"
        tag="h2"
        content={widget}
        attribute="headline"
        className="section_top_title bottom_line aos-init aos-animate"
      />
      
    </div>
    </div>
  );
});
