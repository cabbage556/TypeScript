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

  @Configurable(false)
  get height() {
    return this.#height;
  }

  @Configurable(true)
  get width() {
    return this.#width;
  }
}

// 액세서 데코레이터
//    세 가지 파라미터 모두 메서드 데코레이터와 동일함
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
