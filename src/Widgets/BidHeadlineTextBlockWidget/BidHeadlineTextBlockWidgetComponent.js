import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidHeadlineTextBlockWidget.scss";

Scrivito.provideComponent("BidHeadlineTextBlockWidget", ({ widget }) => {
  const color = widget.get("color") || "white";
  return (
  <Scrivito.ContentTag
    className={`bid-headline-text-block-widget text-${color}`}
    content={widget}
    attribute="content"
  />
  )
});
