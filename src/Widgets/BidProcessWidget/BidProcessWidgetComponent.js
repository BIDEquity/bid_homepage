import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidProcessWidget.scss";

Scrivito.provideComponent("BidProcessWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-process-widget"
    content={widget}
    attribute="headline"
  />
));
