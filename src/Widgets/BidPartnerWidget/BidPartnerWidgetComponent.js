import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidPartnerWidget", ({ widget }) => {
  const link = widget.get("bottomLink");
  let linktext = link && link.title();
  return (
    <div className="partners_content">
      <div className="container">
        <Scrivito.ContentTag
          content={widget}
          tag="h2"
          attribute="headline"
          className="partners_title section_title bottom_line col_5 col_t_12"
        />
        <div className="partners_posts">
          <div className="partners_post_item">
            <div className="partners_post_logo">
              <img src="images/partner_logo_1.png" width="284" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Docker</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
          <div className="partners_post_item">
            <div className="partners_post_img">
              <img src="images/partner_post.jpg" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Partner Company Name</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
          <div className="partners_post_item">
            <div className="partners_post_logo">
              <img src="images/partner_logo_2.png" width="192" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Jenkins</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
          <div className="partners_post_item">
            <div className="partners_post_img">
              <img src="images/partner_post.jpg" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Partner Company Name</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
          <div className="partners_post_item">
            <div className="partners_post_logo">
              <img src="images/partner_logo_3.png" width="208" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Microsoft</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
          <div className="partners_post_item">
            <div className="partners_post_img">
              <img src="images/partner_post.jpg" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Partner Company Name</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
          <div className="partners_post_item">
            <div className="partners_post_img">
              <img src="images/partner_post.jpg" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Partner Company Name</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
          <div className="partners_post_item">
            <div className="partners_post_img">
              <img src="images/partner_post.jpg" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Partner Company Name</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
          <div className="partners_post_item">
            <div className="partners_post_img">
              <img src="images/partner_post.jpg" alt="" />
            </div>
            <div className="partners_post_info">
              <div className="partners_post_row">
                <div className="partners_post_left">
                  <p className="partners_post_name">Partner Company Name</p>
                  <p className="partners_post_position">
                    Technology Partnership
                  </p>
                </div>
                <div className="partners_post_right">
                  <a className="arrow_btn" href="#">
                    svg
                  </a>
                </div>
              </div>
              <div className="partners_post_text block_text light">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nost.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="partners_bottom row">
          <div className="col_5 col_t_12">
            <Scrivito.ContentTag
              content={widget}
              tag="h2"
              attribute="bottomHeadline"
              className="section_title"
            />
            <div className="block_text">
              <Scrivito.ContentTag
                content={widget}
                tag="p"
                attribute="bottomText"
              />
            </div>
            
            <Scrivito.LinkTag to={link} className="btn">
              {linktext}
            </Scrivito.LinkTag>
          </div>
        </div>
      </div>
    </div>
  );
});
