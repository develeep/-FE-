//1번
const animal = 'cat';
switch (animal) {
  case 'dog':
    console.log('개');
    break;
  case 'tiger':
    console.log('호랑이');
    break;
  case 'cat':
    console.log('고양이');
    break;
  case 'lion':
    console.log('사자');
    break;
  default:
    console.log('다른 동물');
}

//2번
let answer = '';

function connectStrings(str1, str2) {
  answer = `${str1} ${str2}`;
}

connectStrings('hello', 'javascript');

console.log(answer); // 출력결과 : hello javascript
