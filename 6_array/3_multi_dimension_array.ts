/**
 * multi dimension array
 */
const number2D: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const string2D = [
  ["1", "2"],
  ["3", "4"],
]; // string[][] 유추

const strAndNumber2D: (string | number)[][] = [
  [1, "2"],
  ["3", 4],
];
let strOrNumber2D: string[][] | number[][] = [
  [1, 2],
  [3, 4],
];
strOrNumber2D = [
  ["1", "2"],
  ["3", "4"],
];

for (let arr of number2D) {
  arr; // number[] 유추
  for (let item of arr) {
    item; // number 유추
  }
}
