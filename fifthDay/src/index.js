// 1번
function sumAndDouble(...nums) {
  const sum = nums.reduce((acc, cur) => (acc += cur), 0);
  const double = nums.map((num) => num * 2);
  return { sum, double };
}

console.log(sumAndDouble(1, 2, 3, 4));
