/**
 * never: '일어날 수 없는'
 */

// 1. 함수에서 에러를 던질 때
function throwError(): never {
  throw Error();
}

// 2. 무한 루프
function infiniteLoop(): never {
  while (true) {}
}

// 3. 존재할 수 없는 인터섹션
type StrAndNum = string & number; // string 타입이면서 number 타입이 될 수 없음

// never 타입에는 어떤 값도 할당 불가능
let neverType: never = 10;
let neverType2: never = null;
let neverType3: never = undefined;
