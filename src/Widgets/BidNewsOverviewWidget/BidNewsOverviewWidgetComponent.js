import * as React from "react";
import * as Scrivito from "scrivito";
import Checkbox from "../../Components/Checkbox";
import "file-loader?name=[name].[contenthash].[ext]!./newsForm.html";
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

import formatDate from "../../utils/formatDate";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import Select from "react-select";

const companies = [
  { value: "evidentic", label: "Evidentic" },
  { value: "radical-path", label: "Radical Path" },
  { value: "just-relate", label: "Just Relate" },
  { value: "microsoft", label: "Microsoft" },
];

class BidNewsOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCat: "",
      selectedCompany: null,
      checkedTerms: false,
      checkedPrivacy: false,
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
    console.log(this.state.selectedCat);
    const widget = this.props.widget;
    let newsSearch = Scrivito.Obj.where("_objClass", "equals", "NewsPost");

    let news;
    if (this.state.selectedCat !== "") {
      newsSearch = newsSearch.and("category", "equals", this.state.selectedCat);
    }

    if (this.state.selectedCompany) {
      let company = this.state.selectedCompany.label;
      newsSearch = newsSearch.and("company", "equals", company);
    }

    news = [...newsSearch];

    if (!news.length) {
      return (
        <div className="news_content">
          <div className="container">
            <div className="news_panel">
              <nav id="nav" className="news_categories bottom_line">
                <ul>
                  <li
                    className={`${
                      this.state.selectedCat === "" ? "active" : ""
                    }`}
                  >
                    <a onClick={() => this.handleChangeCat("")} href="#nav">
                      All
                    </a>
                  </li>
                  <li
                    className={`${
                      this.state.selectedCat === "Acquisitions" ? "active" : ""
                    }`}
                  >
                    <a
                      onClick={() => this.handleChangeCat("Acquisitions")}
                      href="#nav"
                    >
                      Acquisitions
                    </a>
                  </li>
                  <li
                    className={`${
                      this.state.selectedCat === "Exits" ? "active" : ""
                    }`}
                  >
                    <a
                      onClick={() => this.handleChangeCat("Exits")}
                      href="#nav"
                    >
                      Exits
                    </a>
                  </li>
                  <li
                    className={`${
                      this.state.selectedCat === "People" ? "active" : ""
                    }`}
                  >
                    <a
                      onClick={() => this.handleChangeCat("People")}
                      href="#nav"
                    >
                      People
                    </a>
                  </li>
                  <li
                    className={`${
                      this.state.selectedCat === "Events" ? "active" : ""
                    }`}
                  >
                    <a
                      onClick={() => this.handleChangeCat("Events")}
                      href="#nav"
                    >
                      Events
                    </a>
                  </li>
                  <li
                    className={`${
                      this.state.selectedCat === "Market News" ? "active" : ""
                    }`}
                  >
                    <a
                      onClick={() => this.handleChangeCat("Market News")}
                      href="#nav"
                    >
                      Market News
                    </a>
                  </li>
                  <li
                    className={`${
                      this.state.selectedCat === "Insights" ? "active" : ""
                    }`}
                  >
                    <a
                      onClick={() => this.handleChangeCat("Insights")}
                      href="#nav"
                    >
                      Insights
                    </a>
                  </li>
                  <li
                    className={`${
                      this.state.selectedCat === "Tools" ? "active" : ""
                    }`}
                  >
                    <a
                      onClick={() => this.handleChangeCat("Tools")}
                      href="#nav"
                    >
                      Tools
                    </a>
                  </li>
                </ul>
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
          </div>
          <h2 className="section_title">No results found</h2>
        </div>
      );
    }

    return (
      <div className="news_content">
        <div className="container">
          <div className="news_panel">
            <nav id="nav" className="news_categories bottom_line">
              <ul>
                <li
                  className={`${this.state.selectedCat === "" ? "active" : ""}`}
                >
                  <a onClick={() => this.handleChangeCat("")} href="#nav">
                    All
                  </a>
                </li>
                <li
                  className={`${
                    this.state.selectedCat === "Acquisitions" ? "active" : ""
                  }`}
                >
                  <a
                    onClick={() => this.handleChangeCat("Acquisitions")}
                    href="#nav"
                  >
                    Acquisitions
                  </a>
                </li>
                <li
                  className={`${
                    this.state.selectedCat === "Exits" ? "active" : ""
                  }`}
                >
                  <a onClick={() => this.handleChangeCat("Exits")} href="#nav">
                    Exits
                  </a>
                </li>
                <li
                  className={`${
                    this.state.selectedCat === "People" ? "active" : ""
                  }`}
                >
                  <a onClick={() => this.handleChangeCat("People")} href="#nav">
                    People
                  </a>
                </li>
                <li
                  className={`${
                    this.state.selectedCat === "Events" ? "active" : ""
                  }`}
                >
                  <a onClick={() => this.handleChangeCat("Events")} href="#nav">
                    Events
                  </a>
                </li>
                <li
                  className={`${
                    this.state.selectedCat === "Market News" ? "active" : ""
                  }`}
                >
                  <a
                    onClick={() => this.handleChangeCat("Market News")}
                    href="#nav"
                  >
                    Market News
                  </a>
                </li>
                <li
                  className={`${
                    this.state.selectedCat === "Insights" ? "active" : ""
                  }`}
                >
                  <a
                    onClick={() => this.handleChangeCat("Insights")}
                    href="#nav"
                  >
                    Insights
                  </a>
                </li>
                <li
                  className={`${
                    this.state.selectedCat === "Tools" ? "active" : ""
                  }`}
                >
                  <a onClick={() => this.handleChangeCat("Tools")} href="#nav">
                    Tools
                  </a>
                </li>
              </ul>
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
              if (index === 8)
                return (
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
                      name="news"
                      //method="POST"
                      //netlify-honeypot="bot-field"
                      //data-netlify="true"
                    >
                      <div className="news_subscribe_body">
                        <p class="hidden">
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
                            required
                          />
                        </div>
                        <div className="request_errors"></div>
                        <div className="news_subscribe_terms">
                          <Checkbox
                            className="subscribe_group subscribe_agree subscribe_terms"
                            value={this.state.checkedTerms}
                            required
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
                            required
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
                      <div class="news_subscribe_bottom">
                            <div class="send_loading">
                                
                                <button class="news_subscribe_send btn btn_loading">
                                    <span class="btn_loading_text">Sign me up</span>
                                </button>
                                
                            </div>
                        </div>
                    </form>
                  </div>
                );
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
          <div className="posts_navigation">
            <a className="posts_navigation_more" href="#">
              <span className="posts_navigation_text">More News</span>
              <span className="posts_navigation_arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.783"
                  height="11.437"
                  viewBox="0 0 17.783 11.437"
                  fill="none"
                  strokeWidth="2"
                >
                  <g transform="translate(-10.109 -13.281)">
                    <path
                      d="M581.294,860.911l-4.3,4.3,4.3,4.3"
                      transform="translate(-565.88 -846.216)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x2="15.783"
                      transform="translate(11.109 18.999)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
            </a>
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
