import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidColumnHeadlineWidget", ({ widget }) => {
  const dividingLine = widget.get("showDividingLine") || "yes";
  
  return (
    <div className="about_us_left">
    <div className="about_us_info">
      <Scrivito.ContentTag
        data-aos="animation"
        tag="h1"
        content={widget}
        attribute="headline"
        className={`about_us_title ${dividingLine === 'yes' ? 'bottom_line' : ''} aos-init aos-animate`}
      />
      
    </div>
    </div>
  );
});
