import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidColumnHeadlineWidget", ({ widget }) => {
  const dividingLine = widget.get("showDividingLine") || "yes";
  
  return (
    <div className="column_headline">
    <div className="top_inner--column">
      <Scrivito.ContentTag
        data-aos="animation"
        tag="h1"
        content={widget}
        attribute="headline"
        className={`top_title--column ${dividingLine === 'yes' ? 'bottom_line' : ''} aos-init aos-animate`}
      />
      
    </div>
    </div>
  );
});
