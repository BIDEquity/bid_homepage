import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidCollaborateBlockWidget.scss";

Scrivito.provideComponent("BidCollaborateBlockWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-collaborate-block-widget"
    content={widget}
    attribute="headline"
  />
));
