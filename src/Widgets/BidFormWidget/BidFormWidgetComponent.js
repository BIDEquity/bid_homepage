import * as React from "react";
import * as Scrivito from "scrivito";
import Checkbox from "../../Components/Checkbox";
import "file-loader?name=[name].[contenthash].[ext]!./newsForm.html";
import SubmitButton from "../../Components/SubmitButton";

class BidFormWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedTerms: false,
      checkedPrivacy: false,
      formValue: "",
      error: ""
    };

    this.handleChange = (e) => this.setState({ formValue: e.target.value });
    this.handleSubmit = (e) => {
      if(this.state.formValue === "") {
        this.setState({error: "Please, enter an E-Mail address and your name"})
        e.preventDefault();
      }
      if(!this.state.checkedTerms || !this.state.checkedPrivacy) {
        this.setState({error: "Please confirm the T&C’s and Privacy policy have been read and understood."})
        e.preventDefault();
      }
      
     
    };

    

    this.handleChangeTerms = () => {
      this.setState({ checkedTerms: !this.state.checkedTerms });
    };

    this.handleChangePrivacy = () => {
      this.setState({ checkedPrivacy: !this.state.checkedPrivacy });
    };

  }

  render() {
    const widget = this.props.widget;

  return (
    <div className="news_subscribe">
      
      <div className="news_subscribe_description">
        <Scrivito.ContentTag
          content={widget}
          attribute="termsTitle"
          tag="h3"
          className="news_subscribe_title"
        />
        <div className="news_subscribe_text">
          <Scrivito.ContentTag content={widget} attribute="teaser" tag="p" />
        </div>
      </div>
      <form
        className="news_subscribe_form"
        name="news"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={this.handleSubmit}
      >
        <div className="news_subscribe_body">
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div className="form_field">
            <input
              className="form_email news_subscribe_field subscribe_group"
              type="email"
              name="subscribe_email"
              placeholder="Email"
              value={this.state.formValue}
              onChange={this.handleChange}
            />
            
          </div>
          <div className="form_field" style={{marginTop: "12px"}}>
            <input
              className="form_email news_subscribe_field subscribe_group"
              type="text"
              name="subscribe_name"
              placeholder="Name"
              value={this.state.formValue}
              onChange={this.handleChange}
            />
            
          </div>
          <div className="request_errors">
            <span className="error">{this.state.error}</span>
          </div>
          <div className="news_subscribe_terms">
            <Checkbox
              className="subscribe_group subscribe_agree subscribe_terms"
              value={this.state.checkedTerms}
              onChange={this.handleChangeTerms}
              name="subscribe_terms"
            />

            <Scrivito.ContentTag
              content={widget}
              attribute="terms"
              tag="span"
              className="subscribe_checkbox_text"
            />

            <Checkbox
              className="subscribe_group subscribe_agree subscribe_privacy"
              onChange={this.handleChangePrivacy}
              value={this.state.checkedPrivacy}
              name="subscribe_privacy"
            />

            <Scrivito.ContentTag
              content={widget}
              attribute="privacy"
              tag="span"
              className="subscribe_checkbox_text"
            />
          </div>
        </div>
        <div className="news_subscribe_bottom">
          <div className="send_loading">
            <SubmitButton label={widget.get("signUp")} />
          </div>
        </div>
      </form>
    </div>
    
  );
}};

Scrivito.provideComponent(
  "BidFormWidget",
  BidFormWidgetComponent
);