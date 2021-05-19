import * as React from "react";
import * as Scrivito from "scrivito";

import "./FactWidget.scss";

Scrivito.provideComponent("FactWidget", ({ widget }) => (
  <div className="content_section">
  <div className="fact-widget">
    <Scrivito.ContentTag
      content={widget}
      attribute="value"
      className="value"
      tag="span"
    />
    <Scrivito.ContentTag
      content={widget}
      attribute="key"
      className="key"
      tag="span"
    />
  </div>
  </div>
));
