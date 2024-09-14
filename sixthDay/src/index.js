// 1번
function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 30 });
    }, 2000);
  });
}

async function fetchUserData() {
  const res = await fakeApiCall();
  console.log(`user name : ${res.name}`);
}
fetchUserData();

// 2번
const API_URL = 'https://pokemon-api-ecru-eta.vercel.app/main';
async function getPokemon() {
  try {
    const res = await fetch(API_URL);
    const { data } = await res.json();
    const greenPokemon = data.filter((pokemon) => pokemon.color === 'green');
    console.log(greenPokemon);
  } catch (e) {
    console.log(e);
  }
}
getPokemon();
