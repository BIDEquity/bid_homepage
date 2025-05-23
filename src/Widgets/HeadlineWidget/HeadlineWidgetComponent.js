import * as React from "react";
import * as Scrivito from "scrivito";
import { kebabCase } from "lodash-es";
import "./HeadlineWidget.scss";

Scrivito.provideComponent("HeadlineWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const classNames = [style, "section_title"];
  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
  }
  if (widget.get("showDividingLine") === "yes") {
    classNames.push("top_title", "bottom_line", "aos-init", "aos-animate");
  }

  if (widget.get("width")) {
    classNames.push(`w-${widget.get("width")}`)
  }

  if (widget.get("float") === "right") {
    classNames.push("float-right")
  }
  

  return (
    <div>
      <span
        className="headline-widget--anchor"
        id={kebabCase(widget.get("headline"))}
      ></span>
      <Scrivito.ContentTag
        data-aos="animation"
        tag={level}
        content={widget}
        attribute="headline"
        className={classNames.join(" ")}
      />
    </div>
  );
});
