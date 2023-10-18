/**
 * unknown type
 */

// unknown 타입은 any 타입과 유사하지만 조금 더 엄격함

// any 타입의 변수에는 어떤 타입의 값도 할당 가능
let anyVar: any;
anyVar = 10;
anyVar = "iu";
anyVar = false;
anyVar = [];
anyVar = {};
anyVar = null;
anyVar = undefined;

// unknown 타입의 변수에도 어떤 타입의 값도 할당 가능
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "iu";
unknownVar = false;
unknownVar = [];
unknownVar = {};
unknownVar = null;
unknownVar = undefined;

// unknown 타입과 any 타입의 차이는 할당에 있음
// any 타입의 변수의 값은 어떤 타입의 변수에도 할당 가능
let anyType: any = anyVar;
let unknownType: unknown = anyVar;
let boolType: boolean = anyVar;
let arrayType: string[] = anyVar;
let objectType: {} = anyVar;
let nullType: null = anyVar;
let undefinedType: undefined = anyVar;

// unknown 타입의 변수의 값은 할당 불가능한 타입이 존재
//    any, unknown 타입의 변수에는 할당 가능, 나머지는 할당 불가능
let anyType2: any = unknownVar;
let unknownType2: unknown = unknownVar;
let boolType2: boolean = unknownVar; // 에러
let arrayType2: string[] = unknownVar; // 에러
let objectType2: {} = unknownVar; // 에러
let nullType2: null = unknownVar; // 에러
let undefinedType2: undefined = unknownVar; // 에러

// any 타입 런타임 에러
//    타입스크립트는 any 타입의 경우 모두 실행 가능하다고 판단
anyVar.toUpperCase();
anyVar.name;
new anyVar();

// unknown 타입 컴파일 에러
//    타입스크립트는 unknown 타입의 변수에 알 수 없는 값이 있다는 것을 인지하므로 컴파일 에러를 발생시킴
unknownVar.toUpperCase();
unknownVar.name;
new unknownVar();

// unknown type predicate
function isString(target: unknown): target is string {
  return typeof target === "string";
}

let testVal: unknown;
if (isString(testVal)) {
  testVal; // string 타입: unknown 타입에 대해서도 내로잉 가능
} else {
  testVal;
}

// unknown union type
// unknown 타입을 유니온에서 사용하면 any 타입을 제외하고 항상 unknown 타입으로 유추됨
type unknownOrString = unknown | string; // unknown 타입
type unknownOrBool = unknown | boolean; // unknown 타입
type unknownOrNumber = unknown | number; // unknown 타입
type unknownOrAny = unknown | any; // any 타입
type anyOrUnknown = any | unknown; // any 타입

// unknown intersection type
// unknown 타입을 인터섹션에서 사용하면 unknown 타입이 아닌 다른 타입으로 유추됨
type unknownAndString = unknown & string; // string 타입
type unknownAndBool = unknown & boolean; // boolean 타입
type unknownAndNumber = unknown & number; // number 타입
type unknownAndAny = unknown & any; // any 타입
type anyAndUnknown = any & unknown; // any 타입

// operator 사용
let num1: unknown = 10;
let num2: unknown = 20;
// num1 + num2; // 에러: 알 수 없는 값임을 인지하므로 연산자 사용 불가능
// num1 - num2; // 에러: 알 수 없는 값임을 인지하므로 연산자 사용 불가능
// num1 * num2; // 에러: 알 수 없는 값임을 인지하므로 연산자 사용 불가능
// num1 / num2; // 에러: 알 수 없는 값임을 인지하므로 연산자 사용 불가능

// 값 비교는 가능
num1 === num2;
num1 == num2;
num1 !== num2;
num1 != num2;
