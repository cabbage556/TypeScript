/**
 * Loop holes of any
 */
let num: number;
num = 10;
// num.toUpperCase(); // 에러: number 타입에서 string 타입의 메서드 사용

// ⭐️ any 타입 캐스팅은 사용을 지양해야 함: 에러 발생 가능성이 높아짐
// (num as any).toUpperCase(); // 런타임 에러: any 타입으로 캐스팅하면 toUpperCase() 메서드 사용 가능, 하지만 런타임에서 에러 발생

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};
let arg1: any = "codefactory";
let arg2: any = true;
multiplyTwo(arg1, arg2); // 런타임 에러: any 타입의 변수 값을 number 타입의 파라미터에 전달 가능, 하지만 런타임에서 에러 발생

// any 타입에 자동 완성 기능 사용 불가능
let iu: any = {
  name: "iu",
  age: 30,
};
// iu. // 타입스크립트는 any 타입으로 선언한 iu에 어떤 프로퍼티가 존재하는지 알지 못함

const callbackRunner = (x: number, y: number, cb: any) => {
  return cb(x, y);
};
const callback = (x: number, y: number) => {
  return x * y;
};
console.log(callbackRunner(5, 4, callback));

const callbackRunner2 = (x: number, y: number, cb: any) => {
  return cb(x); // 콜백 함수에 y를 전달하지 않음
};
console.log(callbackRunner2(5, 4, callback)); // 예상치 못한 동작 발생

// any 타입을 사용하면 어떤 에러도 발생하지 않아 코드 동작을 예측하기가 어려워져 유지보수가 어려움(사실상 자바스크립트 코드와 다르지 않음)
//  따라서 any 타입은 사용을 지양해야 함
