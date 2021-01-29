import * as React from "react";
import * as Scrivito from "scrivito";
import formatDate from "../../utils/formatDate";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import SchemaDotOrg from "../../Components/SchemaDotOrg";

Scrivito.provideComponent("NewsPost", ({ page }) => (
  <div>
    <section className="left-block-stripes full-height">
      <div className="container">
        <section className="sidebar-style">
          <div className="row align-items-center justify-content-center full-inner-height">
            <div className="col-lg-9">
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
            <div className="col-lg-3 text-center">Next News</div>
          </div>  
       </section>
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

