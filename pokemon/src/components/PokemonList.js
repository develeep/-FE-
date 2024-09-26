// 알맞은 속성의 값과 색상을 적용할 수 있는 모듈입니다.
// modules 폴더 내부의 typeTag.js 코드를 확인하고, 알맞게 활용해보세요!

import { setPokemonType } from '../modules/typeTag.js';

export default function PokemonList({
  $app,
  initialState,
  handleItemClick,
  handleTypeClick,
}) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'pokemon-list';

  $app.appendChild(this.$target);
  this.handleItemClick = handleItemClick;
  this.handleTypeClick = handleTypeClick;

  this.template = () => {
    let temp = [];
    this.state.forEach((pokemon) => {
      const type = setPokemonType(pokemon.type);
      temp += `<div class="pokemon-wrapper">
          <div class="img-wrapper" id="${pokemon.id}">
              <img src="${pokemon.img}" alt="${pokemon.name}"></img>
          </div>
          <div class="pokemon-info">
              <div class="index">No.${pokemon.id}</div>
              <div class="name">${pokemon.name}</div>
              <div class="type">${type}</div>
          </div>
      </div>`;
    });
    // html 코드는 아래와 같이 제공드립니다.
    // 필요한 코드를 추가적으로 작성해 웹 사이트를 완성하세요.
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    document.querySelectorAll('.img-wrapper').forEach((elm) => {
      elm.addEventListener('click', () => {
        console.log(elm.id);
        this.handleItemClick(elm.id);
      });
    });
    document.querySelectorAll('.type-tag').forEach((elm) => {
      elm.addEventListener('click', () => {
        this.handleTypeClick(elm.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
