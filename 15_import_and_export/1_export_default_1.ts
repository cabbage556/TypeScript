/**
 * export default
 * 파일당 하나의 export default만 가능
 */
// 1
class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// export default IdolModel;

// 2
const number = 12;
// export default number;

// 3
// export default interface ICat {
//   name: string;
//   breed: string;
// }

// 4
// 여러 개를 export default하는 방법: 객체 사용
// 인터페이스는 타입스크립트의 타입이므로 객체에 넣을 수 없어 이 방법으로 export default 불가능
export default {
  IdolModel,
  number,
};
