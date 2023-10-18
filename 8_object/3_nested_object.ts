/**
 * Nested object
 */
// 중첩 객체 타입 선언
type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

// 중첩 객체 할당
const codefactory: NestedPerson = {
  identity: {
    // name: "코드팩토리", // 컴파일 에러
    age: 32,
  },
  nationality: "한국",
};

// 중첩 객체 타입을 선언할 때 객체 타입을 나누어 선언하는 것이 좋을까?
//  타입에 해당하는 프로퍼티가 존재하지 않을 때 에러 메세지를 확인하기가 더 수월하다.
//  타입에 필요한 프로퍼티가 많아질수록 어떤 프로퍼티가 존재하지 않는지 확인하기가 어려운데, 객체 타입을 나누어 선언하면 좀 더 확인하기가 쉽다.
type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};
type TPersonIdentity = {
  name: string;
  age: number;
};

const iu: TPerson = {
  identity: {
    // name: "아이유", // 컴파일 에러
    age: 30,
  },
  nationality: "한국",
};

interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}
interface IPersonIdentity {
  name: string;
  age: number;
}

const yujin: IPerson = {
  identity: {
    // name: "안유진", // 컴파일 에러: interface 또한 name 프로퍼티가 존재하지 않는다는 에러 메세지를 잘 보여줌
    age: 22,
  },
  nationality: "한국",
};
