import * as React from "react";
import * as Scrivito from "scrivito";

import "./QuoteWidget.scss";


Scrivito.provideComponent("QuoteWidget", ({ widget }) =>  {

  const classNames = [];
  if (widget.get("showDividingLine") === "yes") {
    classNames.push("b-bottom");
  }

  return (
  <div className={classNames.join(" ")}>
    <div className="prefix">“</div>
    <Scrivito.ContentTag
    tag="h2"  
    className="quote"
    content={widget}
    attribute="quote"
    />
    <Scrivito.ContentTag
    className="quote-name"
    content={widget}
    attribute="name"
    />
    <Scrivito.ContentTag
    className="quote-position"
    content={widget}
    attribute="position"
    />
    <Scrivito.ContentTag
    className="quote-company"
    content={widget}
    attribute="company"
  />
    
    </div>
  )
}
);
