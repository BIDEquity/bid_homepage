import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPartnerWidget", ({ widget }) => {
  const link = widget.get("bottomLink");
  let linktext = link && link.title();
  return (
    <div className="partners_content">
      <div className="container">
        <Scrivito.ContentTag
          content={widget}
          tag="h2"
          attribute="headline"
          className="partners_title section_title bottom_line col_5 col_t_12"
        />
        <Scrivito.ContentTag
          content={widget}
          attribute="content"
        />
        <div className="partners_bottom row">
          <div className="col_5 col_t_12">
            <Scrivito.ContentTag
              content={widget}
              tag="h2"
              attribute="bottomHeadline"
              className="section_title"
            />
            <div className="block_text">
              <Scrivito.ContentTag
                content={widget}
                tag="p"
                attribute="bottomText"
              />
            </div>
            
            <Scrivito.LinkTag to={link} className="btn">
              {linktext}
            </Scrivito.LinkTag>
          </div>
        </div>
      </div>
    </div>
  );
});
