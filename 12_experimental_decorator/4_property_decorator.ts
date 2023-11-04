/**
 * property decorator
 */
class UserModel {
  // 프로퍼티 데코레이터는 프로퍼티 선언 직전에 선언됨
  @PropertyLogger // id 프로퍼티가 정의되었습니다.
  id: string;

  // 프로퍼티 데코레이터는 프로퍼티 선언 직전에 선언됨
  @PropertyLogger // name 프로퍼티가 정의되었습니다.
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

/**
 * 프로퍼티 데코레이터의 파라미터 2가지
 * @param target 스태틱 메서드의 경우 클래스의 생성자 함수를, 인스턴스 메서드의 경우 클래스의 프로토타입을 가리킴
 * @param propertyKey  프로퍼티의 이름(프로퍼티의 키)
 */
function PropertyLogger(target: any, propertyKey: string) {
  console.log(`${propertyKey} 프로퍼티가 정의되었습니다.`);
}
