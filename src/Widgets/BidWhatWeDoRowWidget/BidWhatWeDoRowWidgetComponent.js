import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidWhatWeDoRowWidget", ({ widget }) => {
  const link = widget.get("link");
  let linktext = link && link.title();

  return (
    <div
      className={`we_do_row ${widget.get("reverse") === "yes" && "reverse"}`}
    >
      <div className="we_do_img">
        <Scrivito.ImageTag content={widget} attribute="image" alt="" />
      </div>
      <div className="we_do_info">
        <Scrivito.ContentTag
          content={widget}
          attribute="headline"
          className="we_do_title"
          tag="h2"
        />

        <Scrivito.ContentTag
          content={widget}
          attribute="description"
          className="we_do_description"
          tag="p"
        />
        <div className="we_do_text">
          <Scrivito.ContentTag content={widget} attribute="text" tag="p" />
        </div>
        <Scrivito.LinkTag to={link} className="we_do_more more_link">
            {linktext}
        </Scrivito.LinkTag>
      </div>
    </div>
  );
});
