/**
 * Generic in type
 */
type GenericSympleType<T> = T;

const genericString: GenericSympleType<string> = "123"; // string 타입

// 컴파일 에러
// 타입에서 제네릭 타입은 유추되지 않음
const genericString2: GenericSympleType = "123";

// 인터페이스와 타입의 혼합에서 제네릭 사용
interface DoneState<T> {
  data: T[];
}
interface LoadingState {
  requestedAt: Date;
}
interface ErrorState {
  error: string;
}

// State의 제네릭 타입이 DoneState의 제네릭 타입이 됨
type State<T> = DoneState<T> | LoadingState | ErrorState;

// State<string> = DoneState<string> | LoadingState | ErrorState;
let state: State<string> = {
  data: ["data1", "data2"], // string[] 타입 할당 가능
};
state = {
  requestedAt: new Date(),
};
state = {
  error: "error",
};

// 기본 제네릭 타입도 사용 가능
type State2<T = string> = DoneState<T> | LoadingState | ErrorState;

// State2<string> = DoneState<string> | LoadingState | ErrorState
let state2: State2 = {
  data: ["data1", "data2"], // string[] 타입 할당 가능
};
