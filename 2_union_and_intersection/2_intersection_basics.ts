/**
 * Intersection
 *
 * 유니온과 달리 AND의 개념
 */
interface Human {
  name: string;
  age: number;
}
interface Contacts {
  phone: string;
  address: string;
}

// Human, Contacts 타입(인터페이스)의 인터섹션 타입
//    Human과 Contacts을 모두 합친 타입
type HumanAndContacts = Human & Contacts;

// 두 타입의 프로퍼티를 모두 가져야 함
let humanAndContacts: HumanAndContacts = {
  // Human 타입의 프로퍼티
  name: "iu",
  age: 30,
  // Contacts 타입의 프로퍼티
  phone: "010111111111",
  address: "대한민국",
};

// 원시 타입에 인터섹션을 사용하는 경우, never 타입으로 선언됨을 확인할 수 있음
//    number 타입이면서 string 타입일 수 없기 때문, 즉 절대로 존재할 수 없는 타입
type NumberAndString = number & string;

// never 타입에는 어떤 값도 할당할 수 없음
// let numberAndString: NumberAndString = '123';
