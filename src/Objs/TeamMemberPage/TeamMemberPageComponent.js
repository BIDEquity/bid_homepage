import * as React from "react";
import * as Scrivito from "scrivito";

import "./TeamMemberPage.scss";

Scrivito.provideComponent("TeamMemberPage", ({ page }) => (
  <Scrivito.ContentTag
    tag="div"
    className="team-member-page"
    content={page}
    attribute="body"
  />
));
