/**
 * Exclude type
 */
// 제네릭 타입 첫 번째: 유니온 타입
// 제네릭 타입 두 번째: 유니온 타입 중에서 제외할 타입
type NoString = Exclude<string | boolean | number, string>; // number | boolean 타입
type NoFunction = Exclude<string | (() => void), Function>; // string 타입
