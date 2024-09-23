export default function Content({ app, initialState }) {
  this.state = initialState;
  this.target = document.createElement('div');
  this.target.className = 'content';
  app.append(this.target);

  this.template = () => {
    // console.log(this.state);
    let temp = [];
    if (this.state) {
      this.state.forEach((e) => {
        temp += `<img src='${e.url}'></img>`;
      });
    }
    return temp;
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    this.target.innerHTML = this.template();
  };

  this.render();
}
