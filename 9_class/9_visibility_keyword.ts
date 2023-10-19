/**
 * Visibility keyword
 *
 * 1. public(기본값): 어디서든 접근 가능
 * 2. protected: 현재 클래스 내부와 하위 클래스 내부에서만 접근 가능
 * 3. private: 현재 클래스 내부에서만 접근 가능
 */

class PropertyTestParent {
  // 타입스크립트 visibility
  publicProperty = "public property";
  protected protectedProperty = "protected property";
  private privateProperty = "private property";

  // 자바스크립트 private
  #jsPrivateProperty = "js private property";

  test() {
    this.publicProperty; // 접근 가능
    this.protectedProperty; // 접근 가능
    this.privateProperty; // 접근 가능
    this.#jsPrivateProperty; // 접근 가능
  }
}

// 하위 클래스
class PropertyTestChild extends PropertyTestParent {
  test(): void {
    this.publicProperty; // 접근 가능
    this.protectedProperty; // 접근 가능
    this.privateProperty; // 접근 불가능
    this.#jsPrivateProperty; // 접근 불가능
  }
}

// 인스턴스 생성 시 바로 접근 가능한 프로퍼티는 public 프로퍼티
const instance = new PropertyTestChild();
instance.publicProperty; // 접근 가능
instance.protectedProperty; // 접근 불가능
instance.privateProperty; // 접근 불가능
instance.#jsPrivateProperty; // 접근 불가능
