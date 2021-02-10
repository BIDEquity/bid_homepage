import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidPartnerBlockWidget.scss";

Scrivito.provideComponent("BidPartnerBlockWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-partner-block-widget"
    content={widget}
    attribute="headline"
  />
));
