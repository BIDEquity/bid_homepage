import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("News", ({ page }) => {
  
  const link = page.get("apply");
  let linktext = link && link.title();

  const sidelink = page.get("sideLink");
  let sidetext = sidelink && sidelink.title();

  const headlink = page.get("headLink");
  let headtext = headlink && headlink.title();

  const jobslink = page.get("linkToJobs");
  let jobstext = jobslink && jobslink.title();
  
  return (
    <>
      <div className="article_content article_job">
        <div className="container">
          <div className="article_job_top">
            <div className="article_job_category">
              
              <Scrivito.LinkTag to={jobslink} className="more_link">
                {jobstext}
              </Scrivito.LinkTag>
            </div>
            <div className="article_job_info">
              <div className="article_job_logo">
                <Scrivito.ImageTag
                  content={page}
                  attribute="headLogo"
                  width="258"
                  alt=""
                />
              </div>
              <div className="article_job_about">
                <div className="article_job_description">
                  <Scrivito.ContentTag
                    content={page}
                    attribute="headText"
                    tag="p"
                  />
                </div>

                <Scrivito.LinkTag to={headlink} className="article_job_more">
                  <span>{headtext}</span>
                  <svg className="svg_arrow_link"
                      width="17.284" 
                      height="10.73"
                      fill="none"
                      strokeWidth="1.5"
                      viewBox="0 0 17.284 10.73"
                      id="arrow_link"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.229 1.061l4.3 4.3-4.3 4.3M16.533 5.365H.75"></path>
                    
                  </svg>
                </Scrivito.LinkTag>
              </div>
            </div>
          </div>
          <div className="article_content_wrap">
            <div className="article_content_main">
              <div className="article_content_top bottom_line">
                <Scrivito.ContentTag
                  content={page}
                  attribute="title"
                  tag="h1"
                  className="article_content_title"
                />
                <div className="article_content_category">
                  <ul>
                    <li>
                      <a href="#">
                        <Scrivito.ContentTag
                          content={page}
                          tag="span"
                          attribute="location"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <Scrivito.ContentTag
                          content={page}
                          tag="span"
                          attribute="industry"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <Scrivito.ContentTag
                          content={page}
                          tag="span"
                          attribute="department"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block_text">
                <Scrivito.ContentTag
                  content={page}
                  attribute="teaser"
                  tag="p"
                />
              </div>
              <div className="article_content_intro">
                <Scrivito.ContentTag
                  content={page}
                  attribute="subtitle"
                  tag="h3"
                  className="article_content_title"
                />
                <Scrivito.ContentTag content={page} attribute="text" />
                
              </div>

              <Scrivito.LinkTag to={link} className="article_job_apply btn">
                {linktext}
              </Scrivito.LinkTag>
            </div>
            <div className="article_content_sidebar">
              <a className="content_nav_link content_next" href="#">
              <Scrivito.ContentTag
                content={page}
                attribute="next"
                tag="p"
                className="content_nav_direction"
              />
                <div className="content_nav_info">
                  <span className="content_nav_name">Lab Technician</span>
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
              <div className="job_post">
                <Scrivito.ContentTag
                  content={page}
                  attribute="sideText"
                  tag="h3"
                  className="job_post_name"
                />

                <Scrivito.LinkTag to={sidelink} className="more_link">
                  {sidetext}
                </Scrivito.LinkTag>
              </div>
            </div>
          </div>
          <div className="article_content_nav content_nav">
            <a className="content_nav_link content_prev" href="#">
            <Scrivito.ContentTag
                content={page}
                attribute="prev"
                tag="p"
                className="content_nav_direction"
              />
              <div className="content_nav_info">
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
                <span className="content_nav_name">Systems Analyst</span>
              </div>
            </a>
            <a className="content_nav_link content_next" href="#">
            <Scrivito.ContentTag
                content={page}
                attribute="next"
                tag="p"
                className="content_nav_direction"
              />
              <div className="content_nav_info">
                <span className="content_nav_name">Lab Technician</span>
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
    </>
  )}
);
