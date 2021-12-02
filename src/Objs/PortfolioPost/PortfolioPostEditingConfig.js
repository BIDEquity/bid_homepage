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

Scrivito.provideEditingConfig("PortfolioPost", {
  title: "PortfolioPost",
  thumbnail: PageObjIcon,
  attributes: {
    exited: {
      title: "Should the exited label be shown?",
      description: "Default: No",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    },
    ...defaultPageEditingConfigAttributes,
    ...metadataEditingConfigAttributes,
  },
  properties: [...defaultPageProperties, "date","exited", "detailsButton", "portfolioLink"],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
    exited: "no"
  },
  validations: [...defaultPageValidations, ...metadataValidations],
});
