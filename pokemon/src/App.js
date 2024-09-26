//COMPONENTS
import PokemonList from './components/PokemonList.js';
import Header from './components/Header.js';
//APIS
import { getPokemonList } from './modules/api.js';

export default function App($app) {
  const getSearchWord = () => {
    if (window.location.search.includes('search=')) {
      return window.location.search.split('search=')[1];
    }
    return '';
  };
  const getType = () => {
    if (
      !window.location.pathname.includes('/detail') &&
      !window.location.search.includes('search=')
    ) {
      return window.location.pathname.replace('/', '');
    }
    return '';
  };
  this.state = {
    type: getType(),
    pokemonList: [],
    searchWord: getSearchWord(),
    currentPage: window.location.pathname,
  };

  const header = new Header({
    //코드 작성
    $app,
    initialState: {
      currentPage: this.state.currentPage,
      searchWord: this.state.searchWord,
    },
    //'포켓몬 도감'을 클릭하면 "/" 홈으로 돌아갈 수 있도록 함수를 완성하세요.
    handleClick: async () => {
      window.location.href = '/';
    },
    //'돋보기 모양'을 누르면 검색 결과를 나타내고, "(기존 url)/?search=searchWord"로 url을 변경하세요.
    handleSearch: async (searchWord) => {
      history.pushState(
        null,
        null,
        `/${this.state.type && this.state.type}?search=${searchWord}`
      );
      try {
        const pokemonList = await getPokemonList(this.state.type, searchWord);
        this.setState({
          ...this.state,
          searchWord: searchWord,
          currentPage: `/${
            this.state.type && this.state.type
          }?search=${searchWord}`,
          pokemonList: pokemonList,
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  const pokemonList = new PokemonList({
    $app,
    initialState: this.state.pokemonList,
    handleItemClick: (id) => {
      history.pushState(null, null, `/detail/${id}`);
      this.setState({
        ...this.state,
        currentPage: `/detail/${id}`,
      });
    },
    handleTypeClick: async (type) => {
      history.pushState(
        null,
        null,
        `/${type}${this.state.searchWord && `?search=${this.state.searchWord}`}`
      );
      try {
        const pokemonList = await getPokemonList(type, this.state.searchWord);
        this.setState({
          ...this.state,
          type: type,
          pokemonList: pokemonList,
          currentPage: `/${type}${
            this.state.searchWord && `?search=${this.state.searchWord}`
          }`,
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

  this.setState = (newState) => {
    this.state = newState;
    pokemonList.setState(this.state.pokemonList);
    header.setState({
      currentPage: this.state.currentPage,
      searchWord: this.state.searchWord,
    });
  };
  window.addEventListener('popstate', async () => {
    if (!window.location.pathname.includes('/detail')) {
      const type = window.location.pathname.replace('/', '');
      const searchWord = getSearchWord();
      const pokemonList = await getPokemonList(type, searchWord);
      this.setState({
        ...this.state,
        type: type,
        searchWord: searchWord,
        currentPage: `${window.location.pathname}${
          searchWord && `?search=${searchWord}`
        }`,
        pokemonList: pokemonList,
      });
    }
  });
  const init = async () => {
    try {
      const datas = await getPokemonList(
        this.state.type,
        this.state.searchWord
      );
      this.setState({
        ...this.state,
        pokemonList: datas,
      });
    } catch (err) {
      console.log(err);
    }
  };

  init();
}
