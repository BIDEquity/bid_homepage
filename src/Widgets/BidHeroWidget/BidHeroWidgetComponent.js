import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidHeroWidget.scss";

Scrivito.provideComponent("BidHeroWidget", ({ widget }) => (
  <Scrivito.ContentTag tag="div" className="bid-hero-widget" content={widget} attribute="content" />
));
