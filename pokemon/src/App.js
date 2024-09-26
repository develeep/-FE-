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

  this.state = {
    type: '',
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
    handleClick: () => {
      window.location.href = '/';
    },
    //'돋보기 모양'을 누르면 검색 결과를 나타내고, "(기존 url)/?search=searchWord"로 url을 변경하세요.
    handleSearch: (searchWord) => {
      history.pushState(null, null, `/?search=${searchWord}`);
      this.setState({
        ...this.state,
        searchWord: searchWord,
        currentPage: `/?search=${searchWord}`,
      });
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
      history.pushState(null, null, `/${type}`);
      const pokemonList = await getPokemonList(type);
      this.setState({
        ...this.state,
        type: type,
        pokemonList: pokemonList,
        currentPage: `/${type}`,
      });
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

  const init = async () => {
    const datas = await getPokemonList();
    this.setState({
      ...this.state,
      pokemonList: datas,
    });
  };

  init();
}
