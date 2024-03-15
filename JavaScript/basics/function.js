/**
 * arguments 객체: 함수에 입력한 아규먼트들을 값으로 갖는 객체
 */
const multiply = function (x, y, z) {
    console.log(arguments);
};
multiply(4, 5, 6); // [Arguments] { '0': 4, '1': 5, '2': 6 }

const multiplyAll = function (...args) {
    return Object.values(arguments).reduce((pre, cur) => pre * cur, 1);
};
console.log(multiplyAll(10, 20, 30)); // 6000

/**
 * 즉시 실행 함수
 */
(function (x, y) {
    console.log(x * y);
})(5, 10); // 50

/**
 * 함수의 타입은 객체
 */
console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true: 함수는 객체다
