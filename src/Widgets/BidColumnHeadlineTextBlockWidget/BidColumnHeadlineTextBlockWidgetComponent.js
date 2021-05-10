import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidColumnHeadlineTextBlockWidget.scss";

Scrivito.provideComponent("BidColumnHeadlineTextBlockWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-column-headline-text-block-widget"
    content={widget}
    attribute="content"
  />
));
