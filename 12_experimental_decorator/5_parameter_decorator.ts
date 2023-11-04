/**
 * parameter decorator
 *
 */
class Cat {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance(
    // 파라미터 데코레이터는 파라미터 선언 직전에 선언됨
    @LogParam // dance에 0번째 파라미터가 정의되었습니다.
    adj: string
  ) {
    console.log(`${this.name}가 ${adj} 춤을 춥니다.`);
  }
}

/**
 * 파라미터 데코레이터의 파라미터 3가지
 * @param target 스태틱 메서드의 경우 클래스의 생성자 함수를, 인스턴스 메서드의 경우 클래스의 프로토타입을 가리킴
 * @param propertyKey  메서드의 이름(프로퍼티의 키)
 * @param paramIndex  함수의 파라미터 목록에 있는 파라미터의 인덱스(0, 1, 2, ...)
 * */
function LogParam(target: any, propertyKey: string, paramIndex: number) {
  console.log(`${propertyKey}에 ${paramIndex}번째 파라미터가 정의되었습니다.`);
}

const cat = new Cat("냥이");
cat.dance("신나게");
