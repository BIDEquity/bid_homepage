import * as React from "react";
import * as Scrivito from "scrivito";

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
    };

    this.handleChangeCat = (selectedOption) => {
      this.setState({ selectedCat: selectedOption });
    };

    this.handleChangeCompany = (selectedOption) => {
      this.setState({ selectedCompany: selectedOption });
    };
  }

  render() {
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
                  <li className="active">
                    <a onClick={() => this.handleChangeCat("")} href="#nav">
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.handleChangeCat("Acquisitions")}
                      href="#nav"
                    >
                      Acquisitions
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.handleChangeCat("Exits")}
                      href="#nav"
                    >
                      Exits
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.handleChangeCat("People")}
                      href="#nav"
                    >
                      People
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.handleChangeCat("Events")}
                      href="#nav"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.handleChangeCat("Market News")}
                      href="#nav"
                    >
                      Market News
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.handleChangeCat("Insights")}
                      href="#nav"
                    >
                      Insights
                    </a>
                  </li>
                  <li>
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
                <li className="active">
                  <a onClick={() => this.handleChangeCat("")} href="#nav">
                    All
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => this.handleChangeCat("Acquisitions")}
                    href="#nav"
                  >
                    Acquisitions
                  </a>
                </li>
                <li>
                  <a onClick={() => this.handleChangeCat("Exits")} href="#nav">
                    Exits
                  </a>
                </li>
                <li>
                  <a onClick={() => this.handleChangeCat("People")} href="#nav">
                    People
                  </a>
                </li>
                <li>
                  <a onClick={() => this.handleChangeCat("Events")} href="#nav">
                    Events
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => this.handleChangeCat("Market News")}
                    href="#nav"
                  >
                    Market News
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => this.handleChangeCat("Insights")}
                    href="#nav"
                  >
                    Insights
                  </a>
                </li>
                <li>
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
                      <h3 className="news_subscribe_title">
                        Stay up to date with BID Equity
                      </h3>
                      <div className="news_subscribe_text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    <form
                      className="news_subscribe_form"
                      action="#"
                      method="POST"
                    >
                      <div className="news_subscribe_body">
                        <div className="form_field">
                          <input
                            className="form_email news_subscribe_field subscribe_group"
                            type="email"
                            name="subscribe_email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="request_errors"></div>
                        <div className="news_subscribe_terms">
                          <label className="subscribe_checkbox">
                            <input
                              className="subscribe_group subscribe_agree subscribe_terms"
                              type="checkbox"
                              name="subscribe_terms"
                            />
                            <span className="subscribe_checkbox_text">
                              <a href="#">Terms and conditions</a> lorem ipsum
                              dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua
                            </span>
                          </label>
                          <label className="subscribe_checkbox">
                            <input
                              className="subscribe_group subscribe_agree subscribe_privacy"
                              type="checkbox"
                              name="subscribe_privacy"
                            />
                            <span className="subscribe_checkbox_text">
                              <a href="#">Privacy Policy</a> lorem ipsum dolor
                              sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore
                              magna aliqua
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="news_subscribe_bottom">
                        <input
                          className="news_subscribe_send btn"
                          type="submit"
                          value="Sign me up"
                        />
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
