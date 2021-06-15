import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("NewsPost", ({ page }) => {
  
  const categorylink = page.get("category");
  let categorytext = categorylink && categorylink.title();

  const sidelink = page.get("sideLink");
  let sidetext = sidelink && sidelink.title();

  const headlink = page.get("headLink");
  let headtext = headlink && headlink.title();

  const jobslink = page.get("linkToJobs");
  let jobstext = jobslink && jobslink.title();
  
  return (
    <>
      <div className="article_content article_new">
        <div className="article_new_top">
            <div className="container">
                <Scrivito.LinkTag to={categorylink} className="article_page_category more_link" >
                  {categorytext}
                </Scrivito.LinkTag>
                <div className="article_content_wrap">
                    <div className="article_content_main">
                        <div className="article_content_top">
                            
                            <Scrivito.ContentTag
                              content={page}
                              attribute="title"
                              tag="h1"
                              className="article_content_title"
                            />
                        </div>
                        <div className="block_text">
                            <p>
                              <Scrivito.ContentTag
                                content={page}
                                attribute="teaser"
                                tag="strong"
                              />
                            </p>
                            <Scrivito.ContentTag
                              content={page}
                              attribute="body"
                              
                            />
                            </div>
                    </div>
                    <div className="article_content_sidebar">
                        <a className="content_nav_link content_next" href="#">
                            <p className="content_nav_direction">Next</p>
                            <div className="content_nav_info">
                                <span className="content_nav_name">Acquisition of US-based Fortress Medical Systems accelerates BID Equity‘s life science software group around German XClinical and French Carenity</span>
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
        <div className="new_post_img">
            <Scrivito.ImageTag
              content={page}
              attribute="image"
            />
        </div>
        <div className="article_new_bottom">
            <div className="container">
                <div className="article_content_wrap">
                    <div className="article_content_main">
                        <div className="block_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="article_content_sidebar">
                        <div className="testimonial_item dark">
                            <div className="testimonial_item_text">
                                <p>They’re fun to work with. Nice people. So you tend to go the extra mile and and try to achieve things with them, rather than someone where you just do your duty.</p>
                            </div>
                            <div className="testimonial_item_bottom">
                                <p className="testimonial_item_name">Julian Brandt</p>
                                <p className="testimonial_item_position">Founder, Xscape</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article_content_nav content_nav">
                    <a className="content_nav_link content_prev" href="#">
                        <p className="content_nav_direction">Previous</p>
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
                            <span className="content_nav_name">BID Equity Fund II acquires analytics platform Carenity forging a new life science group with XClinical</span>
                        </div>
                    </a>
                    <a className="content_nav_link content_next" href="#">
                        <p className="content_nav_direction">Next</p>
                        <div className="content_nav_info">
                            <span className="content_nav_name">Acquisition of US-based Fortress Medical Systems accelerates BID Equity‘s life science software group around German XClinical and French Carenity</span>
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
				<div className="article_posts">
					<h2 className="section_title bottom_line">Related news</h2>
					<div className="posts_slider_wrap">
						<div className="posts_slider swiper-container">
							<div className="swiper-wrapper">
								<a className="post_slide swiper-slide" href="#">
									<div className="post_item_img" >
										<img src="images/post_1.jpg" alt=""/>
									</div>
									<div className="post_item_info">
										<p className="post_item_date bottom_line">5 Mar 2021</p>
										<div className="post_item_text">
											<p>Acquisition of Fortress Medical Systems quickens BID Equity‘s life science software group around XClinical and Carenity.</p>
										</div>
									</div>
								</a>
								<a className="post_slide swiper-slide" href="#">
									<div className="post_item_img">
										<img src="images/post_2.jpg" alt=""/>
									</div>
									<div className="post_item_info">
										<p className="post_item_date bottom_line">5 Feb 2021</p>
										<div className="post_item_text">
											<p>BID Equity acquires stake in Infopark Group, creator of the SaaS-based Content Management System Scrivito.</p>
										</div>
									</div>
								</a>
								<a className="post_slide swiper-slide" href="#">
									<div className="post_item_img">
										<img src="images/post_3.jpg" alt=""/>
									</div>
									<div className="post_item_info">
										<p className="post_item_date bottom_line">26 Jan 2021</p>
										<div className="post_item_text">
											<p>BID Equity Fund II announces the acquisition of PiSA sales GmbH to strengthen the recently acquired Infopark Group.</p>
										</div>
									</div>
								</a>
								<a className="post_slide swiper-slide" href="#">
									<div className="post_item_img">
										<img src="images/post_4.jpg" alt=""/>
									</div>
									<div className="post_item_info">
										<p className="post_item_date bottom_line">26 Jan 2021</p>
										<div className="post_item_text">
											<p>myneva Group acquires SWING to further strengthen its market-leading position in the social software sector.</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="posts_more">
						<a className="more_link" href="#">More news</a>
					</div>
				</div>
            </div>
        </div>
    </div>
    </>
  )}
);
