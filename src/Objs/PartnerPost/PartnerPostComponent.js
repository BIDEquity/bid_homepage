import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("PartnerPost", ({ page }) => (
  <Scrivito.ContentTag tag="div" content={page} attribute="body" />
));
