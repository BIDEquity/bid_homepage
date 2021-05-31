import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidWhatWeDoWidget", ({ widget }) => {
  

return (
<>
    <div className="content_section we_do_content">
		<div className="container">
        <Scrivito.ContentTag
          content={widget}
          attribute="content"
        />
            
		</div>
	</div>
    <div className="about_us">
        
        <Scrivito.ImageTag 
          content={widget}
          attribute="image"
          className="info_bg"
          alt=""
        />
        <div className="info_slider swiper-container">
            <div className="swiper-wrapper">
                <div className="info_slider_item swiper-slide">
                    <div className="container">
                        
                        <Scrivito.ContentTag
                          content={widget}
                          attribute="slides"
                          
                        />
                        
                        
                    </div>
                </div>
                
                
            </div>
        </div>
        
    </div>
	
	</>  
  /*return (
    <Scrivito.WidgetTag tag="div">
      
    <div className="content_section we_do_content">
		<div className="container">
        <Scrivito.ContentTag
          content={widget}
          attribute="content"
        />
            
		</div>
	</div>
    <Scrivito.WidgetTag className="about_us info_section"><Scrivito.ImageTag
        content={widget}
        attribute="image"
      />
        <Scrivito.ContentTag
          content={widget}
          attribute="slides"
          className="info_slider swiper-container"
        />
        
    </Scrivito.WidgetTag>
	</Scrivito.WidgetTag>
      );*/
)});
