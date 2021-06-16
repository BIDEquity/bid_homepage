import * as React from "react";
import * as Scrivito from "scrivito";

import formatDate from "../../utils/formatDate";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";
import "./BidNewsOverviewWidget.scss";

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
      <div class="news_content">
		<div class="container">
    <div class="news_panel">
                <nav class="news_categories bottom_line">
                    <ul>
                        <li className="active"><a href="#">All</a></li>
                        <li><a href="#">Acquisitions</a></li>
                        <li><a href="#">Exits</a></li>
                        <li><a href="#">People</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Market News</a></li>
                        <li><a href="#">Insights</a></li>
                        <li><a href="#">Tools</a></li>
                    </ul>
                </nav>
                <div className="news_sort">
                    <select className="select_style" data-placeholder="Sort by Portfolio Company">
                        <option></option>
                        <option>EvidentIQ</option>
                        <option>EvidentIQ</option>
                        <option>EvidentIQ</option>
                        <option>EvidentIQ</option>
                        <option>EvidentIQ</option>
                        <option>EvidentIQ</option>
                        <option>EvidentIQ</option>
                    </select>
                </div>
            </div>
      <div className="posts_wrap">
        {news.map((news, index) => {
          console.log(index)
          return (
            
              <a key={index} class="post_item" href="#">
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
