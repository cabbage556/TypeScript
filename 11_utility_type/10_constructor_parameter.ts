/**
 * ConstructorParameters type
 * 생성자의 파라미터 타입들을 배열 형식으로 가져오는 유틸리티 타입
 */

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type ConstructorParamTypes = ConstructorParameters<typeof Idol>; // [name: string, age: number] 타입
