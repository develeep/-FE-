const API_URL = 'https://trip-wiki-api.vercel.app';

export const request = async (startIndex, region, sortBy, searchWord) => {
  try {
    const url = `${API_URL}/${
      region && region !== 'All' ? region : ''
    }?start=${startIndex}${sortBy ? `&sort=${sortBy}` : ''}${
      searchWord ? `&search=${searchWord}` : ''
    }
    `;
    const res = await fetch(url);
    if (res) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const detailRequest = async (id) => {
  try {
    const res = await fetch(`${API_URL}/city/${id}`);
    if (res) {
      const data = res.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
