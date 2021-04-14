import * as Scrivito from 'scrivito';

function getRoot() {
  const currentPage = Scrivito.currentPage();
  if (!currentPage) { return; }

  const path = currentPage.siteId();
  
  return Scrivito.Obj.getByPath(path);
}

export default getRoot;