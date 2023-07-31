export const getAPI = (url: string, sCB: any, eCB: any) =>
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      sCB(post);
    })
    .catch(eCB);
