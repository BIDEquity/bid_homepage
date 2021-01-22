import * as Scrivito from "scrivito";

//const config = { tenant: process.env.SCRIVITO_TENANT, adoptUi: true };

function baseUrlForSite(siteId) {
  switch (siteId) {
    case "en":
      return `${window.location.origin}`;
    case "de":
      return `${window.location.origin}/de`;
    default:
      return `${window.location.origin}`;
  }
}

function siteForUrl(url) {
  let siteId;
  switch (new URL(url).pathname.split("/")[1]) {
    case "en":
      siteId = "en";
      return { siteId, baseUrl: baseUrlForSite(siteId) };
    case "de":
      siteId = "de";
      return { siteId, baseUrl: baseUrlForSite(siteId) };
    default:
      siteId = "en";
      return { siteId, baseUrl: baseUrlForSite(siteId) };
  }
}

Scrivito.configure({
  baseUrlForSite: baseUrlForSite,
  siteForUrl: siteForUrl,
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPath("/"),
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
