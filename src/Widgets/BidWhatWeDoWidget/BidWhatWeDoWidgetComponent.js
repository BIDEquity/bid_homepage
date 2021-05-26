import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidWhatWeDoWidget", ({ widget }) => {
  const link = widget.get("bottomLink");
  let linktext = link && link.title();
  
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
          attribute="bgImage"
          className="info_bg"
          alt=""
        />
        <div className="info_slider swiper-container">
            <div className="swiper-wrapper">
                <div className="info_slider_item swiper-slide">
                    <div className="container">
                        
                        <Scrivito.ContentTag
                          content={widget}
                          attribute="sectionHeadline"
                          className="section_title bottom_line col_6 col_t_12"
                          tag="h2"
                        />
                        
                        <Scrivito.LinkTag to={link} className="info_slider_link">
                          {linktext}
                        </Scrivito.LinkTag>
                    </div>
                </div>
                
                
            </div>
        </div>
        <div className="info_slider_bottom">
            <div className="container">
                <div className="info_slider_pagination slider_pagination"></div>
            </div>
        </div>
    </div>
	
	</>
      );
});
