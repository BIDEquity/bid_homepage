import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidBotWidget.scss";

Scrivito.provideComponent("BidBotWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bot-widget"
    content={widget}
    attribute="headline"
  />
));
