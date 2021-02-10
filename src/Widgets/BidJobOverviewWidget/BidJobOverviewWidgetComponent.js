import * as React from "react";
import * as Scrivito from "scrivito";
import Job from "../../Objs/Job/JobObjClass";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";


class BidJobOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTag: "" };

    this.setTag = this.setTag.bind(this);
  }

  render() {
    let jobsSearch = Scrivito.Obj.where("_objClass", "equals", "Job");
    const filterTags = this.props.widget.get("tags");
    if (filterTags.length) {
      jobsSearch = jobsSearch.and("tags", "equals", filterTags);
    } else if (this.state.currentTag) {
      jobsSearch = jobsSearch.and("tags", "equals", this.state.currentTag);
    }

    const tags = [...Job.all().facet("tags")].map((facet) => facet.name());

  
    let jobs;
    
    jobs = [...jobsSearch];
    

    if (!jobs.length) {
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
            {jobs.map((job, index) => (
              <JobItem key={job.id()} job={job} index={index} />
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

Scrivito.provideComponent("BidJobOverviewWidget", BidJobOverviewWidgetComponent);


const JobItem = Scrivito.connect(({ job }) => {
  const location = [job.get("locationLocality"), job.get("locationCountry")]
    .filter((n) => n)
    .join(", ");

  return (
    <div className="col-sm-6">
      <Scrivito.LinkTag to={job} className="box-card">
        <Scrivito.BackgroundImageTag
          tag="span"
          className="box-image"
          style={{
            background: { image: job.get("image") },
          }}
        />
        <span className="box-topic arrow-right">
          <h3 className="h3">{job.get("title")}</h3>
          <span>
            <i
              className={`fa ${location ? "fa-map-marker" : ""} fa-2x`}
              aria-hidden="true"
              title="location"
            />
            <span>{location}</span>
          </span>
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
      </Scrivito.LinkTag>
    </div>
  );
});
