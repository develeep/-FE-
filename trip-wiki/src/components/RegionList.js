export default function RegionList({ app, initialState, handleRegion }) {
  this.handleRegion = handleRegion;
  this.target = document.createElement('div');
  this.target.className = 'region-list';
  app.append(this.target);

  this.state = initialState;

  this.template = () => {
    const regionList = [
      'All',
      'Asia',
      'Middle-East',
      'Europe',
      'Latin-America',
      'Africa',
      'North-America',
      'Oceania',
    ];
    let temp = ``;
    regionList.forEach((region) => {
      let regionId = region;
      temp += `<div id=${regionId}>${region}</div>`;
    });
    return temp;
  };
  console.log(this.state);
  this.render = () => {
    this.target.innerHTML = this.template();
    if (this.state) {
      let currentRegion = document.getElementById(this.state);
      currentRegion && (currentRegion.className = 'clicked');
    } else {
      document.getElementById('All').className = 'clicked';
    }
    const regionList = this.target.querySelectorAll('div');
    regionList.forEach((elm) => {
      elm.addEventListener('click', () => {
        this.handleRegion(elm.id);
      });
    });
  };
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
