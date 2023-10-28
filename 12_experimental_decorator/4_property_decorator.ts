/**
 * property decorator
 */
class UserModel {
  @PropertyLogger // id 프로퍼티가 정의되었습니다.
  id: string;

  @PropertyLogger // name 프로퍼티가 정의되었습니다.
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

// 프로퍼티 데코레이터
//    두 가지 파라미터는 메서드 데코레이터의 target, propertyKey 파라미터와 동일함
function PropertyLogger(target: any, propertyKey: string) {
  console.log(`${propertyKey} 프로퍼티가 정의되었습니다.`);
}
