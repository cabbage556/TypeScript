/**
 * Type Inference(타입 추론)
 */
// string 타입을 선언하지 않았지만 TS는 할당된 값의 타입을 통해 string 타입임을 추론함
let stringType = "string";
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = 10; // boolean 타입의 변수이므로 number 타입의 값을 할당할 수 없음

// constStringType은 string 타입이지만 'const string' 타입으로 선언됨
// const는 초기화 시 입력한 값을 변경할 수 없기 때문에 좀 더 구체적으로 타입을 추론
const constStringType = "const string";

// constStringType처럼 각각 true, 20 타입으로 선언됨
const constBooleanType = true;
const constNumberType = 20;

let yuJin = {
  name: "안유진",
  year: 2003,
};

// 객체의 경우 const로 선언하여도 name 프로퍼티의 타입과 year 프로퍼티의 타입이 각각 '안유진', 2003으로 선언되지 않는다.
const yuJin2 = {
  name: "안유진",
  year: 2003,
};

// 객체의 프로퍼티를 다른 값으로 변경 가능하다.
yuJin2.name = "밖유진";
yuJin2.year = 2004;

// 객체의 프로퍼티가 구체적으로 특정 값 타입으로 선언되도록 하려면 캐스팅 필요
const yuJin3 = {
  name: "안유진" as const, // '안유진' 값을 const로 캐스팅: name 프로퍼티의 타입이 '안유진'으로 추론됨
  year: 2003 as const, // 2003 값을 const로 캐스팅: year 프로퍼티의 타입이 2003으로 추론됨
};

// name 프로퍼티, year 프로퍼티의 값을 변경할 수 없음
// yuJin3.name = '밖유진';
// yuJin3.year = 2004;

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5]; // number[]으로 추론됨
let numbersOrStrings = [1, 2, 3, "4", "5", "6"]; // (number | string)[]으로 추론됨

numbers.push(6);
// numbers.push("6"); // number[] 타입의 배열 numbers에 문자열 삽입 불가능

numbersOrStrings.push(6);
numbersOrStrings.push("6"); // (number | string)[] 타입이므로 숫자, 문자열 모두 삽입 가능

const number = numbers[0]; // number로 추론됨
const nOs = numbersOrStrings[0]; // number | string으로 추론됨

// 🔴 배열에선 인덱스를 넘어가는 요소에 접근할 수 있음
const nOs2 = numbersOrStrings[100];

// tuple
const twoNumbers = [1, 3] as const; // [1, 3] 타입으로 추론됨

// twoNumbers의 값을 변경하거나 삽입할 수 없음
// twoNumbers[0] = 10;
// twoNumbers.push(4);

const first = twoNumbers[0]; // 1로 추론됨
const second = twoNumbers[1]; // 3으로 추론됨

// 🔴 tuple에선 인덱스를 넘어가는 요소에 접근할 수 없음
// const third = twoNumbers[2];
