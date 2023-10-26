/**
 * JS: 렉시컬 스코프(Lexical scope)
 * - 선언된 위치가 상위 스코프를 정한다.
 *
 * 다이나믹 스코프(Dynamic scope)
 * - 실행 위치가 상위 스코프를 정한다.
 */
var numberOne = 1;

function functionOne() {
  var numberOne = 10;

  functionTwo();
}

// 선언 위치: 글로벌 스코프
//    글로벌 스코프에 선언된 numberOne 출력
function functionTwo() {
  console.log(numberOne);
}

functionTwo(); // 1

/**
 * var: 함수 레벨 스코프
 * let, const: 블록 레벨 스코프
 */
var i = 1000;
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope: ${i}`); // 10

i = 10000;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope: ${i}`); // 10000
