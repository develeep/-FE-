# 한입 FE 챌린지 자바스크립트 
## 챌린지 소개
### 진행 방식
[한입에 끝내는 자바스크립트](https://inf.run/WfRmY)

해당 강의 수강과 함께 과제 진행
- 전체기간 3주 - 09.09 ~ 09.27
- 미션 수행 14일 (일요일 및 공휴일 제외)
### 운영방식
- **강의 수강**
    - 참여 기간 동안 하나의 강의를 선택해 완강합니다.
    - 체계적으로 완강하실 수 있도록 강의 별 **진도표**를 제공해 드립니다.
    - 아래에 소개할 **한입 FE 커뮤니티**를 통해 매일 인증합니다.
- **퀴즈 및 과제**
    - 매일 배운 내용을 확인하실 수 있도록 과제 및 퀴즈를 내 드립니다.
    - 아래에 소개할 **한입 FE 커뮤니티**를 통해 매일 매일 제출합니다.
- **커뮤니티 참여**
    - **한입 FE 커뮤니티(Discord)** 에서 함께합니다!
    - 신청자 분들께 **이메일**로 참여 링크를 발송해 드립니다.
 
## 일자 별 바로가기
- [Day 1](https://github.com/develeep/-FE-/blob/master/README.md#day-1)
- [Day 2](https://github.com/develeep/-FE-/blob/master/README.md#day-2)
- [Day 3](https://github.com/develeep/-FE-/blob/master/README.md#day-3)
- [Day 4](https://github.com/develeep/-FE-/blob/master/README.md#day-4)
- [Day 5](https://github.com/develeep/-FE-/blob/master/README.md#day-5)
- [Day 6](https://github.com/develeep/-FE-/blob/master/README.md#day-6)
- [Day 7](https://github.com/develeep/-FE-/blob/master/README.md#day-7)
- [Day 8](https://github.com/develeep/-FE-/blob/master/README.md#day-8)





## Day 1
### 수강 강의
- 1-1 강의 소개
- 2-1 자바스크립트 실행 환경
- 2-2 변수와 상수
- 2-3 자료형과 형 변환
### 과제
#### 미션1. 두 변수 선언 후 더한 값 출력하기

let 키워드를 사용해서 변수 `num1`, `num2`를 선언한 다음,
각각 숫자 10과 25를 할당해주세요.

그리고 `console.log`를 사용해서 `num1` 변수와 `num2` 변수를 더한 값을 출력해주세요.
(두 변수를 더할 때에는 + 기호를 사용해주세요)

#### 미션2. 자료형 출력하기

숫자형, 문자형, undefined 형 변수를 각각 선언한 다음, `typeof` 연산자를 사용해서 변수들의 자료형을 출력해주세요.

## Day 2
### 수강 강의
- 2-4 연산자
- 2-5 조건문
- 2-6 함수
### 과제
#### 미션1. switch case문 작성하기

`switch/case`문을 사용해서 조건문을 작성하세요.

생성한 `animal` 변수에 할당된 값이 `cat`일 경우에 '고양이'가 출력될 수 있도록 조건문을 알맞게 작성해주세요.

`case` 문은 dog, tiger, cat, lion으로 나눠서 작성하고,
`case`문의 내부에는 각각의 동물을 출력하는 코드를 작성해주세요.

> 예시
>
> ```js
> case 'tiger':
>    console.log('호랑이');
>    break;
> ```

#### 미션2. 함수 작성하기

아래의 코드가 알맞게 작동하도록 코드를 완성해주세요.

```js
let answer = '';

function connectStrings(str1, str2) {
    // 코드 작성
}

connectStrings();

console.log(answer); // 출력결과 : hello javascript
```

## Day 3
### 수강 강의
- 2-7 스코프
- 2-8 호이스팅
- 2-9 함수 표현식과 화살표 함수
- 2-10 객체

### 과제
#### 미션1. 화살표 함수 작성하기

두 숫자의 곱을 반환하는 화살표 함수를 작성하고, 3과 4를 인자로 호출하여 결과를 출력하세요.

#### 미션2. 함수 작성하기

책의 제목과 저자 이름을 속성으로 가진 `book` 객체를 만들고, 책의 정보를 반환하는 `getSummary` 메서드를 작성하세요.


#### 미션3. 스코프와 함수

두 숫자 `a`와 `b`를 인자로 받아, `b`에 5를 더한 값을, `a`에 더한 결과를 반환하는 `sumNumbers` 함수를 작성하세요.

> 힌트:
>
> ````js
> function sumNumbers(a, b) {
>     function addFive(number) {
>         //코드 작성
>     }
>     //코드 작성
> }
> console.log(sumNumbers(3, 7)); // 출력: 15 (7에 5를 더한 후 3을 더함)
> console.log(sumNumbers(10, 5)); // 출력: 20 (5에 5를 더한 후 10을 더함)```
> ````

## Day 4
### 수강강의
- 2-11 배열
- 2-12 생성자 함수
- 2-13 반복문
- 2-14 배열 메서드-1
### 과제
#### 미션1. 배열, 객체, 반복문

아래와 같은 배열에서, 칼로리가 500 이상인 음식의 이름을 출력해주세요.

> 반복문과 조건문을 사용하세요!

```js
let foods = [
    { name: 'Burger', calories: 800 },
    { name: 'Apple', calories: 52 },
    { name: 'Pizza', calories: 550 },
    { name: 'Salad', calories: 150 },
];
```

#### 미션2. 생성자 함수

동물의 종류와 소리를 인자로 받아 객체를 생성하는 `Animal` 생성자 함수를 작성해주세요. 그리고 `makeSound` 메서드를 추가하여 동물이 내는 소리를 출력하는 기능을 구현하세요.

> 예시:
>
> ```js
> const dog = new Animal('개', '멍멍');
> console.log(dog.makeSound()); // 출력: 개이(가) 멍멍 소리를 냅니다.
>
> const cat = new Animal('고양이', '야옹');
> console.log(cat.makeSound()); // 출력: 고양이이(가) 야옹 소리를 냅니다.
> ```

## Day 5
### 수강강의
- 2-15 배열 메서드-2
- 2-16 배열과 객체 구조 분해 할당
- 2-17 spread와 rest
### 과제
#### 미션1. spread와 rest

sumAndDouble이라는 함수를 작성하세요. 이 함수는 여러 개의 숫자를 인자로 받아:

1. Rest 연산자를 사용하여 모든 인자를 하나의 배열로 받습니다.
2. 받은 숫자들을 모두 더합니다.
3. 배열의 모든 숫자에 2를 곱한 새로운 배열을 반환합니다. (배열 메서드 map을 사용하세요.)

```js
// 호출 예시
console.log(sumAndDouble(1, 2, 3, 4));
```
## Day 6
### 수강강의
- 3-1 비동기 처리
- 3-2 프로미스 객체
- 3-3 async와 await
- 3-4 API 호출

### 과제
#### 미션1. API 호출1

아래와 같은 `fakeApiCall` 함수가 있습니다. 이 함수는 2초 후에 사용자 정보를 반환합니다.

`async`와 `await`를 사용하여 이 API 호출을 기다리고, 사용자 이름을 콘솔에 출력하는 `fetchUserData` 함수를 작성하세요.

```js
function fakeApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'John Doe', age: 30 });
        }, 2000);
    });
}

// fetchUserData 함수 완성

fetchUserData();
```


#### 미션2. API 호출2

아래의 API 주소는 포켓몬들의 정보가 담겨있는 `data`를 반환합니다.
주어진 API 주소를 사용해, 아래의 조건을 모두 만족하는 코드를 작성하세요.

1. try/catch를 사용한 에러 핸들링
2. async/await을 사용한 비동기 처리
3. 받아온 데이터들 중 "color 값이 green"인 포켓몬의 정보들이 담긴 배열을 출력하세요.
4. 출력 결괏값 : (이상해씨, 이상해풀, 이상해꽃, 캐터피, 단데기, 모다피,
   우츠동, 우츠보트, 스라크의 정보가 담긴 9개의 객체들이 모인 배열)

```js
const API_URL = 'https://pokemon-api-ecru-eta.vercel.app/main';
```

## Day 7
### 수강강의
- 4-1 웹과 DOM
- 4-2 DOM API-1
- 4-3 DOM API-2
- 4-4 여러가지 폼 조작

### 과제
#### 미션1. DOM API

index.js 파일을 생성하고, 파일의 내부에
버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.

DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DOM API Quiz</title>
    </head>
    <body>
        <p id="text">기본 텍스트</p>
        <button id="changeTextButton">텍스트 변경</button>
        <script src="src/index.js"></script>
    </body>
</html>
```


#### 미션2. DOM API & Select Tag

id 가 app인 div 요소의 내부에 아래의 코드들을 넣어주세요.

```html
<select id="skills">
    <option value="javascript">Javascript</option>
    <option value="next">Next.js</option>
    <option value="react">React.js</option>
    <option value="typescript">TypeScript</option>
</select>
```

> 단, createElement, appendChild를 사용해서 생성해주세요.

> select 태그의 값을 변경할 때 마다, 변경된 값을 출력하는 기능도 작성해주세요.

**HTML코드**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Select Tag Quiz</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <div id="app">
            <!-- 여기에 요소들을 추가 -->
        </div>
        <script src="src/index.js"></script>
    </body>
</html>
```

## Day 8
### 수강 강의
- 5-1 자바스크립트의 this-1
- 5-2 자바스크립트의 this-2
- 5-3 this와 화살표 함수
- 6-1 동물 앨범 만들기-1-1
- 6-2 동물 앨범 만들기-1-2

### 과제
#### 미션1. 자바스크립트의 this

다음 코드에서 `regularFunction`과 `arrowFunction`이 있습니다.

두 함수 모두 `this`가 어떻게 작동하는지 확인하기 위해 각각 `this.value`를 출력하려고 합니다.

각 함수의 `this`가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 `this.value`를 출력할 수 있도록 코드를 수정하세요.
(주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)

```js
const obj = {
    value: 42,
    regularFunction: function () {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    },
    arrowFunction: () => {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
```

### 미션2. 6-2. 동물 앨범 만들기-1-2

만든 동물 앨범 웹 페이지를 캡쳐해서 댓글에 올려주세요!!

## Day 9
### 수강강의 
- 7-1 컴포넌트란
- 7-2 모듈 시스템이란
- 7-3 동물 앨범 만들기-2-1
### 과제
과제 없음
