import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("TextWidget", ({ widget }) => {
  const classNames = [];
  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
  }

  if (widget.get("width")) {
    classNames.push(`w-${widget.get("width")}`)
  }

  return (
    <Scrivito.ContentTag
      tag="div"
      className={classNames.join(" ")}
      content={widget}
      attribute="text"
    />
  );
});
