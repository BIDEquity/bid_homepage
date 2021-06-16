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
  }

  render() {
    const widget = this.props.widget;
    let newsSearch = Scrivito.Obj.where("_objClass", "equals", "NewsPost");

    let news;

    news = [...newsSearch];

    if (!news.length) {
      return (
        <InPlaceEditingPlaceholder center>
          There are no new pages. Create one using the page menu.
        </InPlaceEditingPlaceholder>
      );
    }

    return (
      <div className="news_content">
        <div className="container">
          <div className="news_panel">
            <nav className="news_categories bottom_line">
              <ul>
                <li className="active">
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">Acquisitions</a>
                </li>
                <li>
                  <a href="#">Exits</a>
                </li>
                <li>
                  <a href="#">People</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Market News</a>
                </li>
                <li>
                  <a href="#">Insights</a>
                </li>
                <li>
                  <a href="#">Tools</a>
                </li>
              </ul>
            </nav>
            <div className="news_sort">
              
              <Select
                  //value={this.state.selectedLoc}
                  //onChange={this.handleChangeLoc}
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
                  <div className="news_subscribe">
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
                <a key={index} className="post_item" href="#">
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
                </a>
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
