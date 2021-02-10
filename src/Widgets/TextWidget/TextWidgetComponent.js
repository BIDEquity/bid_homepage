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

  if (widget.get("float") === "right") {
    classNames.push("float-right")
  }

  if (widget.get("showDividingLine") === "yes") {
    classNames.push("b-bottom");
  }

  return (
    <Scrivito.ContentTag
      tag="p"
      className={classNames.join(" ")}
      content={widget}
      attribute="text"
    />
  );
});
