import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidInvestBlockWidget.scss";

Scrivito.provideComponent("BidInvestBlockWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-invest-block-widget"
    content={widget}
    attribute="headline"
  />
));
