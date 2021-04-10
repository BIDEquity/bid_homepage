import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("CardWidget", ({ widget }) => (
  <Scrivito.WidgetTag className="post_item" tag="div">
    
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
      <Scrivito.WidgetTag className="post_item_more" tag="div">
          <Scrivito.ContentTag content={widget} attribute="content" />
        </Scrivito.WidgetTag>
      </div>
    
    </Scrivito.WidgetTag>
  )
)