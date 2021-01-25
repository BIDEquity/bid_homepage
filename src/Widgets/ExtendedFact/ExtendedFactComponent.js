import * as React from "react";
import * as Scrivito from "scrivito";

import "./ExtendedFact.scss";

Scrivito.provideComponent("ExtendedFact", ({ widget }) => (
  <Scrivito.ContentTag
    className="extended-fact"
    content={widget}
    attribute="headline"
  />
));
