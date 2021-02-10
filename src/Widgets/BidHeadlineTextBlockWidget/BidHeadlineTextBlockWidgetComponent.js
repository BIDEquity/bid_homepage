import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidHeadlineTextBlockWidget.scss";

Scrivito.provideComponent("BidHeadlineTextBlockWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-headline-text-block-widget"
    content={widget}
    attribute="content"
  />
));
