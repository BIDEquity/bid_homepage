import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BoxWidget", ({ widget }) => {
  const classNames = ["card"];
  const backgroundGradientImage = widget.get("backgroundGradientImage");
  if (widget.get("boxStyle") !== "white") {
    classNames.push("card-theme");
  }
  if (widget.get("useOffset") === "yes") {
    classNames.push("box-offset");
  }

  if (backgroundGradientImage) {
    classNames.push(backgroundGradientImage)
  }

  return (
    <Scrivito.WidgetTag className={classNames.join(" ")}>
      <Scrivito.ContentTag
        content={widget}
        attribute="body"
        className="card-body"
      />
    </Scrivito.WidgetTag>
  );
});
