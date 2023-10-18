/**
 * Function Type
 *
 * 함수 타입을 type, interface로 선언할 수 있다.
 */
// 함수 타입을 선언(함수 시그니처를 타입으로 선언) 후 함수의 파라미터 타입으로 선언하기
type Mapper = (x: string) => string;
// cb 파라미터를 Mapper 타입으로 선언
const runner = (cb: Mapper) => {
  return ["안유진", "장원영", "레이"].map(cb);
};
console.log(runner((x) => `아이브 멤버: ${x}`));

// 함수 시그니처를 타입으로 선언하고 해당 타입을 사용하면 파라미터의 타입을 선언하지 않아도 되는 장점이 있음(타입이 유추됨)
type MultiplyTwoNums = (x: number, y: number) => number;
const multiplyTwoNums: MultiplyTwoNums = (x, y) => {
  return x * y;
};

/**
 * Interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNums {
  // 인터페이스 내부에선 화살표 대신 콜론 사용
  (x: number, y: number): number;
}
const multiplyTwoNums2: IMultiplyTwoNums = (x, y) => {
  return x * y;
};
