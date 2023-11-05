/**
 * infer
 *
 * 타입 선언에서 타입을 추론하게 해주는 키워드
 *
 * (Inferring Type in Conditional Type)
 *
 * infer 키워드는 Conditional Type에서만 사용 가능
 * extends 키워드를 사용하는 경우 extends 대상에서 타입을 한번 더 추론하는 역할을 함
 */

// 1. 가장 많이 사용하는 예제
// flattening: Array를 벗겨내는 것
// string[] -> string
// string[][] -> string[]

// infer 키워드를 사용해 Type의 원소 타입을 추론
//    Type이 Array 타입이면 Array 내부의 원소의 타입을 추론해 추론한 타입 사용
//    Type이 Array 타입이 아니면 Type 사용
type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type StringType = Flatten<string[]>; // string 타입
type NumberType = Flatten<number[]>; // number 타입
type StringArray = Flatten<string[][]>; // string[] 타입

// 아래처럼 작성할 수도 있음
type Flatten2<Type> = Type extends (infer ElementType)[] ? ElementType : Type;
type StringType2 = Flatten<string[]>; // string 타입
type NumberType2 = Flatten<number[]>; // number 타입
type StringArray2 = Flatten<string[][]>; // string[] 타입

// 2. Return Type 추론
//    Type이 어떤 타입을 반환하는 함수이면 함수의 반환 타입을 추론해 추론한 타입 사용
//    Type이 어떤 타입을 반환하는 함수가 아니면 Type 사용
type InferReturnType<Type> = Type extends (...args: any[]) => infer ReturnType ? ReturnType : Type;
type StringReturnType = InferReturnType<() => string>; // string 타입
type NumberReturnType = InferReturnType<() => number>; // number 타입
