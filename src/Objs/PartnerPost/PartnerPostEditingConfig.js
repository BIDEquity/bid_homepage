import * as Scrivito from "scrivito";
import PageObjIcon from "../../assets/images/page_obj.svg";
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
  defaultPageValidations,
} from "../_defaultPageEditingConfig";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("PartnerPost", {
  title: "Partner Detail Page",
  thumbnail: PageObjIcon,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    ...metadataEditingConfigAttributes,
  },
  properties: [...defaultPageProperties, "partnerImage", "category", "cat", "partnerDetailLink", "next", "prev", "more"],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
  },
  validations: [...defaultPageValidations, ...metadataValidations],
});
