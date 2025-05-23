import * as React from "react";
import * as Scrivito from "scrivito";
import "file-loader?name=[name].[contenthash].[ext]!./jobForm.html";
import SubmitButton from "../../Components/SubmitButton"
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent("JobApplyForm", ({ page }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const job = urlParams.get("job");
  const company = urlParams.get("company");

  return (
    <div className="content_section apply_section">
      <div className="container">
        <form
          className="job"
          name="job"
          method="post"
          action="/en/jobs/complete"
        >
          <input type="hidden" name="form-name" value="job" />
          <p class="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div className="contact_form_content">
            <Scrivito.ContentTag content={page} attribute="name" tag="span" />
            <div className="contact_field contact_field_name">
              <input type="text" name="name" required />
            </div>
            <Scrivito.ContentTag content={page} attribute="apply" tag="span" />
            <span className="text_pink">{job}</span>
            <input type="hidden" name="job-wanted" value={job} />
            <Scrivito.ContentTag content={page} attribute="at" tag="span" />
            <span className="text_pink">{company}</span>
            <input type="hidden" name="company" value={company} />
            <Scrivito.ContentTag content={page} attribute="mail" tag="span" />
            <div className="contact_field contact_field_email">
              <input type="email" name="email" required />
            </div>
            <Scrivito.ContentTag
              content={page}
              attribute="contact"
              tag="span"
            />
            <div className="contact_field contact_field_tel">
              <input type="text" name="phone" required />
            </div>
            <Scrivito.ContentTag content={page} attribute="cv" tag="span" />
            <div className="contact_file">
              <span className="contact_file_text"></span>
              <label className="contact_file_browse">
                <input className="contact_file_input" type="file" name="cv" />
                <span>Browse</span>
              </label>
            </div>
          </div>
          <textarea
            className="contact_addition"
            placeholder="Add addition information here"
          ></textarea>
          <SubmitButton label="Send in my application" className="contact_form_send btn" />
        </form>
      </div>
    </div>
  );
});
