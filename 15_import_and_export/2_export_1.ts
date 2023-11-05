/**
 * export
 * export default와 달리 하나의 파일에서 여러 개를 export 가능
 */
export class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const iu = new IdolModel("iu", 30);

export const number = 100;

export interface ICat {
  name: string;
  breed: string;
}

export default {
  name: "코드팩토리",
  age: 32,
};
