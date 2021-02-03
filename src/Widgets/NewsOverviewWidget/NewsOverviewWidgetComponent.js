import * as React from "react";
import * as Scrivito from "scrivito";
import NewsPost from "../../Objs/NewsPost/NewsPostObjClass";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";


class NewsOverviewWidgetComponent extends React.Component {
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
          There are no event pages. Create one using the page menu.
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
        <section className="mid-blue">
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

Scrivito.provideComponent("NewsOverviewWidget", NewsOverviewWidgetComponent);


const NewsItem = Scrivito.connect(({ news }) => {


  return (
    <div className="col-sm-6">
      <Scrivito.LinkTag to={news} className="box-card">
        <Scrivito.BackgroundImageTag
          tag="span"
          className="box-image"
          style={{
            background: { image: news.get("image") },
          }}
        />
        <span className="box-topic arrow-right">
          <h3 className="h3">{news.get("title")}</h3>
          <span>
            <i
              className={`fa ${location ? "fa-map-marker" : ""} fa-2x`}
              aria-hidden="true"
              title="location"
            />
            <span>location</span>
          </span>
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
      </Scrivito.LinkTag>
    </div>
  );
});
