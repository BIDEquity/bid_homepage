import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidGridTeaserWidget.scss";

Scrivito.provideComponent("BidGridTeaserWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-grid-teaser-widget"
    content={widget}
    attribute="headline"
  />
));
