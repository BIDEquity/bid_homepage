import * as Scrivito from "scrivito";
import ButtonWidget from "../ButtonWidget/ButtonWidgetClass";

Scrivito.provideEditingConfig("BidTwoColumnsTextWidget", {
  title: "Bid Two Columns Text",
  initialContent: {
    col1: "BID was founded in 2016 by entrepreneurs and consultants from the software environment. Today we are a team of 14 experts and manage more than 170 million capital.",
    col2: "Our current portfolio consists of ve groups of software companies, each with a specic topic: social market, clinical research, travel technology, energy data management and sales digitization.",
    content: [
      new ButtonWidget({
        style: "btn-primary",
        alignment: "center" 
      })
    ]

  },
});
