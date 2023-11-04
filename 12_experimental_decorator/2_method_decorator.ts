/**
 * Method decorator
 */
class Idol {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // 메서드 데코레이터는 메서드 선언 직전에 선언함
  // 메서드 데코레이터는 메서드의 프로퍼티 디스크립터에 적용됨
  // 클래스 데코레이터와 마찬가지로 클래스 선언이 읽힐 때 한 번만 실행됨
  @TestMethodDecorator
  @Configurable(false) // configurable 프로퍼티 어트리뷰트를 false로 설정
  @MethodCallLogger("PROD")
  dance() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

/**
 * 메서드 데코레이터의 파라미터 3가지
 * @param target 스태틱 메서드의 경우 클래스의 생성자 함수를, 인스턴스 메서드의 경우 클래스의 프로토타입을 가리킴
 * @param propertyKey  메서드의 이름(프로퍼티의 키)
 * @param descriptor 프로퍼티 어트리뷰트(value, writable, enumerable, configurable) 정보를 담고 있는 프로퍼티 디스크립터
 */
function TestMethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`LogCall`);
  console.log("--------target--------");
  console.log(target); // {}: 클래스의 프로토타입
  console.log("--------propertyKey--------");
  console.log(propertyKey); // dance: 메서드 이름
  console.log("--------descriptor--------");
  console.log(descriptor); // 프로퍼티 디스크립터
}

// 데코레이터 팩토리
// configurable 파라미터에 전달된 아규먼트로 현재 메서드의 configurable 프로퍼티 어트리뷰트를 수정함
function Configurable(configurable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // 프로퍼티 어트리뷰트 configurable 수정
    descriptor.configurable = configurable;
  };
}

function MethodCallLogger(env: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originMethod = descriptor.value; // 원래 메서드 저장

    // 기존 메서드의 동작을 다른 함수로 대체
    descriptor.value = function (...args: any[]) {
      // 메서드 실행 로그 남기기
      console.log(`[${env}] running function: ${propertyKey}`);

      // 원래 메서드를 this 바인딩하여 호출한 결과 리턴
      return originMethod.apply(this, ...args);
    };
  };
}

// 인스턴스를 생성해도 메서드 데코레이터는 실행되지 않음
const yujin = new Idol("안유진");

console.log("-----Object.getOwnPropertyDescriptors(Idol.prototype)-----");
console.log(Object.getOwnPropertyDescriptors(Idol.prototype)); // Idol 클래스의 프로토타입의 프로퍼티 디스크립터 확인
// {
//
//   ⭐️constructor 프로퍼티의 프로퍼티 어트리뷰트⭐️
//   constructor: {
//     value: [class Idol],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//
//   ⭐️dance 프로퍼티의 프로퍼티 어트리뷰트⭐️
//   dance: {
//     value: [Function (anonymous)], // @MethodCallLogger('PROD') 데코레이터에 의해 value 프로퍼티 어트리뷰트가 dance 메서드가 아닌 다른 함수로 대체되었음
//     writable: true,
//     enumerable: false,
//     configurable: false // @Configurable(false) 데코레이터에 의해 configurable 프로퍼티 어트리뷰트가 false로 설정됨
//   }
// }

console.log("-----yujin.dance()-----");
// 메서드를 호출해도 메서드 데코레이터는 실행되지 않음
console.log(yujin.dance());
// [PROD] running function: dance
// 안유진이 춤을 춥니다.
