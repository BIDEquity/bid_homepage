import * as Scrivito from 'scrivito';

function getRoot() {
  const currentPage = Scrivito.currentPage();
  if (!currentPage) { return; }

  const path = currentPage.siteId();
  console.log(path)
  
  return Scrivito.Obj.getByPath(path);
}

export default getRoot;