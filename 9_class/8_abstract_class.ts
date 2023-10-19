/**
 * Abstract class
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(1); // 추상 클래스의 인스턴스 생성 불가능

// 추상 클래스 상속
//    추상 클래스의 모든 프로퍼티 상속
class Product extends ModelWithId {}

// 추상 클래스를 사용하는 경우
//    추상 클래스 자체를 인스턴스화하지 않지만 공유되는 프로퍼티나 메서드를 정의하고 다른 클래스에서 상속하고 싶을 때

const product = new Product(10);
product.id; // 상속한 id 프로퍼티 접근 가능

// 추상 메서드를 갖는 추상 클래스
abstract class ModelWithAbstractMethod {
  // 추상 메서드
  //    메서드 바디가 존재하지 않고 메서드 정의만 존재
  abstract shout(name: string): string;
}

// 추상 메서드를 갖는 추상 클래스 상속
//    상속한 추상 메서드를 구현해야 함(추상 메서드 구현을 강제할 수 있음)
class Person extends ModelWithAbstractMethod {
  // 추상 메서드 정의대로 구현
  shout(name: string): string {
    return `${name}야 안녕?`;
  }
}
