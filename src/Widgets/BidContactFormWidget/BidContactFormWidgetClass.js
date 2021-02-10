import * as Scrivito from "scrivito";

const BidContactFormWidget = Scrivito.provideWidgetClass("BidContactFormWidget", {
  attributes: {
    agreementText: "string",
    buttonText: "string",
    backgroundColor: ["enum", { values: ["white", "transparent"] }],
  },
});

export default BidContactFormWidget;
