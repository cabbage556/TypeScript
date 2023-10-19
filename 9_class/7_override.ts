/**
 * Override
 */
class Parent {
  shout(name: string) {
    return `${name}야 안녕!`;
  }
}

class WrongChild extends Parent {
  // 잘못된 오버라이딩
  // shout() {}
}

// 메서드 오버라이딩 규칙
// 1. 부모 메서드와 반환 타입이 일치해야 함
// 2. 부모 메서드의 필수 파라미터가 존재해야 함
// 3. 부모 메서드의 옵셔널 파라미터가 자식 메서드에서 필수로 지정될 수 없음
class Child extends Parent {
  // 부모 메서드에 두 번째 파라미터 me가 존재하지 않으므로 자식 메서드에서 옵셔널 파라미터로 선언해야 함
  shout(name: string, me?: string): string {
    if (!me) {
      return super.shout(name);
    } else {
      return super.shout(name) + ` 내 이름은 ${me}야`;
    }
  }
}

const child = new Child();
console.log(child.shout("아이유"));
console.log(child.shout("아이유", "코드팩토리"));

/**
 * 프로퍼티 override
 */
class PropertyParent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// class PropertyChild extends PropertyParent {
//   name: number; // 불가능한 프로퍼티 오버라이딩

//   constructor(name: number) {
//     this.name = name;
//   }
// }

class PropertyParent2 {
  name: string | number; // 유니온 타입

  constructor(name: string | number) {
    this.name = name;
  }
}

class PropertyChild2 extends PropertyParent2 {
  name: string; // 가능
  // name: number; // 가능

  constructor(name: string) {
    super(name);
    this.name = name;
  }
}

const child2 = new PropertyChild2("헬로우");
child2.name; // string 타입
