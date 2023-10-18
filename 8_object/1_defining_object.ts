/**
 * Object
 */
const codefactory = {
  name: "코드팩토리", // string 타입
  age: 32, // number 타입
};

// interface로 객체 타입 선언
interface IPerson {
  name: string;
  age: number;
}

// type으로 객체 타입 선언
type TPerson = {
  name: string;
  age: number;
};

// 선언한 객체 타입에 맞게 객체 할당
const iPerson: IPerson = {
  name: "아이유",
  age: 30,
};
const tPerson: TPerson = {
  name: "안유진",
  age: 22,
};
