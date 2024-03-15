/**
 * copy by value: 값에 의한 전달
 * copy by reference: 참조에 의한 전달
 *
 * 1. 모든 primitive 값은 copy by value다.
 * 2. 모든 객체는 copy by reference다.
 */

let origin = "hi";
let clone = origin; // copy by value: 변수의 값을 복사하여 전달
console.log(origin, clone);

clone += "hello";
console.log(origin, clone); // 두 변수의 값이 달라진다.

let originObj = {
    name: "안유진",
    group: "아이브",
};
let cloneObj = originObj; // copy by reference: 참조값을 복사하여 전달
console.log({ originObj, cloneObj });

cloneObj.name = "장원영";
console.log({ originObj, cloneObj }); // 두 객체의 name 프로퍼티의 값이 여전히 같다.
console.log(originObj === cloneObj); // true: 두 변수의 객체가 동일하다.

originObj = {
    name: "안유진",
    group: "아이브",
};
cloneObj = {
    name: "안유진",
    group: "아이브",
};
console.log(originObj === cloneObj); // false: 두 변수의 객체가 다르다.

const yujin1 = {
    name: "안유진",
    group: "아이브",
};
const yujin2 = yujin1;
const yujin3 = {
    name: "안유진",
    group: "아이브",
};
console.log(yujin1 === yujin2); // true
console.log(yujin1 === yujin3); // false
console.log(yujin2 === yujin3); // false

/**
 * Spread 연산자
 */
const yujin4 = {
    ...yujin3,
};
console.log({ yujin4 });
console.log(yujin4 === yujin3); // false: Spread 연산 결과 프로퍼티가 복사되어 새로운 메모리 공간에 할당되므로 두 객체는 다르다.

// Spread 연산자 사용 시 순서가 중요하다.
const yujin5 = {
    name: "아이이브", // yujin3 객체에 이미 존재하는 name 프로퍼티
    ...yujin3,
};
console.log({ yujin5 }); // yujin3 객체에 존재하는 name 프로퍼티로 덮어 씌워짐

const yujin6 = {
    ...yujin3,
    name: "아이이브", // yujin3 객체에 이미 존재하는 name 프로퍼티
};
console.log({ yujin6 }); // yujin6 객체에 선언한 name 프로퍼티로 덮어 씌워짐
