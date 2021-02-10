import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidPortfolioTeaserWidget.scss";

Scrivito.provideComponent("BidPortfolioTeaserWidget", ({ widget }) => {
  const classes = `bid-portfolio-teaser-widget float-${widget.get("float")}`
    
  return (
    <div className = { classes }>
    <Scrivito.ContentTag
      content = { widget }
      attribute = "content"
      />
    </div>
  )
});
