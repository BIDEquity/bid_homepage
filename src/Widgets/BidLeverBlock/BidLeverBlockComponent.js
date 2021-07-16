import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidCtaTeaser", ({ widget }) => (
  <div class="operational_value_column">
    <div class="operational_value_box"></div>
    <div class="operational_value_info">
      <Scrivito.ContentTag
        content={widget}
        attribute="leverStep"
        tag="p"
        className="operational_value_level"
      />

      <Scrivito.ContentTag
        content={widget}
        attribute="title"
        tag="p"
        className="operational_value_name"
      />
    </div>
  </div>
));
