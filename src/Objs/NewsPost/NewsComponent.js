import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import SchemaDotOrg from "../../Components/SchemaDotOrg";

Scrivito.provideComponent("NewsPost", ({ page }) => (
  <div>
    <section className="left-block-stripes full-height">
      
        <div className="container h-100">
        <div className="row h-100">
          
            <div className="col-lg-9 light-blue p-4">
            <Scrivito.ContentTag
              tag="h1"
              className="h1"
              content={page}
              attribute="title"
        />
        <NewsDatePosted page={ page }/>
        <Scrivito.ContentTag
              content={page}
              attribute="text"
              />
            </div>
            <div className="col-lg-3 p-4 text-center dark-blue"><div className="next-link"> Next News</div></div>
          </div>  
       
      </div>
      
    </section>
   
    <Scrivito.ContentTag tag="div" content={page} attribute="body" />
    
  </div>
));

const NewsDatePosted = Scrivito.connect(({ page }) => {
  const datePosted = page.get("datePosted");

  if (!datePosted && !Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  return (
    <Scrivito.ContentTag content={page} attribute="datePosted" tag="span">
      {datePosted ? (
        formatDate(datePosted, "mm/dd/yyyy")
      ) : (
        <InPlaceEditingPlaceholder>
          Click to select a posting date
        </InPlaceEditingPlaceholder>
      )}
    </Scrivito.ContentTag>
  );
});

