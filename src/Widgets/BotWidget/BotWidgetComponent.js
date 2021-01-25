import * as React from "react";
import * as Scrivito from "scrivito";

import "./BotWidget.scss";

Scrivito.provideComponent("BotWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="bot-widget"
    content={widget}
    attribute="headline"
  />
));
