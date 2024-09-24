export default function TabBar({ app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  this.target = document.createElement('div');
  this.target.className = 'tab-bar';
  app.append(this.target);

  this.template = () => {
    let temp = `<div id='all'>전체</div><div id='penguin'>펭귄</div><div id='koala'>코알라</div><div id='panda'>판다</div>`;
    return temp;
  };

  this.render = () => {
    this.target.innerHTML = this.template();
    let currentTab = document.getElementById(this.state);
    currentTab && (currentTab.className = 'clicked');
    const tabBars = this.target.querySelectorAll('div');
    tabBars.forEach((e) => {
      e.addEventListener('click', () => {
        this.onClick(e.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
