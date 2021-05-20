import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FactWidget", ({ widget }) => {
  
  return (
    
  
    <div className="about_stat_info">
      <Scrivito.WidgetTag tag="p" className="about_stat_number">
      
        <Scrivito.ContentTag
          content={widget}
          attribute="value"
          
        />
      </Scrivito.WidgetTag>
      <Scrivito.WidgetTag tag="p" className="about_stat_text">
      
        <Scrivito.ContentTag
          content={widget}
          attribute="key"
          
        />
      </Scrivito.WidgetTag>
    </div>
  
  
  )
});
