import * as Scrivito from "scrivito";

const VideoCta = Scrivito.provideWidgetClass("VideoCta", {
  attributes: {
    claim: "string",
  },
  extractTextAttributes: ["claim"],
});

export default VideoCta;
