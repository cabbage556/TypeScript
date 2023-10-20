/**
 * Generic in function
 */
function whatValue(value: any) {
  return value;
}

const value = whatValue("test");

// any 타입의 파라미터를 받지만 아규먼트의 실제 타입으로 리턴하게 하기
// <T> : 함수에서 제네릭 타입 T를 사용한다는 선언
function genericWhatValue<T>(value: T): T {
  return value;
}

// string을 제네릭 타입으로 사용해 함수 호출
//    제네릭 타입은 string으로 대체됨
const result1 = genericWhatValue<string>("test"); // 반환 타입: string
const result2 = genericWhatValue<number>(123); // 반환 타입: number

// 아규먼트의 타입에 따라 제네릭 타입이 유추됨
const result3 = genericWhatValue(19); // 반환 타입: 19(const이므로)
let result4 = genericWhatValue("123"); // 반환 타입: string

// 여러 제네릭 타입 사용 가능
function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
    x,
    y,
    z,
  };
}

const multipleGenericsResult1 = multipleGenerics<number, boolean, string>(
  1,
  false,
  "1"
);
const multipleGenericsResult2 = multipleGenerics(1, false, "1"); // 여러 제네릭 타입도 유추됨

// 튜플 반환 함수
function getTuple<X, Y>(value1: X, value2: Y) {
  return [value1, value2] as const;
}
const tuple1 = getTuple(true, 100); // 반환 타입: readonly [boolean, number]

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

// 인스턴스 생성 함수: 제네릭 사용
// 제네릭 타입 T는 { new (...args: any[]): {} }를 상속
// { new (...args: any[]): {} }: 파라미터의 갯수는 제한 없이 받을 수 있고 객체 타입을 반환하는 객체(9_class의 5_interface 참고)
function instantiator<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}

console.log(instantiator(Idol, "아이유", 32));
console.log(instantiator(Car, "BMW", 111));
