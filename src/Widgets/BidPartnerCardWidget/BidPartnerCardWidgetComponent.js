import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPartnerCardWidget", ({ widget }) => {
  const link = widget.get("partnerLink");
  

  return (
    <Scrivito.WidgetTag className="partners_post_item">
      <div
        className={`${
          widget.get("backgroundColor") === "yes"
            ? "partners_post_logo"
            : "portfolio_post_img"
        }`}
      >
        <Scrivito.ImageTag content={widget} attribute="image" alt="" />
      </div>
      <div className="partners_post_info">
        <div className="partners_post_row">
          <div className="partners_post_left">
            <Scrivito.ContentTag
              content={widget}
              tag="p"
              attribute="company"
              className="partners_post_name"
            />
            
            <Scrivito.ContentTag
              content={widget}
              attribute="position"
              className="partners_post_position"
              tag="p"
            />
          </div>
          <div className="partners_post_right">
            <Scrivito.LinkTag className="arrow_btn" to={link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.284"
                height="10.73"
                viewBox="0 0 17.284 10.73"
                fill="none"
                strokeWidth="1.5"
              >
                <g transform="translate(-570.625 -853.857)">
                  <path
                    d="M576.989,860.911l4.3,4.3-4.3,4.3"
                    transform="translate(5.865 -5.993)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="15.783"
                    transform="translate(571.375 859.222)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </Scrivito.LinkTag>
          </div>
          </div>
          
            <Scrivito.ContentTag
              content={widget}
              attribute="text"
              className="partners_post_text block_text light"
            />
          
        </div>
      
    </Scrivito.WidgetTag>
  );
});
