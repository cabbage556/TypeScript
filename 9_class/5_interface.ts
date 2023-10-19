/**
 * interface
 */
interface Animal {
  // 프로퍼티
  name: string;
  age: number;

  // 메서드
  jump(): string;
}

class Dog implements Animal {
  // interface Animal을 implements하면 Animal 내부에 정의된 프로퍼티와 메서드를 모두 정의해야 함
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}이 점프한다`;
  }

  // 추가 선언 가능
  dance(): string {
    return `${this.name}이 춤춘다`;
  }
}

let ori: any = new Dog("오리", 3);

// interface type predicate
function instanceofAnimal(object: any): object is Animal {
  // object에 특정 키가 존재하는지 확인
  return "jump" in object;
}

// 내로잉
if (instanceofAnimal(ori)) {
  ori; // Animal 타입 유추
} else {
  ori; // any 타입 유추
}

/**
 * 다중 interface
 */
interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  // interface Animal, Pet을 implements하면 Animal, Pet 내부에 정의된 프로퍼티와 메서드를 모두 정의해야 함
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Animal
  jump(): string {
    return `${this.name}이 점프한다`;
  }

  // Pet
  bark(): void {
    console.log(`냐옹`);
  }
}

// 두 interface의 인터섹션 타입
type AnimalAndPet = Animal & Pet;

// 두 interface의 인터섹션 타입을 implements 가능(두 interface를 각각 implements하는 것과 같음)
//    마찬가지로 Animal, Pet의 모든 프로퍼티와 메서드를 정의해야 함
class Cat2 implements AnimalAndPet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Animal
  jump(): string {
    return `${this.name}이 점프한다`;
  }

  // Pet
  bark(): void {
    console.log(`냐옹`);
  }
}

interface Wrong1 {
  name: string; // 다른 interface에 존재하는 프로퍼티이지만 서로 다른 타입
}
interface Wrong2 {
  name: number; // 다른 interface에 존재하는 프로퍼티이지만 서로 다른 타입
}

// class Person implements Wrong1, Wrong2 {
//   // name: string; // string 타입은 Wrong2의 number 타입과 같지 않음
//   // name: number; // number 타입은 Wrong1의 string 타입과 같지 않음
//   // name: string | number; // Wrong1의 string 타입과, Wrong2의 number 타입과 같지 않음
//   name: string & number; // primitive 인터섹션은 never 타입
// }

// 서로 다른 interface를 implements하는 경우
//   중복 프로퍼티가 존재하는지, 존재한다면 프로퍼티 타입을 잘 맞춰야 함

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Idol 클래스의 생성자 형태를 타입을 선언하고 싶은 경우 인터페이스 사용 가능
interface IdolConstructor {
  // 함수 선언과 동일하게 선언하지만 new 키워드를 앞에 사용
  new (name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
  // return new Idol(name, age);
  return new constructor(name, age);
}

console.log(createIdol(Idol, "아이유", 30));
