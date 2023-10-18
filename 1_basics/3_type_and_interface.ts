/**
 * Type and Interface
 */

/**
 * Type
 * Type(타입)은 쉽게 말해 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = "male" | "female"; // 유니온

const stringVar: NewStringType = "string";

type IdolType = {
  name: string;
  year: number;
};
const yujin: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 * Type과 달리 객체 형태로 타입을 선언함
 */
interface IdolInterface {
  name: string;
  year: number;
}
const yujin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};

// 인터페이스에서 type으로 선언한 타입을 선언 가능
interface IdolInterface2 {
  name: NewStringType;
  year: NewNumberType;
}
const yujin3: IdolInterface2 = {
  name: "안유진",
  year: 2002,
};

// 옵셔널로 없어도 상관 없는 타입 선언 가능
interface IdolOptional {
  name: string;
  year?: number; // 옵셔널 ?
}
const yujin4: IdolOptional = {
  name: "안유진",
  // year: 2002,
};
