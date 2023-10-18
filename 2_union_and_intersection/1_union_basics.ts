/**
 * Union Basics
 *
 * 유니온은 TS에서 타입을 병합할 수 있는 수많은 방법 중 하나이다.
 */
// string 또는 boolean 타입을 StringOrBoolean 이라는 이름의 타입으로 선언
type StringOrBoolean = string | boolean;

// string 또는 boolean 타입의 값을 할당 가능
let stringOrBooleanType: StringOrBoolean = "아이브";
stringOrBooleanType = true;

// 컴파일 에러
//    undefined는 undefined 타입의 값이므로 할당할 수 없음
// stringOrBooleanType = undefined;

// 유니온으로 타입을 계속 추가할 수 있음
type StrBoolNullType = string | boolean | null;

// 또는 문자열 리터럴을 사용할 수도 있음
type StateTypes = "DONE" | "LOADING" | "ERROR";
let state: StateTypes = "DONE";
state = "LOADING";

// 컴파일 에러
//    StateTypes 타입에 'INITIAL'이라는 문자열 리터럴이 존재하지 않음
// state = "INITIAL";

/**
 * 리스트의 유니온
 */

// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];
let strListOrBooleanList: StringListOrBooleanList = [
  "아이유",
  "김고은",
  "박소담",
];
strListOrBooleanList = [true, false, true];

// 컴파일 에러
//    string으로 구성된 리스트이거나 boolean으로 구성된 리스트여야 함
// strListOrBooleanList = ["아이유", true, false, "김고은"];

// string 또는 number로 구성된 리스트
//    string으로 구성된 리스트 또는 number로 구성된 리스트를 의미하는 것이 아님
type StrOrNumberList = (string | number)[];
let stringOrNumberList: StrOrNumberList = ["아이유", 1, 2, 3, "레드벨벳"];
stringOrNumberList = [1, 2, 3];
stringOrNumberList = ["아이유", "레드벨벳"];

/**
 * Interface로 사용하는 유니온
 */
interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}
type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: "아이유",
  age: 30,
  address: "대한민국",
};

// animalOrHuman은 Human 타입임을 확인할 수 있음
// TS는 address 프로퍼티를 보고 Human 타입으로 추론함
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);

animalOrHuman = {
  name: "오리",
  age: 3,
};

// 이제 animalOrHuman은 Animal 타입임을 확인할 수 있음
// animalOrHuman에 address 프로퍼티가 존재하지 않기 때문
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);

// 컴파일 에러
//    TS는 animalOrHuman을 Animal로 추론하므로 address 프로퍼티가 존재하지 않는 것을 알 수 있음
// console.log(animalOrHuman.address);

// 캐스팅으로 발생하는 버그
console.log((animalOrHuman as Human).address); // undefined

/**
 * 타입을 선언하는 것이 좋은 이유
 */

// 타입을 선언하지 않고 직접 변수의 타입 선언부에 인터페이스를 넣음
let animalOrHuman2:
  | {
      name: string;
      age: number;
    }
  | {
      name: string;
      age: number;
      address: string;
    } = {
  name: "아이유",
  age: 30,
  address: "대한민국",
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.address);

animalOrHuman2 = {
  name: "오리",
  age: 4,
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 컴파일 에러
//    address 프로퍼티는 { name: string; age: number; } 타입에 존재하지 않는다는 에러 메세지 확인 가능
//    타입 이름이 아니라 변수 선언부에 선언한 인터페이스의 형태로 에러 메세지를 출력하므로 에러 메세지의 가독성이 좋지 않음
//    따라서 타입을 쉽게 파악할 수 있도록 타입을 선언하는 것이 유용함
console.log(animalOrHuman2.address);

/**
 * 서로 관계가 없는 타입을 유니온으로 선언하면?
 */
type Person = {
  name: string;
  age: number;
};
type Cat = {
  breed: string;
  country: string;
};
type PersonOrCat = Person | Cat;

// Person, Cat 타입 모두 사용 가능
//    TS에서 유니온은 집합의 개념 중 합집합의 개념으로 생각할 수 있음
//    Person 또는 Cat 타입 중 하나의 타입을 충족하는 경우 다른 타입에서 0개 이상의 프로퍼티를 추가할 수 있음
//    예를 들어 name, age 프로퍼티를 모두 가져서 Person 타입을 충족하는 경우 Cat 타입의 프로퍼티를 0개 이상 가질 수 있다는 의미
//    다만 어떤 하나의 타입도 충족하지 못하는 경우에는 에러가 발생함
const personOrCat: PersonOrCat = {
  name: "아이유",
  age: 30,
  breed: "House",
  // country: "대한민국",
};
personOrCat;
