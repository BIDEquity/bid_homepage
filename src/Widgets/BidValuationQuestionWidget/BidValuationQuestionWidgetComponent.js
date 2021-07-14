import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

import "./BidValuationQuestionWidget.scss";

Scrivito.provideComponent("BidValuationQuestionWidget", ({ widget }) => {
  let question = widget.get("question");
  if (!question) {
    question = (
      <InPlaceEditingPlaceholder>
        Provide the button text in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }


  return (
    { question }
  )
});
