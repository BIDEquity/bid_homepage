import * as React from "react";
import * as Scrivito from "scrivito";

import "./QuoteWidget.scss";

Scrivito.provideComponent("QuoteWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="quote-widget"
    content={widget}
    attribute="headline"
  />
));
