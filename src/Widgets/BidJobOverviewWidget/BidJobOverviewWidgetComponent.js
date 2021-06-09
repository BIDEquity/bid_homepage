import * as React from "react";
import * as Scrivito from "scrivito";
import Job from "../../Objs/Job/JobObjClass";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";
import { join, truncate } from "lodash-es";
import "./BidJobOverviewWidget.scss";

class BidJobOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { currentTag: "" };

    //this.setTag = this.setTag.bind(this);
  }

  render() {
    let jobsSearch = Scrivito.Obj.where("_objClass", "equals", "Job");
    /*const filterTags = this.props.widget.get("tags");
    if (filterTags.length) {
      jobsSearch = jobsSearch.and("tags", "equals", filterTags);
    } else if (this.state.currentTag) {
      jobsSearch = jobsSearch.and("tags", "equals", this.state.currentTag);
    }

    const tags = [...Job.all().facet("tags")].map((facet) => facet.name());*/

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
      <div className="jobs_content bg_blue">
        <div className="jobs_content_top">
            <div className="container">
                <h2 className="section_title bottom_line col_6 col_t_12">
                  Current job opportunities sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </h2>
            </div>
        </div>
        <div className="container">
            <form className="jobs_filter" action="#" method="GET">
                <div className="jobs_filter_fields">
                    <div className="jobs_filter_item">
                        <select className="select_style" data-placeholder="Location">
                            <option></option>
                            <option>Germany</option>
                            <option>Germany</option>
                            <option>Germany</option>
                            <option>Germany</option>
                            <option>Germany</option>
                            <option>Germany</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <div className="jobs_filter_item">
                        <select className="select_style" data-placeholder="Industry">
                            <option></option>
                            <option>Life Sciences</option>
                            <option>Life Sciences</option>
                            <option>Life Sciences</option>
                            <option>Life Sciences</option>
                            <option>Life Sciences</option>
                            <option>Life Sciences</option>
                            <option>Life Sciences</option>
                        </select>
                    </div>
                    <div className="jobs_filter_item">
                        <select className="select_style" data-placeholder="Department">
                            <option></option>
                            <option>Marketing</option>
                            <option>Marketing</option>
                            <option>Marketing</option>
                            <option>Marketing</option>
                            <option>Marketing</option>
                            <option>Marketing</option>
                            <option>Marketing</option>
                        </select>
                    </div>
                </div>
                <button className="jobs_filter_send">
                    <svg className="svg_search_icon">
                        svg
                    </svg>
                </button>
            </form>
      <div className="jobs_wrap">
        {jobs.map((job, index) => {
          
        return (
          <div className="job_item" key={index}>
            <p className="job_item_name">{job.get("title")}</p>
            <div className="job_item_text">
              {job.get("teaser")}
            </div>
            
            <Scrivito.LinkTag to={job} className="btn">
            Apply for this job
            </Scrivito.LinkTag>
          </div>
        )})}
      </div>
      <div className="content_info">
                <div className="content_info_inner">
                    <div className="content_info_top">
                        <div className="content_stats_box">
                            <div className="content_stats_inner">
                                <span className="content_stats_number">14k</span>
                                <p className="content_stats_text">customers across all assets</p>
                            </div>
                        </div>
                        <div className="testimonial_item">
                            <div className="testimonial_item_text">
                                <p>They’re fun to work with. Nice people. 
                                    So you tend to go the extra mile and and try to achieve things with them, rather than someone where you just do your duty.</p>
                            </div>
                            <div className="testimonial_item_bottom">
                                <p className="testimonial_item_name">Julian Brandt</p>
                                <p className="testimonial_item_position">Founder, MyNeva</p>
                            </div>
                        </div>
                    </div>
                    <div className="content_info_bottom">
                        <div className="content_info_img">
                            <img src="images/content_info_3.jpg" alt=""/>
                        </div>
                        <div className="content_info_box info_box">
                            <div className="info_box_content">
                                <h2 className="title_block bottom_line light">People related story sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut consectetur</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )</div>
    )}
}

Scrivito.provideComponent(
  "BidJobOverviewWidget",
  BidJobOverviewWidgetComponent
);

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
        <div className="w-50 text-center btn-primary">
          <a href={Scrivito.urlFor(job)}>Apply for this job</a>
        </div>
      </div>
    </Scrivito.LinkTag>
  );
});
