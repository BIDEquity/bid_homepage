import * as React from "react";

function ScrollToNextSectionLink({ heightClassName }) {
  if (heightClassName !== "full-height") {
    return null;
  }

  return (
    <a
      href="#mainContent"
      className="scroll_anchor top_scroll"
    >
      <img src="/src/assets/images/mouse_scroll.svg" alt="" />
    </a>
  );
}

export default ScrollToNextSectionLink;
