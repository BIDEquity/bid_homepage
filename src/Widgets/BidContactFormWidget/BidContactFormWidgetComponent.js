import * as React from "react";
import * as Scrivito from "scrivito";
import Select from "react-select";
import "file-loader?name=[name].[contenthash].[ext]!./contactForm.html";
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent("BidContactFormWidget", ({ widget }) => {
  const [visible, setVisible] = React.useState(false);
  const pos = widget.get("positions");

  const positions = pos.map((position) => ({
    value: position,
    label: position,
  }));

  const handleChange = (selectedOption) => {
    setVisible({
      visible: selectedOption.label !== "Founder", //||
      //selectedOption.label === "Managing Director",
    });
  };
  const urlParams = new URLSearchParams(window.location.search);
  const helpsection = urlParams.get("helpsection");

  return (
    <div className="content_section contact_section">
      <div className="container">
        <Scrivito.ContentTag
          content={widget}
          attribute="title"
          tag="h2"
          className="section_title bottom_line dark col_8 col_t_12"
        />
        <form
          className="contact_form"
          name="contact"
          method="post"
          action="/en/contact/complete"
        >
          <div className="contact_form_content">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="form-helpsection" value={helpsection} />
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <Scrivito.ContentTag content={widget} attribute="iAm" tag="span" />
            <div className="contact_field">
              <Select
                options={positions}
                className="contact_who select_style"
                classNamePrefix="contact-select"
                placeholder="Founder"
                onChange={handleChange}
                name="position"
              />
            </div>
            <Scrivito.ContentTag
              content={widget}
              attribute="company"
              tag="span"
            />
            <div
              className={`contact_details ${
                !visible.visible ? "hidden" : "show"
              } `}
            >
              headquartered in
              <div className="contact_field contact_field_location">
                <input name="location" type="text" required />
              </div>
              with annual revenues of <br />€
              <div className="contact_field contact_field_revenues">
                <input name="revenues" type="text" required />
              </div>
              million. My name is
              <div className="contact_field contact_field_name">
                <input name="name" type="text" required />
              </div>
              and my email address is
              <div className="contact_field contact_field_email">
                <input name="email" type="email" required />
              </div>
              . You can also call me on
              <div className="contact_field contact_field_tel">
                <input
                  className="contact_tel_code"
                  type="text"
                  required
                  name="phone"
                  maxLength="5"
                />
                <input type="text" name="tel" />
              </div>
              .
            </div>
          </div>
          <textarea
            className="contact_addition"
            placeholder="Add addition information here"
            name="addition"
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
