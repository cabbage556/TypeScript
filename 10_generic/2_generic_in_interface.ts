/**
 * Generic 인터페이스에서 사용하기
 */
interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

// 제네릭 타입을 string으로 사용
const cache1: Cache<string> = {
  data: ["data1", "data2"], // string[] 타입 할당 가능
  lastUpdate: new Date(),
};

// 컴파일 에러
// 인터페이스에서 제네릭 타입은 유추되지 않음
const cache2: Cache = {
  data: [1, 2, 3],
  lastUpdate: new Date(),
};

// 기본 제네릭 타입 할당 가능
//    제네릭 타입을 할당하지 않으면 string 타입을 제네릭 타입으로 사용
interface DefaultGeneric<T = string> {
  data: T[];
}

// 기본 제네릭 타입 string 사용
const cache3: DefaultGeneric = {
  data: ["data1", "data2"], // string[] 타입 할당 가능
};
