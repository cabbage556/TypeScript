/**
 * Property initialization
 */
class Person {
  // 일반적인 필수값 선언법
  name: string;

  // 초기값 제공 선언법
  //    선언과 동시에 초기화
  age: number = 20;

  // 옵셔널 값 선언법
  pet?: string;

  // type of undefined 선언법
  petAge: number | undefined;

  constructor(name: string, pet?: string) {
    // 프로퍼티 초기화(필수)
    this.name = name;

    // 옵셔널 프로퍼티 초기화(필수 아님)
    this.pet = pet;
  }
}

class RouteStack {
  // !를 사용해 객체 생성 시 프로퍼티가 무조건 초기화된다는 것을 타입스크립트에게 알려줌
  stack!: string[];

  constructor() {
    // initialize 메서드를 호출해서 stack 프로퍼티 초기화
    this.initialize();
  }

  initialize() {
    // stack 프로퍼티를 빈 배열로 초기화
    this.stack = [];
  }
}

const routeStack = new RouteStack();
console.log({ routeStack });
