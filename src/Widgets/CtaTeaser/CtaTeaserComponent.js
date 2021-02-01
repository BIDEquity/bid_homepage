import * as React from "react";
import * as Scrivito from "scrivito";

import "./CtaTeaser.scss";

Scrivito.provideComponent("CtaTeaser", ({ widget }) => (
  <>
  <Scrivito.ContentTag
    className="h3"
    content={widget}
    attribute="headline"
    />
    <Scrivito.ContentTag
    content={widget}
    attribute="text"
    />
    <Scrivito.ContentTag tag="div" content={widget} attribute="content" />
    </>
));
