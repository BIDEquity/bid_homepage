import * as React from "react";
import * as Scrivito from "scrivito";
import Job from "../../Objs/Job/JobObjClass";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";
import { truncate } from "lodash-es";
import "./BidJobOverviewWidget.scss";


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
          There are no job pages. Create one using the page menu.
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
        <section className="no-padding">
          <div className="job-cards">
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
  /*const location = [job.get("locationLocality"), job.get("locationCountry")]
    .filter((n) => n)
    .join(", ");*/

  return (
    
      <Scrivito.LinkTag to={job} className="w-40 ">
        <div className="bid-job-overview align-items-stretch">
        <h2 className="h2">{job.get("title")}</h2>
        
        <p>
          {truncate(Scrivito.extractText(job, { length: 230 }), {
            length: 200,
            separator: /,? +/,
          })}
          
          </p>
          <div className="w-50 text-center btn-primary"><a href={ Scrivito.urlFor(job)}>Apply for this job</a></div>
       </div>
          
      </Scrivito.LinkTag>

  );
});


