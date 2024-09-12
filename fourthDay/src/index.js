// 1번
let foods = [
  { name: 'Burger', calories: 800 },
  { name: 'Apple', calories: 52 },
  { name: 'Pizza', calories: 550 },
  { name: 'Salad', calories: 150 },
];
const highCalFoods = foods.reduce((acc, cur) => {
  if (cur.calories >= 500) {
    return acc ? `${acc}, ${cur.name}` : cur.name;
  }
  return acc;
}, '');
console.log(`칼로리가 500보다 높은 음식은 ${highCalFoods}입니다.`);

// 2번
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    return `${this.name}이(가) ${this.sound} 소리를 냅니다.`;
  }
}
const dog = new Animal('개', '멍멍');
console.log(dog.makeSound()); // 출력: 개이(가) 멍멍 소리를 냅니다.

const cat = new Animal('고양이', '야옹');
console.log(cat.makeSound()); // 출력: 고양이이(가) 야옹 소리를 냅니다.
