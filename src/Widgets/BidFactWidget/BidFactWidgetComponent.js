import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidFactWidget.scss";

Scrivito.provideComponent("BidFactWidget", ({ widget }) => (
  <div className="extended-fact-widget">
    <Scrivito.ContentTag
      content={widget}
      attribute="title"
      className="fact-title"
      tag="div"
    />
    <Scrivito.ContentTag
      content={widget}
      attribute="key"
      className="fact-key"
      tag="div"
    />
    <Scrivito.ContentTag
      content={widget}
      attribute="value"
      className="fact-value"
      tag="div"
    />
  </div>
));
