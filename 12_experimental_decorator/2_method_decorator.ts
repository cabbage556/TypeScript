/**
 * Method decorator
 */
class Idol {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // 클래스 데코레이터와 마찬가지로 클래스 선언이 읽힐 때 한 번만 실행됨
  @TestMethodDecorator
  @Configurable(false) // configurable 프로퍼티 어트리뷰트를 false로 설정
  @MethodCallLogger("PROD")
  dance() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

// 메서드 데코레이터의 경우 세 가지 파라미터가 필요함
function TestMethodDecorator(
  target: any, // static 메서드에 사용할 경우 생성자 함수가 됨, 인스턴스 메서드의 경우 인스턴스의 프로토타입이 됨
  propertyKey: string, // 메서드 이름
  descriptor: PropertyDescriptor // 프로퍼티 어트리뷰트(value, writable, enumerable, configurable)
) {
  console.log(`LogCall`);
  console.log("--------target--------");
  console.log(target);
  console.log("--------propertyKey--------");
  console.log(propertyKey);
  console.log("--------descriptor--------");
  console.log(descriptor);
}

function Configurable(configurable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = configurable;
  };
}

function MethodCallLogger(env: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originMethod = descriptor.value; // 원래 메서드

    // 기존 메서드의 동작을 다른 함수로 대체
    descriptor.value = function (...args: any[]) {
      console.log(`[${env}] running function: ${propertyKey}`);

      // 원래 메서드를 this 바인딩하여 호출
      return originMethod.apply(this, ...args);
    };
  };
}

// 인스턴스를 생성해도 메서드 데코레이터는 실행되지 않음
const yujin = new Idol("안유진");

console.log(
  "--------Object.getOwnPropertyDescriptors(Idol.prototype)-----------"
);
console.log(Object.getOwnPropertyDescriptors(Idol.prototype));
// {
//   constructor: {
//     value: [class Idol],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   dance: {
//     value: [Function (anonymous)], // @MethodCallLogger('PROD') 데코레이터에 의해 value 프로퍼티 어트리뷰트가 dance 메서드가 아닌 다른 함수로 대체되었음
//     writable: true,
//     enumerable: false,
//     configurable: false // @Configurable(false) 데코레이터에 의해 configurable 프로퍼티 어트리뷰트가 false로 설정됨
//   }
// }

console.log("--------yujin.dance()-----------");
// 메서드를 호출해도 메서드 데코레이터는 실행되지 않음
console.log(yujin.dance());
// [PROD] running function: dance
// 안유진이 춤을 춥니다.
