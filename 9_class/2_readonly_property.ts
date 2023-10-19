/**
 * readonly 프로퍼티
 */
class Idol {
  // readonly 프로퍼티
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yujin = new Idol("안유진", 22);

// age 프로퍼티에 값 할당 가능
yujin.age = 20;

// readonly 프로퍼티 name의 경우 값 할당 불가능
yujin.name = "밖유진";

// readonly 프로퍼티도 자바스크립트에 존재하지 않는 문법
// 컴파일된 자바스크립트 코드에는 readonly 키워드가 존재하지 않음
// 타입스크립트에서 readonly 프로퍼티를 사용하는 이유는 프로퍼티의 값을 변경하는 코드를 작성할 수 없게 하기 위한 것
