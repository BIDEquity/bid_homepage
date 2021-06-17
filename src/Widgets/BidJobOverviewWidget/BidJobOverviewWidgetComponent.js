import * as React from "react";
import * as Scrivito from "scrivito";
import Job from "../../Objs/Job/JobObjClass";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";
import { join, truncate } from "lodash-es";
import Select from "react-select";



const locations = [
  { value: "germany", label: "Germany" },
  { value: "england", label: "England" },
  { value: "spain", label: "Spain" },
  { value: "usa", label: "USA" },
];

const industries = [
  { value: "life sciences", label: "Life Sciences" },
  { value: "medical services", label: "Medical Services" },
  { value: "software development", label: "Software Development" },
  { value: "automobile", label: "Automobile" },
];

const departments = [
  { value: "marketing", label: "Marketing" },
  { value: "research", label: "Research" },
  { value: "frontend", label: "Frontend" },
  { value: "public relations", label: "Public Relations" },
];

class BidJobOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLoc: null,
      selectedInd: null,
      selectedDep: null,
      searchJobs: false,
      queryLoc: "",
      queryInd: "",
      queryDep: "",
    };
    

    //this.handleChangeLoc = this.handleChangeLoc.bind(this)

    this.handleChangeLoc = (selectedOption) => {
      
      this.setState ({selectedLoc: selectedOption });
      
    };

    this.handleChangeInd = (selectedOption) => {
      this.setState ({selectedInd: selectedOption});
      
    };

    this.handleChangeDep = (selectedOption) => {
      this.setState ({selectedDep: selectedOption});
      
    };

    this.handleClick = (e) => {
      //e.preventDefault()
      
      if(this.state.selectedLoc) this.setState ({queryLoc: this.state.selectedLoc.label})
      if(this.state.selectedInd) this.setState ({queryInd: this.state.selectedInd.label})
      if(this.state.selectedDep) this.setState ({queryDep: this.state.selectedDep.label})
      this.setState ({searchJobs: true})
    }

    
  }

  render() {
    const widget = this.props.widget;
    const infolink1 = this.props.widget.get("infoLink1");
    let infolinktext1 = infolink1 && infolink1.title();
    let jobsSearch = Scrivito.Obj.where("_objClass", "equals", "Job")
    
    if(this.state.searchJobs) {
      
    if (this.state.queryLoc) jobsSearch = jobsSearch.and("location", "equals", this.state.queryLoc);
    if (this.state.queryInd) jobsSearch = jobsSearch.and("industry", "equals", this.state.queryInd);
    if (this.state.queryDep) jobsSearch = jobsSearch.and("department", "equals", this.state.queryDep);
    }
    
    
    
    let jobs;

    jobs = [...jobsSearch];
    //this.setState ({searchJobs: false})
    
    

    return (
      <div className="jobs_content bg_blue" id="search">
        <div className="jobs_content_top" >
          <div className="container">
            <h2 className="section_title bottom_line col_6 col_t_12">
              Current job opportunities sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="jobs_filter" >
            <div className="jobs_filter_fields">
              <div className="jobs_filter_item">
              <Select
                  value={this.state.selectedLoc}
                  onChange={this.handleChangeLoc}
                  options={locations}
                  placeholder="Location"
                  className="job_select"
                  classNamePrefix="react-select"
                  
               />
              </div>
              <div className="jobs_filter_item">
                <Select
                  value={this.state.selectedInd}
                  onChange={this.handleChangeInd}
                  options={industries}
                  placeholder="Industry"
                  className="job_select"
                  classNamePrefix="react-select"
                />
              </div>
              <div className="jobs_filter_item">
              <Select
                  value={this.state.selectedDep}
                  onChange={this.handleChangeDep}
                  options={departments}
                  placeholder="Department"
                  className="job_select"
                  classNamePrefix="react-select"
                />
              </div>
            </div>
            <a href="#search" className="jobs_filter_send"  onClick={e => this.handleClick(e)}>
              <svg className="svg_search_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.208"
                  height="17.209"
                  viewBox="0 0 17.208 17.209"
                  fill="none"
                  strokeWidth="2"
                >
                  <path
                    d="M6185,10228l5,5Zm-10.5-4.5a6,6,0,1,1,6,6A6,6,0,0,1,6174.5,10223.5Z"
                    transform="translate(-6173.499 -10216.499)"
                  />
                </svg>
              </svg>
            </a>
          </div>
          <div className="jobs_wrap">
    
            {jobs.map((job, index) => {
              
              return (
                <div className="job_item" key={index}>
                  <p className="job_item_name">{job.get("title")}</p>
                  <div className="job_item_text">{job.get("teaser")}</div>
                  
                  <Scrivito.LinkTag to={job} className="btn" >
                    Apply for this job
                  </Scrivito.LinkTag>
                </div>
              );
            })
          }
            
          </div>
          <div className="content_info">
            <div className="content_info_inner">
              <div className="content_info_top">
                <div className="content_stats_box">
                  <div className="content_stats_inner">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="statsNumber"
                      tag="span"
                      className="content_stats_number"
                    />
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="statsText"
                      tag="p"
                      className="content_stats_text"
                    />
                  </div>
                </div>
                <div className="testimonial_item">
                  <div className="testimonial_item_text">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="quote"
                      tag="p"
                    />
                  </div>
                  <div className="testimonial_item_bottom">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="name"
                      tag="p"
                      className="testimonial_item_name"
                    />

                    <Scrivito.ContentTag
                      content={widget}
                      attribute="position"
                      tag="p"
                      className="testimonial_item_position"
                    />
                  </div>
                </div>
              </div>
              <div className="content_info_bottom">
                <div className="content_info_img shadow">
                  <Scrivito.ImageTag content={widget} attribute="info1" />
                </div>
                <div className="content_info_box info_box">
                  <div className="info_box_content">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="infoTitle1"
                      tag="h2"
                      className="title_block bottom_line light"
                    />

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      </div>
    );
  }
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
