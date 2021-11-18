import * as React from "react";
import * as Scrivito from "scrivito";
import Select from "react-select";
import "file-loader?name=[name].[contenthash].[ext]!./contactForm.html";
import SubmitButton from "../../Components/SubmitButton";
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent("BidContactFormWidget", ({ widget }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState("");
  const pos = widget.get("positions");

  const positions = pos.map((position) => ({
    value: position,
    label: position,
  }));

  const handleChange = (selectedOption) => {
    setVisible({
      visible: selectedOption.label !== "Founder",
    });
    setPosition({
      position: selectedOption.label,
    });
  };
  const urlParams = new URLSearchParams(window.location.search);
  const helpsection = urlParams.get("helpsection");
  console.log(position.position)
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
          netlify-honeypot="bot-field"
          data-netlify="true"
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
                placeholder={<Scrivito.ContentTag
                  content={widget}
                  attribute="founder"
                  tag="span"
                />}
                onChange={handleChange}
                name="position"
              />
            </div>
            
            <div
              className={`contact_details ${
                !visible.visible ? "hidden" : "show"
              } `}
            >
              {position.position === "Berater" || position.position === "Gründer/Eigentümer" 
              || position.position === "the Founder/Owner" || position.position === "the Management Advisor"
              ?
              <>
              <Scrivito.ContentTag
              content={widget}
              attribute="company"
              tag="span"
            />
              <Scrivito.ContentTag
              content={widget}
              attribute="headquarter"
              tag="span"
            />
            
              <div className="contact_field contact_field_location">
                <input name="location" type="text" required />
              </div>
              </>
              : null }
              <Scrivito.ContentTag
              content={widget}
              attribute="name"
              tag="span"
            />
              <div className="contact_field contact_field_name">
                <input name="name" type="text" required />
              </div>

              <Scrivito.ContentTag
              content={widget}
              attribute="mail"
              tag="span"
            />
              <div className="contact_field contact_field_email">
                <input name="mail" type="text" required />
              </div>
              
              <Scrivito.ContentTag
              content={widget}
              attribute="telNumber"
              tag="span"
            /> 

              <div className="contact_field contact_field_tel">
              
                <input
                  className="contact_tel"
                  type="text"
                  required
                  name="phone"
                  
                />
               
              </div><Scrivito.ContentTag
              content={widget}
              attribute="tel"
              tag="span"
            /> 
            </div>
          </div>
          <textarea
            className="contact_addition"
            placeholder={widget.get("addition")}
            name="addition"
          ></textarea>
          <Scrivito.ContentTag
              content={widget}
              attribute="legal"
              tag="div"
              class="legal"
            /> 
          <SubmitButton className="contact_form_send btn" label={widget.get('submit')}/>
          
        </form>
      </div>
    </div>
  );
});
