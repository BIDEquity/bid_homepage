import React, { useRef, useState } from "react";
import * as Scrivito from "scrivito";
import LeverTagList from "../../Components/LeverTagList";

class LeverBlocksComponent extends React.Component {
  constructor(props) {
    super(props);
    const widget = this.props.widget;
    const items = widget.get("items");
    const tags = allTags(items);

    this.state = {
      currentTag: tags[0],
      companyBstep1: null,
    };

    this.setTag = this.setTag.bind(this);
    
  }

  setTag(tag) {
    this.setState({
      currentTag: tag,
      
    });
  }

  
  render() {
    const widget = this.props.widget;
    const items = widget.get("items");
    const tags = allTags(items);
    const lever = widget.get("lever");

    //
    return (
      <div>
        <LeverTagList
          showTags
          tags={tags}
          currentTag={this.state.currentTag}
          setTag={this.setTag}
        />

        <div className="operational_value_description">
          
          {items.map((item, index) => (
            <div className={`tab_container_${index + 1}`}>
              <TabbedContent
                key={item.id()}
                widget={item}
                currentTag={this.state.currentTag}
                
              />
              </div>
            
          ))}
        </div>
        <div className="operational_value_wrap">
          <div className={`operational_value_chart ${this.state.currentTag}`}>
            {items.map((item) => 
              item.get("lever").map((item, index) => (
                
                <div className="operational_value_column" key={index} >
                  <div className={`operational_value_box box_${item.get("intern")}`} ></div>
                  <div className="operational_value_info">
                    <div>
                      <Scrivito.ContentTag
                        content={item}
                        attribute="leverStep"
                        tag="p"
                        className="operational_value_level"
                      />
                      <Scrivito.ContentTag
                        key={item.id()}
                        content={item}
                        attribute="title"
                        tag="div"
                        className="operational_value_name"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
            
          </div>
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("LeverBlocksWidget", LeverBlocksComponent);

const TabbedContent = Scrivito.connect(({ widget, currentTag }) => {
  const company = widget.get("company");

  const title = widget.get("title");

  const classNames = ["squeezed"];

  if (currentTag && company.includes(currentTag)) {
    classNames.pop("squeezed");
    classNames.push("active");
  }

  return (
    <>
      <div className={classNames.join(" ")}>
        <div>
          {title.length > 0 && <strong>{title}</strong>}
          <Scrivito.ContentTag content={widget} attribute="text" />
        </div>
      </div>
    </>
  );
});

function allTags(items) {
  const tagsArray = items.map((item) => item.get("company"));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags;
}
