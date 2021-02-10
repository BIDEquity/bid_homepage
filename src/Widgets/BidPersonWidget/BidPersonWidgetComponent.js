import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidPersonWidget.scss";

Scrivito.provideComponent("BidPersonWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="person-widget"
    content={widget}
    attribute="headline"
  />
));
