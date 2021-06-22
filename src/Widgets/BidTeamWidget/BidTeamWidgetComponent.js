import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidTeamWidget", ({ widget }) => {
  const link = widget.get("bottomLink");
  let linktext = link && link.title();
  const morelink = widget.get("moreLink");
  let moretext = morelink && morelink.title();
  return (
    <div className="team_content">
      <div className="container">
        <Scrivito.ContentTag
          content={widget}
          attribute="headline"
          tag="h2"
          className="team_content_title section_title bottom_line col_5 col_t_12"
        />
        <div>
          <Scrivito.ContentTag content={widget} attribute="content" />
        </div>
        <div className="team_bottom">
        <div className="team_more">
              <Scrivito.LinkTag to={morelink} className="more_link">
                {moretext}
              </Scrivito.LinkTag>
            </div>
          <div className="col_5 col_t_12">
            
            <Scrivito.ContentTag
              content={widget}
              attribute="bottomHeadline"
              tag="h2"
              className="section_title"
            />
            <div className="block_text">
              <Scrivito.ContentTag
                content={widget}
                attribute="bottomText"
                tag="p"
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
