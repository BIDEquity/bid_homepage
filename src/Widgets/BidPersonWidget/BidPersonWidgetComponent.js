import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidPersonWidget.scss";

Scrivito.provideComponent("BidPersonWidget", ({ widget }) => {
  return (
  
  <div className="article_content article_team">
		<div className="container">
            <a className="article_page_category more_link hidden" href="#">Team</a>
            <div className="article_content_wrap">
                <div className="article_content_main">
                    <div className="article_content_top bottom_line">
                        <h1 className="article_content_title">Helge Hofmeister</h1>
                        <p className="article_content_category">Designation</p>
                        <div className="article_content_soc">
                            <a href="#">
                                svg
                            </a>
                        </div>
                    </div>
                    <div className="article_content_img">
                        <img src="images/team_profile.jpg" alt=""/>
                    </div>
                    <div className="article_content_intro">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    </div>
                    <div className="block_text">
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br/><br/>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br/><br/>
                        <div className="article_content_quote testimonial_item dark bottom_line">
                            <div className="testimonial_item_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br/><br/>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="article_content_sidebar">
                    <a className="content_nav_link content_next" href="#">
                        <p className="content_nav_direction">Next</p>
                        <div className="content_nav_info">
                            <span className="content_nav_name">Lars Kloppsteck</span>
                            <span className="arrow_btn">
                                svg
                            </span>
                        </div>
                    </a>
                    <div className="job_post">
                        <p className="job_post_category">Jobs</p>
                        <h3 className="job_post_name">Senior Investment Analyst</h3>
                        <a className="more_link" href="#">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="article_content_nav content_nav">
                <a className="content_nav_link content_prev" href="#">
                    <p className="content_nav_direction">Previous</p>
                    <div className="content_nav_info">
                        <span className="arrow_btn">
                            svg
                        </span>
                        <span className="content_nav_name">John Mayer</span>
                    </div>
                </a>
                <a className="content_nav_link content_next" href="#">
                    <p className="content_nav_direction">Next</p>
                    <div className="content_nav_info">
                        <span className="content_nav_name">Lars Kloppsteck</span>
                        <span className="arrow_btn">
                            svg
                        </span>
                    </div>
                </a>
            </div>
            <div className="article_posts">
                <h2 className="section_title bottom_line">From Helge’s desk</h2>
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
            </div>
        </div>
    </div>
    
)});
