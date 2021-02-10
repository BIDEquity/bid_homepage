import * as Scrivito from "scrivito";

const BidVideoCta = Scrivito.provideWidgetClass("BidVideoCta", {
  attributes: {
    claim: "string",
  },
  extractTextAttributes: ["claim"],
});

export default BidVideoCta;
