/**
 * Statement and Expression
 */

// statement(문)
function addTwoNums(x: number, y: number) {
  return x + y;
}

// expression(표현식)
const addTwoNumsExpression = (x: number, y: number) => {
  return x + y;
};

/**
 * Statement
 */
function add(x: number, y: number): number {
  return x + y;
}

// statement를 사용하면
// add 함수와 동일한 파라미터 갯수와 타입, 리턴 타입이지만 반복적으로 선언해야 함
function sub(x: number, y: number): number {
  return x - y;
}

// statement를 사용하면
// add 함수와 동일한 파라미터 갯수와 타입, 리턴 타입이지만 반복적으로 선언해야 함
function multi(x: number, y: number): number {
  return x * y;
}

// statement를 사용하면
// add 함수와 동일한 파라미터 갯수와 타입, 리턴 타입이지만 반복적으로 선언해야 함
function divide(x: number, y: number): number {
  return x / y;
}

/**
 * Expression
 * 표현식은 함수 시그니처를 타입으로 선언해서 사용 가능하므로 함수는 표현식으로 사용하는 것이 유리함
 */

// 함수 시그니처를 타입으로 선언
type CalculationType = (x: number, y: number) => number;

// 표현식에서 반복 사용
const add2: CalculationType = (x, y) => {
  return x + y;
};

// 표현식에서 반복 사용
const sub2: CalculationType = (x, y) => {
  return x - y;
};

// 표현식에서 반복 사용
const multi2: CalculationType = (x, y) => {
  return x * y;
};

// 표현식에서 반복 사용
const divide2: CalculationType = (x, y) => {
  return x / y;
};
