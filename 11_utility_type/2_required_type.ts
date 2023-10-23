/**
 * Required type
 * 모든 프로퍼티를 필수로 만드는 유틸리티 타입
 */
interface Dog {
  name: string;
  age?: number;
  country?: string;
}

// Dog 인터페이스의 모든 프로퍼티가 필수가 됨
const dog: Required<Dog> = {
  name: "mozzi",
  age: 10,
  country: "Korea",
};
