import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPartnerDetailsWidget", ({ widget }) => {
  return (
    <div class="article_content article_partner">
		<div class="container">
            <a class="article_page_category more_link" href="#">Partners</a>
            <div class="article_content_wrap">
                <div class="article_content_main">
                    <div class="article_content_top bottom_line">
                        <h1 class="article_content_title">Radical path</h1>
                    </div>
                    <div class="article_content_intro">
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                    </div>
                    <div class="block_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div class="article_content_sidebar">
                    <a class="content_nav_link content_next" href="#">
                        <p class="content_nav_direction">Next</p>
                        <div class="content_nav_info">
                            <span class="content_nav_name">Docker Technologies</span>
                            <span class="arrow_btn">
                                svg
                            </span>
                        </div>
                    </a>
					<div class="testimonial_item dark bottom_line">
						<div class="testimonial_item_text">
							<p>They’re fun to work with. Nice people. So you tend to go the extra mile and and try to achieve things with them, rather than someone where you just do your duty.</p>
						</div>
						<div class="testimonial_item_bottom">
							<p class="testimonial_item_name">Julian Brandt</p>
							<p class="testimonial_item_position">Founder, Xscape</p>
						</div>
					</div>
                </div>
            </div>
			<div class="partner_details_row">
				<div class="partner_details_box">
					<div class="partner_details_titles">
						<h2 class="title_block bottom_line light">Radical path case study amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
						<a class="partner_details_link" href="#">radical-path.com</a>
					</div>
				</div>
				<div class="partner_details_img">
					<img src="images/partner_details_img.jpg" alt=""/>
				</div>
			</div>
            <div class="article_content_nav content_nav">
                <a class="content_nav_link content_prev" href="#">
                    <p class="content_nav_direction">Previous</p>
                    <div class="content_nav_info">
                        <span class="arrow_btn">
                            svg
                        </span>
                        <span class="content_nav_name">Microsoft</span>
                    </div>
                </a>
                <a class="content_nav_link content_next" href="#">
                    <p class="content_nav_direction">Next</p>
                    <div class="content_nav_info">
                        <span class="content_nav_name">Docker Technologies</span>
                        <span class="arrow_btn">
                            svg
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    
  );
});
