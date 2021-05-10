import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidQuoteWidget", ({ widget }) => {
  const color = widget.get("color")
  return (
    <div className="testimonials_section">
    <div className={`testimonial_item ${color}`}>
      <div className="testimonial_item_text">
        <Scrivito.ContentTag tag="p" className={color} content={widget} attribute="quote" />
      </div>
      <div className="testimonial_item_bottom">
        <Scrivito.ContentTag
          className={`testimonial_item_name name-${color}`}
          content={widget}
          attribute="name"
          tag="p"
        />
        <p className={`testimonial_item_position text-${color}`}>
          <Scrivito.ContentTag
          className={`company-${color}`}
            content={widget}
            attribute="position"
            tag="span"
          />
          <span className={`company-${color}`}>, </span>
          <Scrivito.ContentTag
          className={`company-${color}`}
            content={widget}
            attribute="company"
            tag="span"
          />
        </p>
      </div>
      </div>
    </div>
  );
});
