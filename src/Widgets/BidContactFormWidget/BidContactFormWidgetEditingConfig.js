import * as Scrivito from "scrivito";
import contactFormWidgetIcon from "../../assets/images/contact_form_widget.svg";

Scrivito.provideEditingConfig("BidContactFormWidget", {
  title: "Bid Contact Form",
  thumbnail: contactFormWidgetIcon,
  
  properties:['positions', 'addition']
});
