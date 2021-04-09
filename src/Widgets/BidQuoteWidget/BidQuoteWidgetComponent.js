import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidQuoteWidget", ({ widget }) => {
  return (
    <div className="testimonials_section">
    <div className="testimonial_item">
      <div className="testimonial_item_text">
        <Scrivito.ContentTag tag="p" content={widget} attribute="quote" />
      </div>
      <div className="testimonial_item_bottom">
        <Scrivito.ContentTag
          className="testimonial_item_name"
          content={widget}
          attribute="name"
          tag="p"
        />
        <p className="testimonial_item_position">
          <Scrivito.ContentTag
            content={widget}
            attribute="position"
            tag="span"
          />
          <span>, </span>
          <Scrivito.ContentTag
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
