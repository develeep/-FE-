const api = 'https://animal-api-two.vercel.app/';

export const getData = async () => {
  const res = await fetch(api);
  try {
    if (res) {
      const datas = await res.json();
      return datas;
    }
  } catch (e) {
    console.log(e);
  }
};
