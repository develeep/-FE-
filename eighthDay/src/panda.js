const api = 'https://animal-api-two.vercel.app/';

const content = document.querySelector('.content');

const getData = async (name) => {
  const res = await fetch(api + name);
  try {
    if (res) {
      const datas = await res.json();
      console.log(datas);
      datas.photos.forEach((data) => {
        const img = document.createElement('img');
        img.src = data.url;
        img.id = data.id;
        content.append(img);
      });
    }
  } catch (e) {
    console.log(e);
  }
};
getData('panda');
