import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "./InPlaceEditingPlaceholder";

function Footer() {
  const root = Scrivito.Obj.root();

  if (!root) {
    return null;
  }

  return (
    <footer className="footer">
		<div className="container">
			<div className="footer_inner">
				<div className="footer_left">
					<a className="footer_logo" href="/">
						<img src="images/logo.svg" alt="" />
					</a>
					<p className="footer_cop bottom_line">© 2021 Bid Equity Gmbh. All rights reserved.</p>
					<div className="footer_box">
						<p className="footer_box_title">Quick Links</p>
						<div className="footer_links">
							<a href="#">About</a>
							<a href="#">Portfolio</a>
							<a href="#">Entrepreneurs</a>
							<a href="#">Intermediaries</a>
							<a href="#">Investors</a>
							<a href="#">News</a>
							<a href="#">Jobs</a>
							<a href="#">Contact</a>
							<a href="#">Privacy Policy</a>   
							<a href="#">Terms of Use</a>
						</div>
					</div>
				</div>
				<div className="footer_right">
					<div className="footer_top bottom_line">
						<h3 className="footer_title">Get a reliable valuation for your business within two hours from us.</h3>
						<a className="btn" href="#">Let’s go!</a>
					</div>
					<div className="footer_info">
						<div className="footer_box">
							<p className="footer_box_title">Start a conversation</p>
							<div className="footer_text">
								<p>Phone +49 40 822 169 420</p>
								<p>Fax +49 40 537 981 320</p>
								<p>Mail contact@bidequity.de</p>
							</div>
						</div>
						<div className="footer_box">
							<p className="footer_box_title">Come and meet us</p>
							<div className="footer_text">
								<p>BID EQUITY GMBH <br />Große Johannisstraße 7 <br />20457 Hamburg, Germany </p>
							</div>
						</div>
						<div className="footer_box">
							<p className="footer_box_title">Get social with us</p>
							<div className="footer_soc">
								<a href="#">
									Twitter
								</a>
								<a href="#">
									Linkedin
								</a>
								<a href="#">
									Facebook
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
  );
}

export default Scrivito.connect(Footer);
