import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidFactWidget", ({ widget }) => (
  
   <div className="portfolio_stats_item">                    
  
    <div className="portfolio_stats_top">
    <Scrivito.ContentTag
      content={widget}
      attribute="title"
      className="portfolio_stats_step"
      tag="p"
    />
    <div className="portfolio_stats_text">
    <Scrivito.ContentTag
      content={widget}
      attribute="key"
      tag="p"
    />
    </div>
    </div>
    <Scrivito.ContentTag
      content={widget}
      attribute="value"
      className="portfolio_stats_number"
      tag="p"
    />
    </div>
  
));
