/**
 * Defining Function
 */
// function printName(name) {
//   console.log(name);
// }

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `커플: ${person1}, ${person2}`;
}
console.log(returnTwoCouples("아아", "샌드위치"));
// returnTwoCouples(0, 1); // 파라미터 타입 에러
// returnTwoCouples("123"); // 파라미터 부족 에러
// returnTwoCouples("1", "2", "3"); // 파라미터 갯수 초과 에러

/**
 * Optional Parameter
 */
function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}
console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

// 파라미터 y를 옵셔널 파라미터로 선언하지 않아도 됨
//    옵셔널 파라미터의 경우 number | undefined 타입이 됨(위에서 확인하기)
//    하지만 기본값을 제공하는 경우 undefined가 될 수 없으므로 number 타입이 됨(아래에서 확인하기)
function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}
console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
function getInfiniteParams(...args: string[]) {
  return args.map((arg) => `너무 좋아 ${arg}`);
}
console.log(getInfiniteParams("아이유", "아이브", "블랙핑크"));
// console.log(getInfiniteParams(1, 2, 3)); // 매개변수 타입 에러

/**
 * Return Type
 */
function addTwoNums(x: number, y: number) {
  return x + y;
}
console.log(addTwoNums(10, 20)); // 함수 반환 타입: number(타입스크립트가 유추함 => 파라미터의 타입이 모두 number이므로)

function randomNumber() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}
randomNumber(); // 함수 반환 타입: 10 | "랜덤"(타입스크립트가 유추함)

// 직접 명시하기
function subTwoNums(x: number, y: number): number {
  // number 타입 반환을 명시했으므로 string 타입의 값을 반환할 수 없음
  // return '이건?';
  return x - y;
}

const subTwoNumsArrow = (x: number, y: number): number => {
  return x - y;
};

/**
 * 특수 반환 타입
 *
 * void / never
 */
// void: 아무 것도 없는, 공허한
function doNotReturn(): void {
  console.log("저는 반환하지 않아요");
  // void 타입 반환을 명시했으므로 number 타입의 값을 반환할 수 없음
  // return 3;

  // 이건 가능
  return;
}
doNotReturn();

// never 타입 반환을 명시하는 경우
//    반환하는 상황 자체를 만들지 않는 경우(함수가 끝나지 않는 상태)
//    함수가 끝나지 않는 상태를 만든다면 never 타입 반환 가능
function neverEndingLoop(): never {
  // 무한 루프인 경우
  while (true) {}
}

function throwError(): never {
  // 직접 에러를 던지는 경우
  throw Error();
}
