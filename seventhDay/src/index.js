// 1번
const btn = document.querySelector('#changeTextButton');
const txt = document.querySelector('#text');
btn.addEventListener('click', () => {
  txt.textContent = '클릭되었습니다.';
});

//2번
const options = [
  {
    value: 'javascript',
    text: 'Javascript',
  },
  {
    value: 'next',
    text: 'Next.js',
  },
  {
    value: 'react',
    text: 'React.js',
  },
  {
    value: 'typescript',
    text: 'Typescript',
  },
];

const app = document.querySelector('#app');
const select = document.createElement('select');
select.id = 'skills';

select.addEventListener('change', (e) => {
  console.log(e.target.value);
});

options.forEach(({ value, text }) => {
  const option = document.createElement('option');
  option.value = value;
  option.text = text;
  select.append(option);
});
app.append(select);
