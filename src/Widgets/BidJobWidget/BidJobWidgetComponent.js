import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidJobWidget", ({ widget }) => {
  return (
    <>
    <div className="article_content article_job">
		<div className="container">
            <div className="article_job_top">
				<div className="article_job_category">
                	<a className="more_link" href="#">Jobs</a>
				</div>
				<div className="article_job_info">
					<div className="article_job_logo">
						<img src="images/portfolio_logo_1.png" width="258" alt=""/>
					</div>
					<div className="article_job_about">
						<div className="article_job_description">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ut. Lorem ipsum dolor sit amet. Tempor incididunt ut labore et dolore magna ut. Lorem ipsum dolor sit amet.</p>
						</div>
						<a className="article_job_more" href="#">
							<span>Find out more</span>
							<svg className="svg_arrow_link">
								svg
							</svg>
						</a>
					</div>
				</div>
            </div>
            <div className="article_content_wrap">
                <div className="article_content_main">
                    <div className="article_content_top bottom_line">
                        <h1 className="article_content_title">Product manager</h1>
                        <div className="article_content_category">
							<ul>
								<li><a href="#">Germany</a></li>
								<li><a href="#">Life sciences</a></li>
								<li><a href="#">Marketing</a></li>
							</ul>
						</div>
                    </div>
                    <div className="block_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="article_content_intro">
						<h3>Job Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <ul>
                            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                            <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                            <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</li>
                            <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</li>
                            <li>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.</li>
                        </ul>
                    </div>
					<a className="article_job_apply btn" href="#">Apply for this job</a>
                </div>
                <div className="article_content_sidebar">
                    <a className="content_nav_link content_next" href="#">
                        <p className="content_nav_direction">Next role</p>
                        <div className="content_nav_info">
                            <span className="content_nav_name">Lab Technician</span>
                            <span className="arrow_btn">
                                <svg className="svg_arrow_link">
                                    svg
                                </svg>
                            </span>
                        </div>
                    </a>
                    <div className="job_post">
                        <h3 className="job_post_name">Senior Product Manager</h3>
                        <a className="more_link" href="#">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="article_content_nav content_nav">
                <a className="content_nav_link content_prev" href="#">
                    <p className="content_nav_direction">Previous role</p>
                    <div className="content_nav_info">
                        <span className="arrow_btn">
                            <svg className="svg_arrow_link">
                                svg
                            </svg>
                        </span>
                        <span className="content_nav_name">Systems Analyst</span>
                    </div>
                </a>
                <a className="content_nav_link content_next" href="#">
                    <p className="content_nav_direction">Next role</p>
                    <div className="content_nav_info">
                        <span className="content_nav_name">Lab Technician</span>
                        <span className="arrow_btn">
                            <svg className="svg_arrow_link">
                                svg
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    </>
  );
});
