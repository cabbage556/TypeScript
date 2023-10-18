/**
 * problems with Array in JS
 */
const numbers = [1, 2, "3", 4, "5"];

const strings: string[] = ["1", "2", "3"];
strings.push(1); // 에러

const stringsOrNumbers: (string | number)[] = [1, "2", 3, "4"];

let stringArrOrNumberArr: string[] | number[] = [1, 2, 3];
stringArrOrNumberArr = ["1", "2", "3"];

let stringOrNumberArr: string | number[] = "1";
stringOrNumberArr = [1, 2, 3];

let boolArr = [true, false, true]; // boolean[] 유추
boolArr.push(false);
boolArr.push(1); // 에러

const onlyStrings = ["1", "2", "3"]; // string[] 유추
for (let i = 0; i < onlyStrings.length; i++) {
  let item = onlyStrings[i]; // string 타입 유추
}

const onlyNumbers = [1, 2, 3]; // number[] 유추
for (let item of onlyNumbers) {
  item; // number 타입 유추
}
let number = onlyNumbers[0]; // number 타입 유추
let number2 = onlyNumbers[199]; // number 타입 유추: 타입스크립트는 튜플이 아닌 이상 배열의 길이를 신경쓰지 않음, undefined가 할당됨(버그 발생)
