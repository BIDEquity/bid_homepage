import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("JobApplyForm", ({ page }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const job = urlParams.get("job");
  const company = urlParams.get("company");

  return (
    <div className="content_section apply_section">
      <div className="container">
        <form className="contact_form" action="#" method="POST">
          <div className="contact_form_content">
            <Scrivito.ContentTag 
                content={page}
                attribute="name"
                tag="span"
            />
            <div className="contact_field contact_field_name">
              <input type="text" required />
            </div>
            <Scrivito.ContentTag 
                content={page}
                attribute="apply"
                tag="span"
            />
            <span className="text_pink">{job}</span>
            <Scrivito.ContentTag 
                content={page}
                attribute="at"
                tag="span"
            />
            <span className="text_pink">{company}</span><Scrivito.ContentTag 
                content={page}
                attribute="mail"
                tag="span"
            />
            <div className="contact_field contact_field_email">
              <input type="email" required />
            </div>
            <Scrivito.ContentTag 
                content={page}
                attribute="contact"
                tag="span"
            />
            <div className="contact_field contact_field_tel">
              <input type="text" required />
            </div>
            <Scrivito.ContentTag 
                content={page}
                attribute="cv"
                tag="span"
            />
            <div className="contact_file">
              <span className="contact_file_text"></span>
              <label className="contact_file_browse">
                <input className="contact_file_input" type="file" />
                <span>Browse</span>
              </label>
            </div>
          </div>
          <textarea
            className="contact_addition"
            placeholder="Add addition information here"
          ></textarea>
          <input
            className="contact_form_send btn"
            type="submit"
            value="Send in my application"
          />
        </form>
      </div>
    </div>
  );
});
