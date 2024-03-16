/**
 * this
 *    - JS는 렉시컬 스코프를 사용하므로 함수의 상위 스코프가 정의 시점에 평가됨
 *    - 하지만 this 바인딩은 객체가 생성되는 시점에 결정됨⭐️
 */

const testFunction = function () {
    return this;
};

// 일반 함수 호출 시 this가 global 객체에 바인딩됨
console.log(testFunction()); // Object [global] {...}
console.log(testFunction() === global); // true

const yujin = {
    name: "안유진",
    year: 2003,
    sayHi: function () {
        return `안녕하세요 ${this.name}입니다`;
    },
};

// this가 yujin 객체에 바인딩됨
console.log(yujin.sayHi());

function Person(name, year) {
    this.name = name;
    this.year = year;
    this.sayHi = function () {
        return `안녕하세요 ${this.name}입니다`;
    };
}

const yujin2 = new Person("안유진", 2003);

// this가 yujin2 객체에 바인딩됨
console.log(yujin2.sayHi());

Person.prototype.dance = function () {
    function dance2() {
        return `${this.name}이 춤을 춥니다.`;
    }

    // this가 global 객체에 바인딩됨
    return dance2();
};
console.log(yujin2.dance()); // undefined이 춤을 춥니다.

/**
 * this가 가리키는 것
 * 1. 일반 함수로 호출하는 경우: 최상위 객체(global 또는 window)
 * 2. 메서드로 호출하는 경우: 호출한 객체
 * 3. new 키워드로 객체를 생성하는 경우: 생성하는 객체를 가리킴
 *     - 2, 3번이 아닌 경우에는 this는 항상 최상위 객체를 가리킨다.
 */

/**
 * 명시적으로 this를 바인딩하는 방법
 * 1. apply
 * 2. call
 * 3. bind
 */
function returnName() {
    return this.name;
}
console.log(returnName()); // undefined: this가 global 객체를 가리키므로 global 객체에 존재하지 않는 name 프로퍼티를 출력함

const wonyoung = {
    name: "장원영",
};

// returnName 함수 호출 시 this를 wonyoung 객체에 바인딩
//    wonyoung 객체의 name 프로퍼티를 출력함
console.log(returnName.call(wonyoung)); // 장원영
console.log(returnName.apply(wonyoung)); // 장원영

/**
 * 1. call: 컴마(,)를 기준으로 실행하는 함수에 아규먼트를 순서대로 넘겨줄 수 있음
 * 2. apply: 아규먼트를 리스트로 넘겨줄 수 있음
 */
function foo(x, y, z) {
    return `${this.name} / 결과값: ${x * y * z}`;
}

// foo 함수 호출 시 this를 wonyoung 객체에 바인딩
console.log(foo.call(wonyoung, 2, 3, 4)); // 장원영 / 결과값: 24
console.log(foo.apply(wonyoung, [3, 4, 5])); // 장원영 / 결과값: 60

/**
 * 3. bind: this 바인딩 후 원할 때 실행 가능
 */
// foo 함수의 this를 wonyoung 객체에 바인딩하여 laterFunc에 할당
const laterFunc = foo.bind(wonyoung, 5, 10, 20);
console.log(laterFunc); // [Function bound foo]: 함수
console.log(laterFunc()); // 장원영 / 결과값: 1000
