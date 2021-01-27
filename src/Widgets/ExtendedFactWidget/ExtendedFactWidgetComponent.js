import * as React from "react";
import * as Scrivito from "scrivito";

import "./ExtendedFactWidget.scss";

Scrivito.provideComponent("ExtendedFactWidget", ({ widget }) => (
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
