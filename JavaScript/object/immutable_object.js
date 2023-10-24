/**
 * Immutable object
 */
const yujin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

/**
 * Extensible: 확장 가능 여부
 *
 * 가장 낮은 불변 객체 등급
 */
console.log(Object.isExtensible(yujin)); // true(기본값): 객체 확장이 가능함

yujin.position = "보컬";
console.log(yujin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: '보컬' }

// 확장할 수 없는 객체로 만들기
Object.preventExtensions(yujin);

console.log(Object.isExtensible(yujin)); // false: 객체 확장이 불가능함

// 에러가 발생하지 않지만 객체가 확장 불가능하므로 프로퍼티가 추가되지 않음
yujin.groupName = "아이브";
console.log(yujin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: '보컬' }

// 확장이 불가능하더라도 프로퍼티를 삭제할 수는 있음
delete yujin.position;
console.log(yujin); // { name: '안유진', year: 2003, age: [Getter/Setter] }

/**
 * Seal: 객체 봉인
 *
 * 중간 불변 객체 등급
 * 객체를 봉인하는 것은 프로퍼티 어트리뷰트 configurable을 false로 설정하는 것과 같음
 */
const yujin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isSealed(yujin2)); // false(기본값): 객체가 봉인이 되어 있지 않음

// 객체 봉인하기
Object.seal(yujin2);
console.log(Object.isSealed(yujin2)); // true: 객체가 봉인됨

// 객체가 봉인되어 groupName 프로퍼티가 추가되지 않음
yujin2.groupName = "아이브";
console.log(yujin2);

// 객체가 봉인되어 name 프로퍼티가 삭제되지 않음
delete yujin2.name;
console.log(yujin2);

// 객체 봉인 후 프로퍼티 어트리뷰트 수정
Object.defineProperty(yujin2, "name", {
  value: "밖유진",
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "name"));
// { value: '밖유진', writable: true, enumerable: true, configurable: false }
//    value 프로퍼티 어트리뷰트는 변경됨
//    configurable 프로퍼티 어트리뷰트는 기본 값이 false로 설정되어 있음

/**
 * Freezed: 객체 동결
 *
 * 가장 높은 불변 객체 등급
 * 읽기 외에 모든 기능을 불가능하게 만듬(프로퍼티 추가, 제거, 값 변경)
 */
const yujin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isFrozen(yujin3)); // false(기본값): 객체가 동결되어 있지 않음

// 객체 동결
Object.freeze(yujin3);

console.log(Object.isFrozen(yujin3)); // true: 객체가 동결됨

// 객체가 동결되어 프로퍼티 추가 불가능
yujin3.groupName = "아이브";
console.log(yujin3); // groupName 프로퍼티가 추가되지 않음

// 객체가 동결되어 프로퍼티 삭제 불가능
delete yujin3.name;
console.log(yujin3); // name 프로퍼티가 삭제되지 않음

// value 프로퍼티 어트리뷰트 변경
// 에러 발생
// TypeError: Cannot redefine property: name
// Object.defineProperty(yujin3, "name", {
//   value: "밖유진",
// });

console.log(Object.getOwnPropertyDescriptor(yujin3, "name"));
// enumerable을 제외하고 false로 설정되어 있음
// {
//   value: '안유진',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }

/**
 * 상위 객체를 동결하더라도 하위 중첩 객체는 동결되지 않음(확장, 봉인 모두 마찬가지)
 * 하위 중첩 객체 모두 동결하려면 재귀 함수 등을 통해 하위 중첩 객체까지 직접 동결해야 함
 */
const yujin4 = {
  name: "안유진",
  year: 2003,
  // 중첩 객체
  wonyoung: {
    name: "장원영",
    year: 2004,
  },
};

// yujin4 객체 동결
Object.freeze(yujin4);
console.log(Object.isFrozen(yujin4)); // true: yujin4 객체가 동결됨
console.log(Object.isFrozen(yujin4.wonyoung)); // false: 중첩 객체는 동결되지 않음
