import * as React from "react";
import * as Scrivito from "scrivito";

import "./BidContactFormWidget.scss";
import "file-loader?name=[name].[contenthash].[ext]!./contactForm.html";
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent("BidContactFormWidget", ({ widget }) => {
  const classNames = ["row"];

  if (widget.get("backgroundColor") === "transparent") {
    classNames.push("contact-form-widget--card-white-transparent");
  } else {
    classNames.push(
      "contact-form-widget--floating-label",
      "card-theme",
      "card",
      "contact-form-widget--card-padding"
    );
  }

  return (
    <div className={classNames.join(" ")}>
      <form className="contact-form" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="d-none">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        
        
        <label htmlFor="contactCompany">I'm the &nbsp;</label>
            <input
              className="form-control"
              id="contactCompany"
              name="contactCompany"
              placeholder="Founder"
              type="text"
        />
        
        <span> &nbsp;of a profitable Software company</span>
        
        
            <label htmlFor="contactLocation">&nbsp;headquartered in &nbsp;</label>
            <input
              className="form-control"
              id="contactLocation"
              name="contactLocation"
              placeholder="London"
              type="text"
              required
        />
      

        <label htmlFor="contactName">with annual revenues of €&nbsp;</label>
            <input
              className="form-control"
              id="contactRevenue"
              name="contactRevenue"
              placeholder="3 million"
              type="text"
              required
            />
          <span>.</span>
            <label htmlFor="contactName"> &nbsp; My name is &nbsp;</label>
            <input
              className="form-control"
              id="contactName"
              name="contactName"
              placeholder="William"
              type="text"
              required
            />
          
            <label htmlFor="contactEmail">and my email address is &nbsp;</label>
            <input
              className="form-control"
              id="contactEmail"
              name="contactEmail"
              placeholder="william@example.com"
              type="email"
              required
        />
        <span>.</span>
        
        <label htmlFor="contactTel"> &nbsp; You can also call me on &nbsp;</label>
            <input
              className="form-control"
              id="contactTel"
              name="contactTel"
              placeholder="00000 00 00 00 0"
              type="telephone"
              required
            />
          <span>.</span>
          
          {widget.get("agreementText") && (
            <div className="form-group form-check">
              <input
                className="form-check-input"
                id="agreementTextCheck"
                type="checkbox"
                name="contactAgreement"
                value={widget.get("agreementText")}
                required
              />
              <label className="form-check-label" htmlFor="agreementTextCheck">
                {widget.get("agreementText")}
              </label>
            </div>
          )}
          <button className="btn btn-primary btn-block" type="submit">
            {widget.get("buttonText") || "send message"}
          </button>
        
      </form>
    </div>
  );
});
