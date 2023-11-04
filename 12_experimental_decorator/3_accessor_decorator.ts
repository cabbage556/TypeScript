/**
 * accessor decorator
 */
class Rectangle {
  #height: number;
  #width: number;

  constructor(height: number, width: number) {
    this.#height = height;
    this.#width = width;
  }

  // 액세서 데코레이터는 액세서 선언 직전에 선언함
  @Log
  @Configurable(false)
  get height() {
    return this.#height;
  }

  // 액세서 데코레이터는 액세서 선언 직전에 선언함
  @Log
  @Configurable(true)
  get width() {
    return this.#width;
  }
}

/**
 * 액세서 데코레이터의 파라미터 3가지(메서드 데코레이터와 동일함)
 * @param target 스태틱 메서드의 경우 클래스의 생성자 함수를, 인스턴스 메서드의 경우 클래스의 프로토타입을 가리킴
 * @param propertyKey  메서드의 이름(프로퍼티의 키)
 * @param descriptor 프로퍼티 어트리뷰트(value, writable, enumerable, configurable) 정보를 담고 있는 프로퍼티 디스크립터
 */
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("-----target-----");
  console.log(target);
  console.log("-----propertyKey-----");
  console.log(propertyKey);
  console.log("-----descriptor-----");
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

const rect = new Rectangle(10, 20);
console.log("-----Object.getOwnPropertyDescriptors(Rectange.prototype)-----");
console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
// {
//   constructor: {
//     value: [class Rectangle],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   height: {
//     get: [Function: get height],
//     set: undefined,
//     enumerable: false,
//     configurable: false // @Configurable(false) 데코레이터에 의해 configurable 프로퍼티 어트리뷰트의 값이 false로 설정됨
//   },
//   width: {
//     get: [Function: get width],
//     set: undefined,
//     enumerable: false,
//     configurable: true, // @Configurable(true) 데코레이터에 의해 configurable 프로퍼티 어트리뷰트의 값이 true로 설정됨
//   }
// }
