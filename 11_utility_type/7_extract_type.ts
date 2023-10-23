/**
 * Extract type
 * Exclude 유틸리티 타입과 정반대로 동작하는 유틸리티 타입
 */
// 제네릭 타입 첫 번째: 유니온 타입
// 제네릭 타입 두 번째: 유니온 타입 중에서 추출할 타입
type StringOnly = Extract<string | boolean | number, string>; // string 타입
type FunctionOnly = Extract<string | (() => void), Function>; // () => void 타입
