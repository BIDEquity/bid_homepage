import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidVideoCta.scss";

Scrivito.provideComponent("BidVideoCta", ({ widget }) => (
  <div className="d-flex justify-content-center align-items-center play">
    <Scrivito.ContentTag
      content={widget}
      attribute="claim"
    />
    <i className="fa fa-play-circle-o fa-lg" aria-hidden="true" />
  </div>
));
