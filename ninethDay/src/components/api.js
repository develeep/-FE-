const api = 'https://animal-api-two.vercel.app/';

export const getData = async (name) => {
  const res = await fetch(name ? api + name : api);
  try {
    if (res) {
      const datas = await res.json();
      return datas.photos;
    }
  } catch (e) {
    console.log(e);
  }
};
