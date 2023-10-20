/**
 * Generic in implementation
 */
interface Singer<T, V> {
  name: T;
  sing(year: V): void;
}

// 인터페이스의 제네릭 타입 T: string 타입
// 인터페이스의 제네릭 타입 V: number 타입
class Idol implements Singer<string, number> {
  name: string; // T: string

  constructor(name: string) {
    this.name = name;
  }

  // V: number
  sing(year: number): void {
    console.log(`[${year}] ${this.name}이 노래 부른다`);
  }
}

const yuJin = new Idol("안유진");
yuJin.sing(2003);

// 클래스의 제네릭 타입을 Singer 인터페이스의 제네릭 타입으로 넘기기
// 인터페이스의 제네릭 타입 T: 클래스의 제네릭 타입 T
// 인터페이스의 제네릭 타입 V: 클래스의 제네릭 타입 V
class Idol2<T, V> implements Singer<T, V> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }

  sing(year: V): void {
    console.log(`[${year}] ${this.name}이 노래 부른다`);
  }
}

// 클래스의 제네릭 타입 T: string
// 클래스의 제네릭 타입 V: number
const wonYoung = new Idol2<string, number>("장원영");
wonYoung.sing(2004);
