/**
 * Return type
 * 함수의 반환 타입을 가져오는 유틸리티 타입
 */
type ReturnTypeSampe = ReturnType<() => string>; // string 타입

type FunctionSign = (x: number, y: number) => number;
type ReturnType2 = ReturnType<FunctionSign>; // number 타입
