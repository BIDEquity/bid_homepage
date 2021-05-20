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
  
  
  if (widget.get("useFullWidth") === "yes") {
    sectionClassNames.push("full-width");
  }

  if (widget.get("useFullHeight") === "yes") {
    sectionClassNames.push("full-height");
   
  }

  return (
    
      <Scrivito.ContentTag
        className="content_section"
        content={widget}
        attribute="content"
      />
    
  );
});
