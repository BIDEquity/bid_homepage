import * as React from "react";
import * as Scrivito from "scrivito";

import "./PersonWidget.scss";

Scrivito.provideComponent("PersonWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="person-widget"
    content={widget}
    attribute="headline"
  />
));
