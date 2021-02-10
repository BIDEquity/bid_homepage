import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidJobTeaserWidget.scss";

Scrivito.provideComponent("BidJobTeaserWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-job-teaser-widget"
    content={widget}
    attribute="headline"
  />
));
