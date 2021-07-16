import * as Scrivito from "scrivito";

Scrivito.configureContentBrowser({
  filters: ({ _validObjClasses }) => {
    if (_validObjClasses) {
      switch (_validObjClasses.length) {
        case 0:
          return defaultFilters();
        case 1:
          return filterForObjClass(_validObjClasses[0]);
        default:
          return filtersForObjClasses(_validObjClasses);
      }
    }

    return defaultFilters();
  },
});

function filterForObjClass(objClass) {
  return {
    _objClass: {
      options: {
        [objClass]: {
          ...filterOptionsForObjClass(objClass),
          selected: true,
        },
      },
    },
  };
}

function filtersForObjClasses(objClasses) {
  return {
    _objClass: {
      options: {
        All: {
          title: "All",
          icon: "folder",
          field: "_objClass",
          value: objClasses,
          selected: true,
        },
        ...objClasses.reduce((result, value) => {
          result[value] = filterOptionsForObjClass(value);
          return result;
        }, {}),
      },
    },
  };
}

function defaultFilters() {
  return {
    
    _objClass: {
      options: {
        All: {
          title: "All",
          icon: "folder",
          query: Scrivito.Obj.all(),
          selected: true,
        },
        Image: filterOptionsForObjClass("Image"),
        Pages: {
          title: "Pages",
          icon: "sheet",
          field: "_objClass",
          value: PAGES,
          options: PAGES.reduce((result, value) => {
            result[value] = filterOptionsForObjClass(value);
            return result;
          }, {}),
        },
        Download: filterOptionsForObjClass("Download"),
        Video: filterOptionsForObjClass("Video"),
      },
    },
    _modification: {
      title: "Changed",
      type: "checkbox",
      expanded: true,
      field: "_modification",
      options: {
        New: {
          value: "new",
        },
        Edited: {
          value: "edited",
        },
      },
    },
  };
}

function filterOptionsForObjClass(objClass) {
  const filterPresentation = FILTER_PRESENTATIONS[objClass] || {
    title: objClass,
    icon: "question",
  };
  return { field: "_objClass", value: objClass, ...filterPresentation };
}

const FILTER_PRESENTATIONS = {
  Download: { title: "Downloads", icon: "pdf" },
  Homepage: { title: "Homepage", icon: "inbox" },
  Image: { title: "Images", icon: "image" },
  Job: { title: "Jobs", icon: "suitcase" },
  LandingPage: { title: "Landing pages", icon: "inbox" },
  NewsPost: { title: "News posts", icon: "pen" },
  Page: { title: "Standard pages", icon: "sheet" },
  PartnerPost: { title: "Partner posts", icon: "pen" },
  PortfolioPost: { title: "Portfolio posts", icon: "pen" },
  Redirect: { title: "Redirects", icon: "link" },
  SearchResults: { title: "Search results", icon: "lens" },
  TeamMemberPage: { title: "Team member", icon: "pen" },
  Video: { title: "Videos", icon: "video" },
};

const PAGES = [
  "Page",
  "LandingPage",
  "Job",
  "NewsPost",
  "PartnerPost",
  "PortfolioPost",
  "Redirect",
  "Homepage",
  "SearchResults",
  "TeamMember"
];
