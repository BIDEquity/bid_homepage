import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "./InPlaceEditingPlaceholder";

function Footer() {
  const root = Scrivito.Obj.root();
  const currentPage = Scrivito.currentPage();
  if (!currentPage) {
    return null;
  }
  const altF = currentPage.get("showAlternateFooter");
  if (!root) {
    return null;
  }

  const lang = root.siteId();

  return (
    <footer className={`footer ${altF === "yes" && "footer_alternative"}`}>
      <div className="container">
        <div className="footer_inner">
          <div className="footer_left">
            <a className="footer_logo" href="/">
              <svg width="146.116" height="27.379" viewBox="0 0 146.116 27.379">
                <g transform="translate(-161.124 -327.43)">
                  <circle
                    cx="1.701"
                    cy="1.701"
                    r="1.701"
                    transform="translate(168.799 327.43)"
                    fill="#ff5650"
                  />
                  <circle
                    cx="1.701"
                    cy="1.701"
                    r="1.701"
                    transform="translate(161.815 344.036)"
                    fill="#fff"
                  />
                  <circle
                    cx="1.701"
                    cy="1.701"
                    r="1.701"
                    transform="translate(182.389 333.085)"
                    fill="#fff"
                  />
                  <circle
                    cx="1.701"
                    cy="1.701"
                    r="1.701"
                    transform="translate(175.275 349.822)"
                    fill="#fff"
                  />
                  <path
                    d="M164.027,339.676l2.865-2.865a1.7,1.7,0,1,0-2.406-2.4l-2.865,2.864a1.7,1.7,0,1,0,2.406,2.406Z"
                    transform="translate(0 -1.666)"
                    fill="#fff"
                  />
                  <path
                    d="M189.6,352.876l3.311-3.371A1.7,1.7,0,0,0,190.5,347.1l-3.31,3.371a1.7,1.7,0,1,0,2.405,2.4Z"
                    transform="translate(-6.578 -4.932)"
                    fill="#fff"
                  />
                  <path
                    d="M171.436,342.421l10.952-10.952a1.7,1.7,0,0,0-2.406-2.406l-10.952,10.952a1.7,1.7,0,0,0,2.406,2.406Z"
                    transform="translate(-1.906 -0.292)"
                    fill="#fff"
                  />
                  <path
                    d="M171.436,355.376l10.952-10.952a1.7,1.7,0,0,0-2.406-2.406L169.031,352.97a1.7,1.7,0,0,0,2.406,2.406Z"
                    transform="translate(-1.906 -3.625)"
                    fill="#fff"
                  />
                  <g transform="translate(195.578 328.188)">
                    <path
                      d="M207.512,328.912h5.7c3.916,0,5.6,1.821,5.6,5.53v.962c0,2.473-.755,4.019-2.438,4.706v.069c2.026.687,2.816,2.473,2.816,5.015v2.061c0,3.709-1.958,5.7-5.736,5.7h-5.943Zm5.256,9.79c1.408,0,2.267-.618,2.267-2.542v-1.34c0-1.718-.584-2.473-1.924-2.473h-1.82V338.7Zm.687,10.82c1.271,0,1.958-.584,1.958-2.37v-2.1c0-2.233-.721-2.92-2.439-2.92H211.29v7.385Z"
                      transform="translate(-207.512 -328.569)"
                      fill="#fff"
                    />
                    <path
                      d="M226.194,328.912h3.778v24.046h-3.778Z"
                      transform="translate(-212.318 -328.569)"
                      fill="#fff"
                    />
                    <path
                      d="M235.072,328.912h5.771c3.778,0,5.634,2.1,5.634,5.943v12.16c0,3.847-1.855,5.943-5.634,5.943h-5.771Zm5.7,20.61c1.2,0,1.923-.618,1.923-2.335v-12.5c0-1.717-.721-2.336-1.923-2.336h-1.924v17.175Z"
                      transform="translate(-214.602 -328.569)"
                      fill="#fff"
                    />
                    <path
                      d="M261.245,328.912h10.306v3.435h-6.526V338.7h5.187v3.435h-5.187v7.385h6.526v3.435H261.245Z"
                      transform="translate(-221.335 -328.569)"
                      fill="#fff"
                    />
                    <path
                      d="M285.906,352.77a7.106,7.106,0,0,1-2.508.413c-3.71,0-5.736-2.2-5.736-6.046V334.5c0-3.847,2.026-6.045,5.736-6.045s5.737,2.2,5.737,6.045v12.642a6.81,6.81,0,0,1-1.065,3.951c.275.481.722.549,1.408.549h.584v3.435h-1A2.906,2.906,0,0,1,285.906,352.77Zm-.55-5.392V334.255c0-1.718-.755-2.371-1.958-2.371s-1.958.653-1.958,2.371v13.122c0,1.717.756,2.369,1.958,2.369S285.356,349.095,285.356,347.377Z"
                      transform="translate(-225.559 -328.45)"
                      fill="#fff"
                    />
                    <path
                      d="M296.344,347.256V328.912h3.778V347.53c0,1.717.721,2.335,1.924,2.335s1.924-.618,1.924-2.335V328.912h3.641v18.344c0,3.847-1.924,6.046-5.634,6.046S296.344,351.1,296.344,347.256Z"
                      transform="translate(-230.365 -328.569)"
                      fill="#fff"
                    />
                    <path
                      d="M315.118,328.912H318.9v24.046h-3.779Z"
                      transform="translate(-235.194 -328.569)"
                      fill="#fff"
                    />
                    <path
                      d="M327.531,332.347H323.58v-3.435h11.68v3.435h-3.951v20.61h-3.778Z"
                      transform="translate(-237.371 -328.569)"
                      fill="#fff"
                    />
                    <path
                      d="M345.027,342.721l-4.569-13.809h4.019l2.577,8.828h.069l2.576-8.828h3.676l-4.569,13.809v10.237h-3.778Z"
                      transform="translate(-241.713 -328.569)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <p className="footer_cop bottom_line">
              © 2021 BID EQUITY GMBH. All rights reserved.
            </p>
            <div className="footer_box_links">
              <p className="footer_box_title">Quick Links</p>
              <div className="footer_links">
                
                <a href="about">About</a>
                <a href="portfolio">Portfolio</a>
                <a href="entrepreneurs">Entrepreneurs</a>
                <a href="advisors">M&amp;A Partners</a>
                <a href="investors">Investors</a>
                <a href="news">News</a>
                <a href="jobs">Jobs</a>
                <a href="contact">Contact</a>
                <a href="#">Quick valuation</a>
                <a href="privace-policy">Privacy Policy</a>
                <a href="terms-of-use">Imprint</a>
              </div>
            </div>
          </div>
          <div className="footer_right bottom_line">
            <div className="footer_top bottom_line">
              {!altF && (
                <>
                  <h3 className="footer_title">
                    Get a reliable valuation for your business within 48 hours
                    from us.
                  </h3>
                  <a className="btn" href="#">
                    Let’s go!
                  </a>
                </>
              )}
              <div className="footer_box footer_box_links">
                <p className="footer_box_title">Quick Links</p>
                <div className="footer_links">
                <a href="about">About</a>
                <a href="portfolio">Portfolio</a>
                <a href="entrepreneurs">Entrepreneurs</a>
                <a href="advisors">M&amp;A Partners</a>
                <a href="investors">Investors</a>
                <a href="news">News</a>
                <a href="jobs">Jobs</a>
                <a href="contact">Contact</a>
                <a href="#">Quick valuation</a>
                <a href="privace-policy">Privacy Policy</a>
                <a href="terms-of-use">Imprint</a>
                </div>
              </div>
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
                  <p>
                    BID EQUITY GMBH <br />
                    Große Johannisstraße 7 <br />
                    20457 Hamburg, Germany
                  </p>
                </div>
              </div>
              <div className="footer_box">
                <p className="footer_box_title">Get social with us</p>
                <div className="footer_soc">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.216"
                      height="14.804"
                      viewBox="0 0 18.216 14.804"
                    >
                      <path
                        d="M80.729,113.215a10.561,10.561,0,0,0,10.633-10.633c0-.162,0-.323-.011-.483a7.6,7.6,0,0,0,1.864-1.935,7.46,7.46,0,0,1-2.146.588,3.75,3.75,0,0,0,1.643-2.067,7.49,7.49,0,0,1-2.373.907A3.741,3.741,0,0,0,83.971,103a10.61,10.61,0,0,1-7.7-3.9,3.74,3.74,0,0,0,1.157,4.989,3.709,3.709,0,0,1-1.693-.468c0,.016,0,.031,0,.048a3.739,3.739,0,0,0,3,3.664,3.732,3.732,0,0,1-1.688.064,3.742,3.742,0,0,0,3.491,2.6,7.5,7.5,0,0,1-4.642,1.6,7.6,7.6,0,0,1-.891-.052,10.58,10.58,0,0,0,5.729,1.679"
                        transform="translate(-75 -98.411)"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.946"
                      height="17.946"
                      viewBox="0 0 17.946 17.946"
                    >
                      <path
                        className="a"
                        d="M17.2,0H.748A.749.749,0,0,0,0,.748V17.2a.748.748,0,0,0,.748.748H17.2a.748.748,0,0,0,.748-.748V.748A.748.748,0,0,0,17.2,0M5.324,15.292H2.659V6.728H5.324ZM3.992,5.558A1.544,1.544,0,1,1,5.535,4.014,1.543,1.543,0,0,1,3.992,5.558m11.3,9.734H12.631V11.128c0-.993-.017-2.271-1.382-2.271-1.385,0-1.6,1.083-1.6,2.2v4.236H6.994V6.728H9.545V7.9h.036A2.8,2.8,0,0,1,12.1,6.516c2.695,0,3.193,1.773,3.193,4.08Z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="svg_soc_fb"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.946"
                      height="17.946"
                      viewBox="0 0 17.946 17.946"
                    >
                      <path
                        d="M-1031.264,1h-15.526A1.21,1.21,0,0,0-1048,2.21V17.736a1.21,1.21,0,0,0,1.21,1.21h7.158v-6.28h-2.28v-2.6h2.28V8.091A3.17,3.17,0,0,1-1036.24,4.6a13.814,13.814,0,0,1,2.011.175v2.21h-1.133a1.3,1.3,0,0,0-1.464,1.4v1.685h2.491l-.4,2.6h-2.093v6.28h5.561a1.21,1.21,0,0,0,1.21-1.21V2.21A1.21,1.21,0,0,0-1031.264,1Z"
                        transform="translate(1048 -1)"
                      />
                    </svg>
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
