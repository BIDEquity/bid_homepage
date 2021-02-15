import * as Scrivito from "scrivito";
import jobObjIcon from "../../assets/images/job_obj.svg";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import ButtonWidget from "../../Widgets/ButtonWidget/ButtonWidgetClass";
import HeadlineWidget from "../../Widgets/HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../../Widgets/TextWidget/TextWidgetClass";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Job", {
  title: "Job",
  thumbnail: jobObjIcon,
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Job title",
      description: "E.g. Software Engineer",
    },
    text: {
      title: "Job description",
    },
    image: {
      title: "Image",
    },
    datePosted: {
      title: "Posted at",
      description: "The job was posted at.",
    },
    tags: {
      title: "Tags",
      description: "Which tags can be associated with this job?",
    },
    validThrough: {
      title: "Expire at",
      description: "Job posting will expire at.",
    },
    hiringOrganizationName: {
      title: "Organization",
      description: "Name of the hiring organization.",
    },
    hiringOrganizationWebsite: {
      title: "Organization website",
      description: "E.g. http://www.example.com",
    },
    locationStreetAddress: {
      title: "Street address",
      description: "E.g. 655 W. 34th Street",
    },
    locationLocality: {
      title: "Locality",
      description: "E.g. New York",
    },
    locationRegion: {
      title: "Region",
      description: "E.g. NY or CA",
    },
    locationPostalCode: {
      title: "Postal code",
      description: "E.g. 10001",
    },
    locationCountry: {
      title: "Country",
      description: "E.g. USA",
    },
    employmentType: {
      title: "Type of employment",
      values: [
        { value: "FULL_TIME", title: "Full-time" },
        { value: "PART_TIME", title: "Part-time" },
        { value: "CONTRACTOR", title: "Contractor" },
        { value: "TEMPORARY", title: "Temporary" },
        { value: "INTERN", title: "Intern" },
        { value: "VOLUNTEER", title: "Volunteer" },
        { value: "PER_DIEM", title: "Per diem" },
        { value: "OTHER", title: "Other" },
      ],
    },
  },
  properties: [
    "title",
    "text",
    "image",
    "tags",
    "datePosted",
    "validThrough",
    "hiringOrganizationName",
    "hiringOrganizationWebsite",
    "locationName",
    "locationStreetAddress",
    "locationLocality",
    "locationRegion",
    "locationPostalCode",
    "locationCountry",
    "employmentType",
  ],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...metadataInitialContent,
    body: [new SectionWidget({})],
    title: "Job designation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation sed do eiusmod tempor incididunt ut labore et dolore magna.",
  }
    
});