/**
 * Class decorator
 */
@Test
@Frozen
@LogTest("PROD")
@ChangeClass
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Idol 클래스가 constructor 파라미터에 입력됨
function Test(constructor: Function) {
  console.log(constructor);
}

// Idol 클래스가 constructor 파라미터에 입력됨
function Frozen(constructor: Function) {
  // 클래스(생성자 함수)와 프로토타입(생성자 함수의 프로토타입) 동결
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

// decorator factory
//    데코레이터 적용 시 아규먼트를 전달할 수 있음
function LogTest(env: string) {
  // 실제 데코레이터로 사용할 함수 반환
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor}가 실행됐습니다.`);
  };
}

console.log("------------------------------------");

// 인스턴스를 생성해도 데코레이터가 한 번 더 실행되지 않음
// 데코레이터는 클래스 선언이 읽힐 때 딱 한 번만 실행됨
const yujin = new Idol("안유진", 20);
console.log(Object.isFrozen(Object.getPrototypeOf(yujin).constructor)); // yujin 인스턴스의 생성자 함수가 동결됨
console.log(Object.isFrozen(Object.getPrototypeOf(yujin))); // yujin 인스턴스의 프로토타입이 동결됨

console.log("------------------------------------");

// 인스턴스를 생성해도 데코레이터가 한 번 더 실행되지 않음
// 데코레이터는 클래스 선언이 읽힐 때 딱 한 번만 실행됨
const wonyoung = new Idol("장원영", 19);

// T: 인스턴스화가 가능한 형태의 생성자 함수임을 나타내는 제네릭 타입
function ChangeClass<T extends { new (...args: any[]): {} }>(constructor: T) {
  // constructor 파라미터를 상속하는 클래스 리턴
  return class extends constructor {
    groupName = "아이브";

    constructor(...params: any[]) {
      super(...params);

      // 인스턴스 생성 시 출력
      console.log("constructor instantiated");
    }
  };
}

console.log(yujin); // groupName 프로퍼티가 추가되었음
console.log(wonyoung); // groupName 프로퍼티가 추가되었음
