//COMPONENTS
import PokemonList from './components/PokemonList.js';
import Header from './components/Header.js';
import PokemonDetail from './components/PokemonDetail.js';
//APIS
import { getPokemonList, getPokemonDetail } from './modules/api.js';

export default function App($app) {
  const getSearchWord = () => {
    if (window.location.search.includes('search=')) {
      return window.location.search.split('search=')[1];
    }
    return '';
  };
  const getType = () => {
    if (!window.location.pathname.includes('/detail')) {
      console.log(window.location.pathname.split('/')[1]);
      return window.location.pathname.split('/')[1];
    }
    return '';
  };
  this.state = {
    type: getType(),
    pokemonList: [],
    searchWord: getSearchWord(),
    currentPage: window.location.pathname,
  };

  this.render = () => {
    $app.innerHTML = '';
    if (this.state.currentPage.startsWith('/detail/')) {
      const id = this.state.currentPage.split('/detail/')[1];
      renderHeader();
      renderPokemonDetail(id);
    } else {
      renderHeader();
      renderPokemonList();
    }
  };
  const renderHeader = () => {
    new Header({
      $app,
      initialState: {
        currentPage: this.state.currentPage,
        searchWord: this.state.searchWord,
      },
      handleClick: async () => {
        window.location.href = '/';
      },
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
  };
  const renderPokemonList = () => {
    new PokemonList({
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
          `/${type}${
            this.state.searchWord && `?search=${this.state.searchWord}`
          }`
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
  };
  const renderPokemonDetail = async (id) => {
    try {
      const pokemonDetail = await getPokemonDetail(id);
      new PokemonDetail({
        $app,
        initialState: pokemonDetail,
      });
    } catch (err) {
      console.log(err);
    }
  };
  window.addEventListener('popstate', async () => {
    if (window.location.pathname.startsWith('/detail')) {
      this.setState({
        ...this.state,
        currentPage: window.location.pathname,
      });
    } else {
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

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  const init = async () => {
    if (this.state.currentPage.startsWith('/detail')) {
      this.render();
    } else {
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
    }
  };

  init();
}
