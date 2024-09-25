export default function Header(initialState) {
  this.target = document.createElement('div');
  this.target.className = 'header';
  this.state = initialState;
  this.template = () => {};
  this.render = () => {};
  this.setState = () => {};
  this.render();
}
