/**
 * Type vs Interface
 */

// type 등장 이후 interface가 등장
// type에는 없는 기능들이 inteface에 추가했지만 중복되는 기능들이 존재함
// 하지만 inteface는 type을 완전히 대체하는 개념은 아님
// 따라서 type은 할 수 있지만 interface는 할 수 없는 것, interface는 할 수 있지만 type은 할 수 없는 것들이 존재

// 객체 선언
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// 함수 선언 시 interface는 반환 타입에 콜론 사용
interface IFunction {
  (x: number, y: number): number;
}

// 함수 선언 시 type은 반환 타입에 arrow 사용
type TFunction = (x: number, y: number) => number;

/**
 * type에서 할 수 있지만 interface에서 할 수 없는 것들
 */
// (1) primitive 타입 선언
type Name = string;

// (2) union 타입 선언
type UnionType = string | number;

// (3) primitive 리스트 또는 tuple 타입 선언
type TupleType = [number, string];

/**
 * interface에서 할 수 있지만 type에서 할 수 없는 것들
 */
// interface merging
interface IRectangle {
  height: number;
}
interface IRectangle {
  width: number;
}
let rect: IRectangle = {
  // interface 중복 선언 시 프로퍼티가 계속 추가됨
  // height, width 프로퍼티 필요
  height: 10.1,
  width: 5,
};

// type 중복 선언 불가능
type TRectangle = {
  height: number;
};
type TRectangle = {
  width: number;
};

/**
 * interface merging
 * interface 등장 이유
 */
class Review {
  // 프로퍼티(함수)
  //    인스턴스에 귀속됨
  getY = (y: number) => {
    return y;
  };

  // 메서드
  //    프로토타입에 귀속됨
  getX(x: number) {
    return x;
  }
}

interface GetXAndY {
  getX: (x: number) => number; // 프로퍼티(함수 타입)
  getY: (y: number) => number; // 프로퍼티(함수 타입)
}
interface GetXAndY {
  getX: (x: number) => number;
  // getY: (y: string) => number; // 에러: 프로퍼티는 재선언이 불가능함(완전히 동일한 시그니처로만 재선언 가능)
}

interface GetXAndY2 {
  getX(x: number): number; // 메서드
  getY(y: number): number; // 메서드
}
interface GetXAndY2 {
  getX(x: number): number;
  getY(y: string): number; // 메서드는 재선언이 가능함(오버로딩)
}
const testMethod: GetXAndY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    // return y; // 파라미터 y의 타입이 string | number이므로 y를 반환하면 number 반환 타입에 맞지 않을 수 있어 에러 발생
    return 1; // 에러 발생하지 않음(y의 타입에 상관 없이 number 타입이므로)
  },
};
