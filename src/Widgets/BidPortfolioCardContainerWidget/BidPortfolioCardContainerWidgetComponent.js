import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPortfolioCardContainerWidget", ({ widget }) => {
  const link = widget.get("link");
  const linktext = link && link.title();

  return (
    <>
      <Scrivito.ContentTag
        content={widget}
        attribute="content"
        className="portfolio_posts_wrap"
      />
      <div className="advisors_brands_more">
        <Scrivito.LinkTag className="more_link" to={link}>
          {linktext}
        </Scrivito.LinkTag>
      </div>
    </>
  );
});
