import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidHeroCtaWidget.scss";

Scrivito.provideComponent("BidHeroCtaWidget", ({ widget }) => (
  <Scrivito.ContentTag tag="div" className="bid-hero-cta-widget" content={widget} attribute="content" />
));
