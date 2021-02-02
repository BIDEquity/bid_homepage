import * as React from "react";
import * as Scrivito from "scrivito";

import "./CtaTeaser.scss";

Scrivito.provideComponent("CtaTeaser", ({ widget }) => (
  <>
  
    <Scrivito.ContentTag tag="div" content={widget} attribute="content" />
    </>
));
