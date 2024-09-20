// 1번
const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요? => obj에 해당함
  },
  arrowFunction: () => {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요? => windows 에 해당함
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction();
// 출력: undefined (arrowFunction의 this 위치는 obj가 아닌 obj의 상위에 있는 windows 객체가 선언됨
// windows객체에는 value값이 없으므로 undefined 출력)

// 정상적으로 작동하게 변경
const obj2 = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요? => obj에 해당함
  },
  arrowFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요? => windows 에 해당함
  },
};

obj2.regularFunction(); // 출력: 42
obj2.arrowFunction(); // 출력: 42
