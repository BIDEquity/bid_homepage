import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidNewsHeroWidget.scss";

Scrivito.provideComponent("BidNewsHeroWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-news-hero-widget"
    content={widget}
    attribute="content"
  />
));
