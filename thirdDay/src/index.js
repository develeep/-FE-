// 1번
const mul = (num1, num2) => num1 * num2;
console.log(mul(3, 4));

//2번
const book = {
  name: '햄릿',
  writer: '셰익스피어',
  getSummary: function () {
    console.log(`이 책의 제목은 ${this.name}이고 저자는 ${this.writer}입니다.`);
  },
};
book.getSummary();

//3번
function sumNumbers(a, b) {
  function addFive(number) {
    return b + 5;
  }
  return a + addFive(b);
}

console.log(sumNumbers(3, 7));
console.log(sumNumbers(10, 5));
