import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("CardWidget", ({ widget }) => {
  return (
    <div className="post_item">
      <Scrivito.ImageTag
        content={widget}
        attribute="image"
        className="post_item_img"
      />
      <div className="post_item_info">
        <div className="post_item_text bottom_line">
          <Scrivito.ContentTag
            content={widget}
            attribute="description"
            tag="p"
          />
        </div>
          <Scrivito.ContentTag content={widget} attribute="content" className="post_item_more" />
        
      </div>
    </div>
  );
});