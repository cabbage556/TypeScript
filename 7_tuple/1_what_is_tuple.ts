/**
 * Tuple
 * 튜플은 자바스크립트에는 존재하지 않는 개념, 타입스크립트에서는 빌드 타임에서 튜플 사용을 강제할 수 있음
 */

// 배열
let ive: string[] = ["안유진", "장원영"];

// 튜플
let numberAndStringTuple: [number, string] = [1, "1"]; // 첫 번째 원소로 숫자를, 두 번째 원소로 문자열을 할당, 추가적인 원소 할당 불가능
// numberAndStringTuple = ["1", 1]; // 에러
// numberAndStringTuple = [2, "2", 3]; // 에러

numberAndStringTuple.push("아이유"); // 에러가 발생하지 않음
console.log(numberAndStringTuple); // 3개의 원소 확인 가능

// readonly 키워드를 사용하여 수정 불가능한 튜플 선언 가능
//    튜플의 정의에 맞게 튜플을 사용하려면 readonly 키워드 사용
let unmodifiableTuple: readonly [number, string] = [1, "1"];
// unmodifiableTuple.push('아이유'); // 에러

/**
 * Tuple 유추하기
 */
let actresses = ["김고은", "박소담", "전여빈"]; // string[] 유추
let actressesTuple = ["김고은", "박소담", "전여빈"] as const; // as const 캐스팅: 정확한 타입 유추 -> readonly ["김고은", "박소담", "전여빈"] 유추
const actressesTupleConst = ["김고은", "박소담", "전여빈"] as const; // as const 캐스팅: 정확한 타입 유추 -> readonly ["김고은", "박소담", "전여빈"] 유추

let stringArray: string[] = [
  ...actressesTuple, //
  ...actressesTupleConst,
];

/**
 * named tuple
 */
// named tuple을 사용해 튜플의 추가 정보 제공 가능
const namedTuple: [name: string, age: number] = ["아이유", 30]; // 첫 번째 원소로 name에 해당하는 문자열을, 두 번째 원소로 age에 해당하는 숫자를 할당

/**
 * assigning tuple to tuple
 *
 * tuple은 같은 타입끼리만 할당 가능
 */
const tuple1: [string, string] = ["아이유", "유애나"];
const tuple2: [number, number] = [1, 2];
let tuple3: [boolean, boolean] = tuple1; // 에러
let tuple4: [number, number, number] = tuple2; // 에러
let tuple5: [string, string] = tuple1; // 같은 타입의 튜플끼리만 할당 가능
let tuple6: [number, number] = tuple2;

/**
 * tuple과 array의 관계
 */
let ive2: [string, string] = ["장원영", "안유진"];
let stringArray2: string[] = ive; // 튜플을 배열에 할당 가능
let ive3: [string, string] = stringArray2; // 배열을 튜플에 할당 불가능: 배열에 할당된 원소의 갯수가 명확하지 않음(덜 구체적인 타입에서 구체적인 타입으로 할당 불가능한 개념)

/**
 * multi dimension tuple
 */
const tuple2D: [string, number][] = [
  ["아이유", 30],
  ["장원영", 20],
  ["안유진", 22],
];
