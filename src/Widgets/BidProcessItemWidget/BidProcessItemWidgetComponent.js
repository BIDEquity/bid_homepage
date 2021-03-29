import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidProcessItemWidget.scss";

Scrivito.provideComponent("BidProcessItemWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-process-item-widget"
    content={widget}
    attribute="headline"
  />
));
