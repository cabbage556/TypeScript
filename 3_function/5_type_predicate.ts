/**
 * Type Predicate
 */

// 타입을 구분하는 함수
//    input is number - type predicate
function isNumber(input: any): input is number {
  return typeof input === "number";
}
console.log(isNumber(10));

// 왜 아래처럼 작성하지 않을까?
function isNumber2(input: any): boolean {
  return typeof input === "number";
}
let number: any = 5;
if (isNumber2(number)) {
  // number 변수의 타입이 'number' 타입임을 확인했지만
  // if문 내부에서 number는 'number' 타입이 아니라 여전히 'any' 타입(정확한 타입을 유추하지 못함)
  number; // any 타입
}

// ⭐️type predicate를 사용하면 if문 내로잉 시 정확한 타입으로 유추할 수 있음
if (isNumber(number)) {
  number; // number 타입
}

interface Doge {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  // Doge 타입에만 존재하는 age에 접근했을 때 undefined가 아니라면 Doge 타입임을 알 수 있음
  //  age에 접근했을 때 undefined라면 Doge 타입이 아님
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = {
  name: "도지",
  age: 10,
};
if (isDoge(doge)) {
  doge; // Doge 타입
} else {
  doge; // never 타입 => doge에 할당된 객체는 Cat 타입이 될 수 없음(breed 프로퍼티가 존재하지 않음)
}

// 아래와 같은 경우라면 else문 내부에서 Cat 타입으로 유추됨
const doge2: DogeOrCat =
  Math.random() > 0.5
    ? {
        name: "도지",
        age: 10,
      }
    : {
        name: "길냥이",
        breed: "코리안 길냥이",
      };
if (isDoge(doge2)) {
  doge2; // Doge 타입
} else {
  doge2; // Cat 타입
}
