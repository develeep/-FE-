export default function Header({
  app,
  initialState,
  handleSortChange,
  handleSearch,
}) {
  this.state = initialState;
  console.log(this.state);
  this.app = app;
  this.target = document.createElement('div');
  this.target.className = 'header';
  this.app.append(this.target);
  this.handleSearch = handleSearch;
  this.handleSortChange = handleSortChange;
  this.template = () => {
    const { sortBy, searchWord } = this.state;
    let temp = `
    <div class="tittle">
      <a href="/">Trip Wiki</a>
    </div>
    <div class="filter-search-container">
      <div class=filter">
        <select id="sortList" class="sort-list">
          <option value="total" ${
            sortBy === 'total' ? 'selected' : ''
          }>Total</option>
          <option value="const" ${
            sortBy === 'const' ? 'selected' : ''
          }>Cost</option>
          <option value="fun" ${sortBy === 'fun' ? 'selected' : ''}>Fun</option>
          <option value="safety" ${
            sortBy === 'safety' ? 'selected' : ''
          }>Safety</option>
          <option value="internet" ${
            sortBy === 'internet' ? 'selected' : ''
          }>Internet</option>
          <option value="air" ${
            sortBy === 'air' ? 'selected' : ''
          }>Air Quality</option>
          <option value="food" ${
            sortBy === 'food' ? 'selected' : ''
          }>Food</option>
        </select>
      </div>
      <div class="search">
        <input type="text" placeholder="Search" id="search" autocomplete="off" value="${searchWord}"/>
      </div>
    </div>`;
    return temp;
  };
  this.render = () => {
    this.target.innerHTML = this.template();
    document.getElementById('sortList').addEventListener('change', (e) => {
      console.log('sort');
      this.handleSortChange(e.target.value);
    });
    document.getElementById('search').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        console.log(e.target.value);
        this.handleSearch(e.target.value);
      }
    });
  };
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
