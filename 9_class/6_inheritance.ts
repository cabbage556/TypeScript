/**
 * Inheritance
 */
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parent: ${this.name}이 춤춘다`);
  }
}

// Parent 클래스 상속
class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name); // name 프로퍼티 초기화
    this.age = age;
  }

  sing() {
    console.log(`child: ${this.name}이 노래를 부른다`);
  }
}

const codefactory = new Parent("코드팩토리");
const ari = new Child("아리", 12);

codefactory.dance();
codefactory.sing(); // 컴파일 에러: sing 메서드가 Parent 객체에 존재하지 않음

ari.sing();
ari.dance(); // Parent 클래스를 상속하므로 dance 메서드 접근 가능

let person: Parent;
person = codefactory;
person = ari; // Child 클래스가 Parent 클래스를 상속하므로 Parent 타입이 될 수 있음(자식 타입은 부모 타입이 될 수 있음)

let person2: Child;
person2 = ari;
person2 = codefactory; // Child 클래스가 Parent 클래스를 상속하므로 Parent 타입의 codefactory를 할당할 수 없음(부모 타입은 자식 타입이 될 수 없음)

/**
 * 옵셔널 프로퍼티를 주의하자.
 * 타입스크립트는 구조가 비슷하면 같은 타입으로 취급한다.
 */

class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

const codefactory2 = new Parent2("코드팩토리");
const ari2 = new Child2("아리", 20);

let child: Child2;
child = ari2;

// Parent2 타입의 codefactory2를 할당할 수 있음
//    Child2 클래스가 Parent2 클래스를 상속하므로 Parent2 타입의 codefactory2를 할당할 수 없어야 하지만 할당 가능함. 왜?
//    Child2 클래스의 age 프로퍼티가 옵셔널 프로퍼티이기 때문
//    age 프로퍼티가 없어도 되는 프로퍼티이기 때문에 만약에 없다면 타입스크립트는 구조적으로 Parent2와 Child2 클래스는 동일하다고 판단
//    구조가 동일하므로 할당 가능
child = codefactory2;
