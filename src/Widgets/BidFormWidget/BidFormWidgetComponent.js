import * as React from "react";
import * as Scrivito from "scrivito";
import Checkbox from "../../Components/Checkbox";
import "file-loader?name=[name].[contenthash].[ext]!./newsForm.html";
import SubmitButton from "../../Components/SubmitButton";

class BidFormWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    const widget = props.widget;
    this.state = {
      checkedTerms: false,
      checkedPrivacy: false,
      formValueName: "",
      formValueMail: "",
      error: ""
    };

    this.handleChangeName = (e) => this.setState({ formValueName: e.target.value });
    this.handleChangeMail = (e) => this.setState({ formValueMail: e.target.value });

    this.handleSubmit = (e) => {
      if(this.state.formValueMail === "") {
        this.setState({error: widget.get("errorMail")})
        e.preventDefault();
        return;
      }
      if(this.state.formValueName === "") {
        this.setState({error: widget.get("errorName")})
        e.preventDefault();
        return;
      }
      if(!this.state.checkedTerms || !this.state.checkedPrivacy) {
        this.setState({error: widget.get("errorBoxes")})
        e.preventDefault();
        return;
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
              value={this.state.formValueMail}
              onChange={this.handleChangeMail}
            />
            
          </div>
          <div className="form_field" style={{marginTop: "12px"}}>
            <input
              className="form_email news_subscribe_field subscribe_group"
              type="text"
              name="subscribe_name"
              placeholder="Name"
              value={this.state.formValueName}
              onChange={this.handleChangeName}
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