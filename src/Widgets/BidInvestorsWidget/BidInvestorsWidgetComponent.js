import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidInvestorsWidget", ({ widget }) => {
  const link1 = widget.get("teamLink1");
  let linktext1 = link1 && link1.title();
  
  return (
    <div></div>
  );
});
