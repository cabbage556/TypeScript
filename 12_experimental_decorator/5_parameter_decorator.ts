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
    @LogParam // dance에 0번째 파라미터가 정의되었습니다.
    adj: string
  ) {
    console.log(`${this.name}가 ${adj} 춤을 춥니다.`);
  }
}

// 파라미터 데코레이터
//    target, propertyKey는 메서드 데코레이터의 파라미터와 동일함
//    paramIndex는 여러 파라미터를 입력 받을 때 파라미터의 순서를 나타냄(0, 1, 2, ...)
function LogParam(target: any, propertyKey: string, paramIndex: number) {
  console.log(`${propertyKey}에 ${paramIndex}번째 파라미터가 정의되었습니다.`);
}

const cat = new Cat("냥이");
cat.dance("신나게");
