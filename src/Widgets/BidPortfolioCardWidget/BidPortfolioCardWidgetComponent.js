import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPortfolioCardWidget", ({ widget }) => {
  /*const link = widget.get("link");
  let linktext = link && link.title();*/

  return (
    <Scrivito.WidgetTag className="portfolio_post_item">
      <div className={`${widget.get("backgroundColor") === "yes" && widget.get("logo") === "yes"? "portfolio_post_logo" : "portfolio_post_image portfolio_post_img"}`}>
        <Scrivito.ImageTag content={widget} attribute="image" alt="" />
      </div>
      <div className="portfolio_post_info">
        <Scrivito.ContentTag
          content={widget}
          attribute="company"
          className="portfolio_post_name bottom_line light_line"
        />
        <div className="portfolio_post_text">
          <Scrivito.ContentTag content={widget} attribute="text"  />
        </div>
      </div>
    </Scrivito.WidgetTag>
  );
});
