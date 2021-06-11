import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPrivacyWidget", ({ widget }) => {
  return (
    
    <div className="article_content article_typical">
		<div className="container">
            <div className="article_content_wrap">
                <div className="article_content_main">
                    <div className="article_content_top bottom_line">
                        <Scrivito.ContentTag
                          content={widget}
                          attribute="headline"
                          tag="h1"
                          className="article_content_title"
                        />
                    </div>
                    
                    <Scrivito.ContentTag
                          content={widget}
                          attribute="body"
                          className="block_text"
                        />
                    
                </div>
                <div className="article_content_sidebar">
                    <a className="content_nav_link content_next" href="#">
                    <Scrivito.ContentTag
                content={widget}
                attribute="next"
                tag="p"
                className="content_nav_direction"
              />
                        <div className="content_nav_info">
                            <span className="content_nav_name">Terms of Use</span>
                            <span className="arrow_btn">
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
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
});
