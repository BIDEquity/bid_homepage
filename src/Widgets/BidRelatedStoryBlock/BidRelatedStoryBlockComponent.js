import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidRelatedStoryBlock.scss";

Scrivito.provideComponent("BidRelatedStoryBlock", ({ widget }) => (
  <Scrivito.ContentTag
    className="bid-related-story-block"
    content={widget}
    attribute="headline"
  />
));
