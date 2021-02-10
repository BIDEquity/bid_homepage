import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidTwoColumnsTextWidget.scss";

Scrivito.provideComponent("BidTwoColumnsTextWidget", ({ widget }) => (
  <div className="bid-two-columns-text-widget">
    <div className="row b-bottom">
      <div className="col-md-6">
      <Scrivito.ContentTag
        content={widget}
        attribute="col1"
      />
      </div>
      <div className="col-md-6">
      <Scrivito.ContentTag
        content={widget}
        attribute="col2"
      /> 
      </div>
    </div>
  <Scrivito.ContentTag
    content={widget}
    attribute="content"
    />
  </div>
));
