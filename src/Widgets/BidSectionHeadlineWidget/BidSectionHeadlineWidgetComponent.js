import * as React from "react";
import * as Scrivito from "scrivito";
import { kebabCase } from "lodash-es";

Scrivito.provideComponent("BidSectionHeadlineWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const classNames = [];
  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
  }
  if (widget.get("showDividingLine") === "yes") {
    classNames.push("section_title", "bottom_line");
  }
  

  if (widget.get("width")) {
    classNames.push(`w-${widget.get("width")}`)
  }

  if (widget.get("float") === "right") {
    classNames.push("float-right")
  }
  

  return (
    <>
      <span
        className="headline-widget--anchor"
        id={kebabCase(widget.get("headline"))}
      ></span>
      <Scrivito.ContentTag
        tag={level}
        content={widget}
        attribute="headline"
        className={classNames.join(" ")}
      />
    </>
  );
});
