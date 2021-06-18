import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidContactFormWidget.scss";
import "file-loader?name=[name].[contenthash].[ext]!./contactForm.html";
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent("BidContactFormWidget", ({ widget }) => {
  return (
    <div className="content_section contact_section">
      <div className="container">
        <Scrivito.ContentTag
          content={widget}
          attribute="title"
          tag="h2"
          className="section_title bottom_line dark col_8 col_t_12"
        />
        <form className="contact_form" action="#" method="POST">
          <div className="contact_form_content">
            <Scrivito.ContentTag content={widget} attribute="iAm" tag="span" />
            <div className="contact_field">
              <select className="contact_who select_style">
                <option>Founder</option>
                <option>Owner</option>
                <option>CEO</option>
                <option>Managing Partner</option>
                <option>Managing Director</option>
                <option v>Technical Director</option>
              </select>
            </div>
            <Scrivito.ContentTag content={widget} attribute="company" tag="span" />
            <div className="contact_details">
              headquartered in
              <div className="contact_field contact_field_location">
                <input type="text" value="" required />
              </div>
              with annual revenues of <br />€
              <div className="contact_field contact_field_revenues">
                <input type="text" value="" required />
              </div>
              million. My name is
              <div className="contact_field contact_field_name">
                <input type="text" value="" required />
              </div>
              and my email address is
              <div className="contact_field contact_field_email">
                <input type="email" value="" required />
              </div>
              . You can also call me on
              <div className="contact_field contact_field_tel">
                <input
                  className="contact_tel_code"
                  maxlength="4"
                  type="text"
                  value=""
                  required
                />
                <input type="text" value="" required />
              </div>
              .
            </div>
          </div>
          <textarea
            className="contact_addition"
            placeholder="Add addition information here"
          ></textarea>
          <input
            className="contact_form_send btn"
            type="submit"
            value="Send my enquiry"
          />
        </form>
      </div>
    </div>
  );
});
