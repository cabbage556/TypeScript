/**
 * Closure
 *
 * "A closure is the combination of a function and the lexical environment
 *  within which that function was declared."
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 *    -> "상위 함수보다 하위 함수가 더 오래 살아 있는 경우를 closure라고 한다."
 */

// 상위 함수
function getNumber() {
    var number = 5;

    // 하위 함수
    function innerGetNumber() {
        return number;
    }

    // 하위 함수를 반환하여 하위 함수가 상위 함수보다 더 오래 살아 있는 경우: 클로저
    return innerGetNumber;
}

const runner = getNumber();
console.log(runner); // [Function: innerGetNumber]
console.log(runner()); // 5

/**
 * 클로저를 사용하는 경우
 * 1. 데이터 캐싱
 */
function cacheFunction() {
    var number = 10 * 10; // 이 계산이 매우 오래 걸리는 계산이라고 가정

    // 상위 함수의 계산 결과와 어떤 값의 계산 결과를 여러 번 얻고 싶을 때 하위 함수 선언
    function innerCacheFunction(newNumber) {
        return number * newNumber;
    }

    // 상위 함수보다 더 오래 살아 있도록 하위 함수 리턴
    return innerCacheFunction;
}

// 오래 걸리는 계산을 한 번만 실행하고 number 변수에 저장한다.
// 그리고 number 변수를 참조하는 내부 함수를 반환한다.
// 클로저에서 number 변수의 결과값을 저장한다.
const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
    var number = 99;

    function increment() {
        return ++number;
    }

    // 클로저
    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102

/**
 * 클로저를 사용하는 경우
 * 2. 정보 은닉
 */
function Idol(name, year) {
    this.name = name;

    // 함수 내부에 변수 선언
    //    Idol 생성자 함수로 생성한 객체로 접근할 수 없음
    var _year = year;

    // 정보 은닉
    //    메서드를 통해 _year 변수 접근 가능
    this.sayNameAndYear = function () {
        return `이름 ${this.name}, 출생년도: ${_year}`;
    };
}

const yujin = new Idol("안유진", 2003);
console.log(yujin.sayNameAndYear()); // 이름: 안유진, 출생년도: 2003
console.log(yujin.name); // 안유진
console.log(yujin._year); // undefined: _year는 함수의 변수이므로 객체의 프로퍼티로 접근 불가능
