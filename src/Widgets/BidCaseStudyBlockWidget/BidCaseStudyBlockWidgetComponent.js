import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidCaseStudyBlockWidget.scss";

Scrivito.provideComponent("BidCaseStudyBlockWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-case-study-block-widget"
    content={widget}
    attribute="headline"
  />
));
