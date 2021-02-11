import * as React from "react";
import * as Scrivito from "scrivito";
import NewsPost from "../../Objs/NewsPost/NewsPostObjClass";
import { truncate } from "lodash-es";
import formatDate from "../../utils/formatDate";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";
import "./BidNewsOverviewWidget.scss";


class BidNewsOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTag: "" };

    this.setTag = this.setTag.bind(this);
  }

  render() {
    let newsSearch = Scrivito.Obj.where("_objClass", "equals", "NewsPost");
    const filterTags = this.props.widget.get("tags");
    if (filterTags.length) {
      newsSearch = newsSearch.and("tags", "equals", filterTags);
    } else if (this.state.currentTag) {
      newsSearch = newsSearch.and("tags", "equals", this.state.currentTag);
    }

    const tags = [...NewsPost.all().facet("tags")].map((facet) => facet.name());

  
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
      <div>
        <TagList
          showTags={
            this.props.widget.get("showTags") === "yes"
          }
          currentTag={this.state.currentTag}
          setTag={this.setTag}
          tags={tags}
        />
        <section>
          <div className="row">
            {news.map((news, index) => (
              <NewsItem key={news.id()} news={news} index={index} />
            ))}
          </div>
        </section>
      </div>
    );
  }

  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }
}

Scrivito.provideComponent("BidNewsOverviewWidget", BidNewsOverviewWidgetComponent);


const NewsItem = Scrivito.connect(({ news }) => {


  return (
    <div className="col-sm-8">
      <Scrivito.LinkTag to={news}>
        <p className="news-date">
      
          <span className="text-uppercase text-right">{formatDate(news.get("datePosted"), "mmm")}</span>
          <span className="text-uppercase text-right">{formatDate(news.get("datePosted"), "dd")}</span>
          <span className="text-uppercase text-right">{formatDate(news.get("datePosted"), "yyyy")}</span>
        </p>
          
          <p className="news-teaser">
          {truncate(Scrivito.extractText(news, { length: 330 }), {
            length: 300,
            separator: /,? +/,
          })}
        </p>
      </Scrivito.LinkTag>
    </div>
  );
});
