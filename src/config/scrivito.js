import * as Scrivito from "scrivito";

//const config = { tenant: process.env.SCRIVITO_TENANT, adoptUi: true };

function baseUrlForSite(siteId) {
  switch (siteId) {
    case "en":
      return `${window.location.origin}/en`;
    case "de":
      return `${window.location.origin}/de`;
  }
}

function siteForUrl(url) {
  let siteId;
  switch (new URL(url).pathname.split("/")[1]) {
    case "de":
      siteId = "de";
      return { siteId, baseUrl: baseUrlForSite(siteId) };
    case "en":
      siteId = "en";
      return { siteId, baseUrl: baseUrlForSite(siteId) };
    default:
      return { siteId: "en", baseUrl: window.location.origin };
  }
}

Scrivito.configure({
  siteForUrl,
  baseUrlForSite,
  tenant: process.env.SCRIVITO_TENANT,
  //homepage: () => Scrivito.Obj.getByPath("en"),
  adoptUi: true,
  
  // other keys …
});

/*if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

if (process.env.SCRIVITO_ENDPOINT) {
  config.endpoint = process.env.SCRIVITO_ENDPOINT;
}

if (process.env.SCRIVITO_PRERENDER) {
  config.priority = "background";
}*/

//Scrivito.configure(config);
