"use strict";
// TS로 선언한 함수
//    파라미터의 타입 명시
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
// console.log(add(1, "2")); // 컴파일 에러: 아규먼트의 타입이 파라미터의 타입과 일치하지 않음
// 함수 정의, 변수 정의, 클래스 정의 등의 모든 정의를 정확하게 할 수 있음
// 함수, 클래스가 설계된 의도대로 사용하도록 강제할 수 있음
