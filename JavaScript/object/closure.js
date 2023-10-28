/**
 * Closure
 *
 * A closure is the combination of a function and
 * the lexical environment within which that function was declared.
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 *
 * -> "상위 함수보다 하위 함수가 더 오래 살아 있는 경우를 closure라고 한다."
 */

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  // 내부 함수를 반환하여 내부 함수가 더 오래 살아 있는 경우
  return innerGetNumber;
}

const runner = getNumber();
console.log(runner); // [Function: innerGetNumber]
console.log(runner()); // 5

/**
 * 1. 데이터 캐싱
 */
function cacheFunction() {
  var number = 10 * 10; // 이 계산이 매우 오래 걸리는 계산이라고 가정

  function innerCacheFunction(newNumber) {
    return number * newNumber;
  }

  return innerCacheFunction;
}

// 오래 걸리는 계산을 한 번만 실행하고 number 변수에 저장 후 number 변수를 참조하는 내부 함수를 반환
// 클로저에서 number 변수의 결과값을 저장
const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
  var number = 99;

  function increment() {
    return ++number;
  }

  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102

/**
 * 2. 정보 은닉
 */
function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `이름 ${this.name}, 출생년도: ${_year}`;
  };
}

const yujin = new Idol("안유진", 2003);
console.log(yujin.sayNameAndYear()); // 이름: 안유진, 출생년도: 2003
console.log(yujin._year); // undefined: _year는 this로 저장하지 않았기 때문에 객체의 프로퍼티로 접근 불가능
console.log(yujin.name); // 안유진
