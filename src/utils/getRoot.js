import * as Scrivito from 'scrivito';

function getRoot() {
  const currentPage = Scrivito.currentPage();
  if (!currentPage) { return; }

  const path = currentPage.siteId();
  
  return path;
}

export default getRoot;