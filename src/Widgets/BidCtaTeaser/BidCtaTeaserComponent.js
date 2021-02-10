import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidCtaTeaser.scss";

Scrivito.provideComponent("BidCtaTeaser", ({ widget }) => (
  <>
  
    <Scrivito.ContentTag tag="div" content={widget} attribute="content" />
    </>
));
