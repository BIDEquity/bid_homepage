import * as React from "react";
import * as Scrivito from "scrivito";
import Checkbox from "../../Components/Checkbox";
import "file-loader?name=[name].[contenthash].[ext]!./newsletterForm.html";
import SubmitButton from "../../Components/SubmitButton";
import NewsTagList from "../../Components/NewsTagList";
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

import formatDate from "../../utils/formatDate";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import Select from "react-select";

/*const companies = [
  { value: "evidentic", label: "Evidentic" },
  { value: "just-relate", label: "Just Relate" },
  { value: "kobold", label: "Kobold" },
  { value: "midoco", label: "Midoco" },
  { value: "eSight-energy", label: "eSight Energy" },
  { value: "myneva", label: "myneva" },
  { value: "bid-equity", label: "BID Equity" },
];*/

class BidNewsOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCat: "",
      selectedCompany: null,
      checkedTerms: false,
      checkedPrivacy: false,
      formValue: "",
      error: "",
      companies: null,
    };

    this.handleChange = (e) => this.setState({ formValue: e.target.value });
    this.handleSubmit = (e) => {
      if (this.state.formValue === "") {
        this.setState({ error: "Please, enter an E-Mail address" });
        e.preventDefault();
      }
      if (!this.state.checkedTerms || !this.state.checkedPrivacy) {
        this.setState({
          error:
            "Please confirm the T&C’s and Privacy policy have been read and understood.",
        });
        e.preventDefault();
      }
    };

    this.handleChangeCat = (selectedOption) => {
      this.setState({ selectedCat: selectedOption });
    };

    this.handleChangeCompany = (selectedOption) => {
      this.setState({ selectedCompany: selectedOption });
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
    let newsSearch = Scrivito.Obj.where("_objClass", "equals", "NewsPost");
    let initSearch = Scrivito.Obj.where("_objClass", "equals", "NewsPost");
    let news, tags, companies,companiesTmp,searchTmp;
    
    companies = [];
    companiesTmp = [];
    
    if (this.state.selectedCat !== "") {
      newsSearch = newsSearch.and("category", "equals", this.state.selectedCat);
    }

    if (this.state.selectedCompany) {
      let company = this.state.selectedCompany.label;
      if(company !== "All")
      newsSearch = newsSearch.and("company", "equals", company);
    }
    
    tags = allTags([...initSearch]);
    
    newsSearch = newsSearch.order("date", "desc")
    news = [...newsSearch];
    searchTmp = [...initSearch]

    
    searchTmp.map((item) => {
      companiesTmp.push(item.get("company"))
    })

    companiesTmp = [... new Set(companiesTmp)]
    companiesTmp.map((item) => {
      companies.push({value:item,label:item})
    })

    companies.unshift({value:"All", label:"All"})
    
    
    return (
      <div className="news_content">
        <div className="container">
          <div className="news_panel">
            <nav id="nav" className="news_categories bottom_line">
              <NewsTagList
                tags={tags}
                showTags
                setTag={this.handleChangeCat}
                currentTag={this.state.selectedCat}
              />
            </nav>
            <div className="news_sort">
              <Select
                value={this.state.selectedCompany}
                onChange={this.handleChangeCompany}
                options={companies}
                placeholder="Sort by Portfolio Company"
                className="select_style"
                classNamePrefix="companies-select"
              />
            </div>
          </div>
          <div className="posts_wrap">
            {news.map((news, index) => {
              if (index === 8) {
                return (
                  <>
                  <div key={index} className="news_subscribe">
                    <div className="news_subscribe_description">
                      <Scrivito.ContentTag
                        content={widget}
                        attribute="termsTitle"
                        tag="h3"
                        className="news_subscribe_title"
                      />

                      <div className="news_subscribe_text">
                        <Scrivito.ContentTag
                          content={widget}
                          attribute="teaser"
                          tag="p"
                        />
                      </div>
                    </div>
                    <form
                      className="news_subscribe_form"
                      name="newsletter"
                      method="post"
                      action="/en/contact/complete"
                      netlify-honeypot="bot-field"
                      data-netlify="true"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="news_subscribe_body">
                      <input type="hidden" name="form-name" value="newsletter" />
                        <p className="hidden">
                          <label>
                            Don’t fill this out if you’re human:{" "}
                            <input name="bot-field" />
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
                  <Scrivito.LinkTag key={index} className="post_item" to={news}>
                  <div className="post_item_img">
                    <Scrivito.ImageTag
                      content={news}
                      attribute="newsImage"
                      alt=""
                    />
                  </div>
                  <div className="post_item_info">
                    <p className="post_item_date bottom_line">
                      
                      {formatDate(news.get("date"), "dd mmm yyyy")}
                    </p>
                    <div className="post_item_text">
                      <p>{news.get("teaser")}</p>
                    </div>
                  </div>
                </Scrivito.LinkTag>
                </>
                )};
              return (
                <Scrivito.LinkTag key={index} className="post_item" to={news}>
                  <div className="post_item_img">
                    <Scrivito.ImageTag
                      content={news}
                      attribute="newsImage"
                      alt=""
                    />
                  </div>
                  <div className="post_item_info">
                    <p className="post_item_date bottom_line">
                      
                      {formatDate(news.get("date"), "dd mmm yyyy")}
                    </p>
                    <div className="post_item_text">
                      <p>{news.get("teaser")}</p>
                    </div>
                  </div>
                </Scrivito.LinkTag>
              );
            })}
          </div>
          
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent(
  "BidNewsOverviewWidget",
  BidNewsOverviewWidgetComponent
);

function allTags(items) {
  
  const tagsArray = items.map((item) => item.get("category"));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags;
}

