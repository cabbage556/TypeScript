/**
 * reflection metadata
 */
import "reflect-metadata";

const iu = {
  name: "아이유",
  age: 30,
  nationality: "Korea",
};

/**
 * 메타데이터 정의
 * 파라미터 설명
 * 1. 메타데이터 키
 * 2. 메타데이터 키에 저장할 값
 * 3. 메타데이터를 저장할 객체
 * 4. 메타데이터를 저장할 객체의 프로퍼티(필수 아님)
 *
 * 메타데이터가 무엇인가?
 *    데이터에 대한 데이터를 의미함
 */

/**
 * 객체에 메타데이터 저장하기
 * Reflect.defineMetadata('key', value, 객체)
 */
// iu 객체 자체에 'test-meta'를 키로, 123을 값으로 갖는 메타데이터를 정의
Reflect.defineMetadata("test-meta", 123, iu);

// 자바스크립트 객체에서는 메타데이터를 확인할 수 없고, reflect-metadata 라이브러리를 통해 메타데이터 확인 가능
console.log(iu);
console.log(Reflect.getMetadata("test-meta", iu)); // 123: iu 객체 자체에 'test-meta'를 키로 정의한 메타데이터를 가져오기

// iu 객체 자체에 정의했던 'test-meta' 키의 값을 456으로 재정의
Reflect.defineMetadata("test-meta", 456, iu);
console.log(Reflect.getMetadata("test-meta", iu)); // 456: iu 객체 자체에 'test-meta'를 키로 정의한 메타데이터가 재정의되었음

// iu 객체 자체에 'test-meta2'를 키로, 789를 값으로 갖는 메타데이터를 정의
Reflect.defineMetadata("test-meta2", 789, iu);
console.log(Reflect.getMetadata("test-meta2", iu)); // 789

// 다른 메타데이터를 추가해도 기존의 메타데이터가 사라지지 않음
console.log(Reflect.getMetadata("test-meta", iu)); // 456

// iu 객체 자체에 정의했던 'test-meta2' 키의 값을 { name: 'codefactory' }로 재정의
Reflect.defineMetadata("test-meta2", { name: "codefactory" }, iu); // 객체를 값으로 저장할 수 있음
console.log(Reflect.getMetadata("test-meta2", iu)); // { name: 'codefactory' }

/**
 * 프로퍼티에 저장하기
 * Reflect.defineMetadata('key', value, 객체, 객체의 프로퍼티 키)
 */
Reflect.defineMetadata("object-meta", 999, iu, "name"); // iu 객체의 name 프로퍼티에 메타데이터 정의
console.log(Reflect.getMetadata("object-meta", iu, "name")); // 999

/**
 * 메타데이터 삭제하기
 * Reflect.deleteMetadata('key', 객체)
 * Reflect.deleteMetadata('key', 객체, 객체의 프로퍼티 키)
 */
Reflect.deleteMetadata("test-meta2", iu);
console.log(Reflect.getMetadata("test-meta2", iu)); // undefined
Reflect.deleteMetadata("object-meta", iu, "name");
console.log(Reflect.getMetadata("object-meta", iu, "name")); // undefined

/**
 * 메타데이터 존재 여부 확인하기
 * Reflect.hasMetadata('key', 객체)
 * Reflect.hasMetadata('key', 객체, 객체의 프로퍼티 키)
 */
console.log(Reflect.hasMetadata("test-meta", iu)); // true
console.log(Reflect.hasMetadata("test-meta2", iu)); // false
console.log(Reflect.hasMetadata("object-meta", iu, "name")); // false

/**
 * 모든 메타데이터 키 가져오기
 * Reflect.getMetadataKeys(객체)
 * Reflect.getMetadataKeys(객체, 객체의 프로퍼티 키)
 */
console.log(Reflect.getMetadataKeys(iu)); // ['test-meta']
console.log(Reflect.getMetadataKeys(iu, "name")); // []

/**
 * 자기 자신의 모든 메타데이터 키 가져오기
 * Reflect.getMetadataKeys(객체): 객체의 프로토타입 체인에서 모든 메타데이터의 키를 가져오기
 * Reflect.getOwnMetadataKeys(객체): 객체 자신의 모든 메타데이터의 키를 가져오기
 */
Reflect.defineMetadata(
  "prototype-data",
  "프로토타입 메타",
  Object.getPrototypeOf(iu) // iu 객체의 프로토타입에 메타데이터 정의
);
// iu 객체의 프로토타입 체인 확인하기
console.log(Reflect.getMetadataKeys(iu)); // ['test-meta', 'prototype-data']: 프로토타입 체인에서 모든 메타데이터의 키를 가져옴
console.log(Reflect.hasOwnMetadata("prototype-data", Object.prototype)); // true

console.log(Reflect.getOwnMetadataKeys(iu)); // ['test-meta']: 자기 자신의 모든 메타데이터의 키를 가져옴
console.log(Reflect.hasOwnMetadata("prototype-data", iu)); // false: iu 객체 자체에는 'prototype-data' 키에 해당하는 메타데이터가 존재하지 않음
