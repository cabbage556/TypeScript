/**
 * Property attribute
 *
 * JS 엔진은 프로퍼티 생성 시 프로퍼티의 상태를 표현하는 프로퍼티 어트리뷰트를 기본값으로 자동 정의함
 */

const yujin = {
  name: "안유진",
  year: 2003,
};

// Object.getOwnPropertyDescriptor 메서드를 사용하면 객체의 프로퍼티에 대한 프로퍼티 디스크립터 객체를 얻을 수 있음
// 프로퍼티 디스크립터 객체: 프로퍼티 어트리뷰트 정보를 제공하는 객체
console.log(Object.getOwnPropertyDescriptor(yujin, "year"));
// year 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체
//     ➡️ { value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * 객체에 대해 섬세한 작업이 필요할 경우 프로퍼티 어트리뷰트를 적극 활용 가능
 * 4가지 프로퍼티 어트리뷰트가 존재함
 *
 * 1. value: 프로퍼티의 실제 값
 * 2. writable: 프로퍼티의 값 수정 여부
 *              true인 경우 프로퍼티의 값 수정 가능
 *              false인 경우 프로퍼티의 값 수정 불가능
 * 3. enumerable: 프로퍼티 열거 가능 여부
 *                true인 경우 for...in 반복문 등을 통해 해당 프로퍼티 열거 가능
 *                false인 경우 for...in 반복문 등을 통해 해당 프로퍼티 열거 불가능
 * 4. configurable: 프로퍼티 어트리뷰트의 재정의 가능 여부
 *                  true인 경우 해당 프로퍼티의 삭제, 다른 프로퍼티 어트리뷰트의 수정 가능
 *                  false인 경우 해당 프로퍼티의 삭제, 다른 프로퍼티 어트리뷰트의 수정 불가능
 *                  단 writable이 true인 경우 값 변경과 writable을 변경하는 건 가능함
 */

console.log(Object.getOwnPropertyDescriptor(yujin, "name"));
// { value: '안유진', writable: true, enumerable: true, configurable: true }

// Object.getOwnPropertyDescriptors 메서드를 사용하면 객체의 모든 프로퍼티에 대한 프로퍼티 디스크립터 객체를 얻을 수 있음
console.log(Object.getOwnPropertyDescriptors(yujin));
// {
//   name: { value: '안유진', writable: true, enumerable: true, configurable: true },
//   year: { value: 2003, writable: true, enumerable: true, configurable: true }
// }

const yujin2 = {
  name: "안유진",
  year: 2003,

  // 액세서 프로퍼티: getter
  get age() {
    return new Date().getFullYear() - this.year;
  },

  // 액세서 프로퍼티: setter
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yujin2);
// { name: '안유진', year: 2003, age: [Getter/Setter] }

// getter, setter 동작 확인
console.log(yujin2.age); // 20
yujin2.age = 32;
console.log(yujin2.age); // 32
console.log(yujin2.year); // 1991

// 액세서 프로퍼티의 어트리뷰트 확인
console.log(Object.getOwnPropertyDescriptor(yujin2, "age"));
// 일반적인 프로퍼티와 달리 액세서 프로퍼티에는 get, set 어트리뷰트가 존재함
// {
//   get: [Function: get age], // getter 접근자 함수
//   set: [Function: set age], // setter 접근자 함수
//   enumerable: true,
//   configurable: true
// }

// 객체에 프로퍼티를 추가하는 일반적인 방법
yujin2.height = 172;
console.log(yujin2);
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));
// { value: 172, writable: true, enumerable: true, configurable: true }

// 프로퍼티 어트리뷰트의 값을 할당하면서 프로퍼티를 추가하는 방법(Object.defineProperty)
Object.defineProperty(yujin2, "height2", {
  value: 172,
  writable: false,
  enumerable: true,
  configurable: false,
});
console.log(yujin2);
// {
//   name: '안유진',
//   year: 1991,
//   age: [Getter/Setter],
//   height: 172,
//   height2: 172
// }

// height2 프로퍼티를 추가할 때 정의한 대로 프로퍼티 어트리뷰트 값이 할당됨
console.log(Object.getOwnPropertyDescriptor(yujin2, "height2"));
// { value: 172, writable: false, enumerable: true, configurable: false }

// 프로퍼티 어트리뷰트의 값을 직접 할당하지 않으면 기본적으로 false가 할당됨
Object.defineProperty(yujin2, "height3", {
  value: 172,
});

console.log(Object.getOwnPropertyDescriptor(yujin2, "height3"));
// { value: 172, writable: false, enumerable: false, configurable: false }

Object.defineProperty(yujin2, "height4", {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});

yujin2.height4 = 180; // writable: true
console.log(yujin2.height4); // 180

/**
 * writable
 */
// height4 프로퍼티의 writable을 false로 수정하기
Object.defineProperty(yujin2, "height4", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yujin2, "height4"));
// { value: 180, writable: false, enumerable: true, configurable: true }

yujin2.height4 = 172; // 에러는 발생하지 않음
console.log(yujin2.height4); // 180: height4 프로퍼티의 값이 변경되지 않음(writable: false)

/**
 * enumerable
 */
console.log(Object.keys(yujin2));
// [ 'name', 'year', 'age', 'height', 'height2', 'height4' ]
// height4 프로퍼티 키 포함

// 모든 키 순회
for (const key in yujin2) {
  console.log(key);
}

// height4 프로퍼티의 enumerable을 false로 수정하기
Object.defineProperty(yujin2, "height4", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yujin2, "height4"));
// { value: 180, writable: false, enumerable: false, configurable: true }

console.log(Object.keys(yujin2));
// [ 'name', 'year', 'age', 'height', 'height2' ]
// height4 프로퍼티 키가 포함되지 않음

// height4 키를 제외하고 순회됨
for (const key in yujin2) {
  console.log(key);
}

console.log(yujin2);
// {
//   name: '안유진',
//   year: 1991,
//   age: [Getter/Setter],
//   height: 172,
//   height2: 172
// }
// height4 프로퍼티가 포함되지 않음

console.log(yujin2.height4); // 180: height4 프로퍼티가 사라진 것은 아님. 다만 열거할 수 없음

/**
 * configurable
 */
// height 프로퍼티의 configurable을 false로 변경
Object.defineProperty(yujin2, "height", {
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));
// { value: 172, writable: true, enumerable: true, configurable: false }

// height 프로퍼티의 configurable이 false인 상태에서 enumerable을 false로 변경
// 에러 발생
// TypeError: Cannot redefine property: height
// configurable이 false이므로 프로퍼티 어트리뷰트를 재정의할 수 없음
Object.defineProperty(yujin2, "height", {
  enumerable: false,
});

// configurable이 false인 상태에서 writable이 true이면 프로퍼티 값 변경과 writable 수정이 가능함
yujin2.height = 177;
console.log(yujin2.height); // 177: height 프로퍼티의 값이 변경됨

// height 프로퍼티의 writable 프로퍼티 어트리뷰트를 false로 수정
Object.defineProperty(yujin2, "height", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));
// { value: 177, writable: false, enumerable: true, configurable: false }
// writable이 false로 변경됨

// 하지만 configurable이 false인 상태에서 writable이 false이면 다시 writable을 true로 수정할 수 없음
// 에러 발생
// TypeError: Cannot redefine property: height
Object.defineProperty(yujin2, "height", {
  writable: true,
});
