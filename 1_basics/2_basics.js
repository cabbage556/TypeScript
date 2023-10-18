"use strict";
/**
 * Types
 */
// string 타입 선언
let hello = "Hello";
// hello = true; // 컴파일 에러: 명시한 타입 외에 다른 타입의 값을 넣을 수 없음
/**
 * JS에 존재하는 타입 7가지
 */
const stringVar = "string";
const numberVar = 1;
const bigIntVar = BigInt(123123123123);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// 1️⃣any: 아무 타입이나 입력할 수 있는 치트키 타입
let anyVar;
anyVar = 100;
anyVar = "code";
anyVar = true;
anyVar = null;
// 어떤 타입의 변수에도 any 타입의 값을 저장 가능
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// 2️⃣unknown: 알 수 없는 타입
//    any 타입과 유사하지만 차이점 존재
let unknownType;
// unknown 타입의 변수에도 어떤 타입의 값이든 할당 가능
unknownType = 100;
unknownType = "code";
unknownType = true;
unknownType = null;
// any 타입과 달리 unknown 타입의 값을 다른 타입의 변수에 저장할 수 없음
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
// unknown 타입이나 any 타입에는 저장 가능
let unknownType2 = unknownType;
let anyType2 = unknownType;
// 3️⃣never: 어떠한 값도 저장되거나 반횐되지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'code';
/**
 * 리스트 타입
 */
const kGirlGroup = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList = [true, false, true];
