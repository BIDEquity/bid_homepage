import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("SectionWidget", ({ widget }) => {
  const sectionClassNames = [];
  const sectionStyle = {};

  let backgroundColor = widget.get("backgroundColor") || "";

  const backgroundImage = widget.get("backgroundImage");
  if (backgroundImage) {
    backgroundColor = "dark-image";
    sectionStyle.background = [
      
      { image: backgroundImage },
    ];
  }

  sectionClassNames.push(`bg-${backgroundColor}`);

  if (widget.get("showPadding") === "no") {
    sectionClassNames.push("no-padding");
  }

  if (widget.get("contentSteps") === "yes") {
    sectionClassNames.push("content_steps");
  }
  
  let contentClassName = "";
  if (widget.get("useFullWidth") === "yes") {
    contentClassName = "container-fluid gutter0";
  }

  if (widget.get("useFullHeight") === "yes") {
    sectionClassNames.push("full-height");
  }

  return (
    <Scrivito.BackgroundImageTag
      tag="div"
      className={sectionClassNames.join(" ")}
      style={sectionStyle}
    >
      <Scrivito.ContentTag
        className="container"
        content={widget}
        attribute="content"
      />
    </Scrivito.BackgroundImageTag>
  );
});
