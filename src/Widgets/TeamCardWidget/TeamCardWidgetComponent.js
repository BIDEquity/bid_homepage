import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("TeamCardWidget", ({ widget }) => (
  <Scrivito.WidgetTag className="team_wrap" tag="div">
    <div className="team_item">
      <Scrivito.ImageTag
        content={widget}
        attribute="image"
        className="post_item_img"
      />
      <div className="team_info">
        <div className="team_info_left">
          <Scrivito.ContentTag
            content={widget}
            attribute="name"
            className="team_name"
            tag="p"
          />

          <Scrivito.ContentTag
            content={widget}
            className="team_position"
            attribute="position"
            tag="p"
          />
        </div>

        <div className="team_info_right">
          <a className="team_link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="17.284" height="10.73" viewBox="0 0 17.284 10.73" fill="none" strokeWidth="1.5"><g transform="translate(-570.625 -853.857)"><path d="M576.989,860.911l4.3,4.3-4.3,4.3" transform="translate(5.865 -5.993)" strokeLinecap="round" strokeLinejoin="round" /><line x1="15.783" transform="translate(571.375 859.222)" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
          </a>
        </div>
      </div>
    </div>
  </Scrivito.WidgetTag>
));
