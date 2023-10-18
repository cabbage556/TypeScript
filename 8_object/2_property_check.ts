/**
 * Property check
 *
 * 초과 속성 검사
 */
type TName = {
  name: string;
};
type TAge = {
  age: number;
};

const iu = {
  name: "아이유", // string
  age: 30, // number
};

const iu2: TName = {
  name: "아이유",
  // age: 30, // 컴파일 에러: 실제 객체(리터럴)을 할당하는 경우 정확히 타입에 선언되어 있는 프로퍼티를 입력해야 함 -> 즉 초과 속성이 허락되지 않음(초과 속성 검사는 객체 리터럴 할당 시에만 동작한다는 것)
};

// 실제 객체(리터럴)을 할당하는 경우와 달리 컴파일 에러가 발생하지 않음
// 이미 객체를 저장하는 변수를 다른 변수에 할당하는 경우 타입스크립트는 할당하려는 객체의 타입을 확인한다.
//    iu 변수에 할당된 객체에는 name, age 프로퍼티가 존재하지만, testName 변수의 타입은 TName이다.
//    iu 변수에 할당된 객체와 TName 타입의 공통점은 name 프로퍼티가 string 타입으로 같다는 것이므로 일종의 내로잉으로 판단한다.
//    따라서 초과 속성 age가 있더라도 할당이 가능하다. 즉 초과 속성이 허락된다.
const testName: TName = iu; // name 프로퍼티만 할당되지 않음
const testAge: TAge = iu; // age 프로퍼티만 할당되지 않음

// 각 타입에 해당하는 프로퍼티만 할당되지 않는 이유
//    타입은 타입스크립트에만 존재하는 문법
//    자바스크립트 코드로 컴파일되어 실행되면 실제 객체가 할당되는 것은 변하지 않음(코드 동작이 변하는 것이 아님)

console.log({ testName, testAge });
// {
//   testName: { name: '아이유', age: 30 },
//   testAge: { name: '아이유', age: 30 }
// }
