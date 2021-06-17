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
            My name is
            <div className="contact_field contact_field_name">
              <input type="text"  required />
            </div>
            and I would like to apply for the job of{" "}
            <span className="text_pink">{job}</span> at{" "}
            <span className="text_pink">{company}</span>. My email is
            <div className="contact_field contact_field_email">
              <input type="email"  required />
            </div>
            and my contact number is
            <div className="contact_field contact_field_tel">
              <input type="text"  required />
            </div>
            . Here’s my CV
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
