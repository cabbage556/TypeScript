/**
 * Reflection and decorator
 */
import "reflect-metadata";

// 일반적으로 메타데이터의 키는 Symbol 값을 사용함 => 유일한 값이라는 것을 보장할 수 있음
const restrictParamValueKey = Symbol("restrictParamValue");

// 메타데이터의 값 타입
interface RestrictionInfo<T> {
  index: number; // 파라미터의 인덱스
  restrictedValues: T[]; // 파라미터에 입력 가능한 값들의 배열
}

/**
 * 파라미터 데코레이터 팩토리
 * @param restrictedValues 파라미터에 입력 가능한 값들의 배열
 * @returns 파라미터 데코레이터
 */
function RestrictParamValue<T>(restrictedValues: T[]) {
  /**
   * 파라미터 데코레이터
   * target: 클래스의 프로토타입
   * propertyKey: 메서드의 이름
   * index: 파라미터 인덱스
   */
  return (target: any, propertyKey: string, index: number) => {
    // 프로토타입의 propertyKey에 정의한 메타데이터 가져오기
    const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

    const info: RestrictionInfo<T> = {
      index, // 파라미터의 인덱스
      restrictedValues, // 파라미터에 입력 가능한 값들의 배열
    };

    // 프로토타입의 propertyKey에 메타데이터 정의
    //    키: restrictParamValueKey
    //    값: [ ...prevMeta, info ]
    Reflect.defineMetadata(restrictParamValueKey, [...prevMeta, info], target, propertyKey);

    // 메타데이터 출력
    console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
  };
}

/**
 * 메서드 데코레이터
 * @param target 클래스의 프로토타입
 * @param propertyKey 메서드의 이름
 * @param descriptor 메서드(프로퍼티)의 프로퍼티 어트리뷰트 정보를 담은 프로퍼티 디스크립터 객체
 */
function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // 프로토타입의 propertyKey에 정의한 메타데이터 가져오기
  const metas: RestrictionInfo<any>[] =
    Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

  const originMethod = descriptor.value; // 원본 sing 메서드

  // sing 메서드 재정의
  // args: sing 메서드에 입력된 파라미터들의 배열
  descriptor.value = function (...args: any[]) {
    // 아규먼트 유효성 검사
    const invalids = metas.filter((x) => !x.restrictedValues.includes(args[x.index]));
    if (invalids.length > 0)
      throw Error(`유효하지 않은 아규먼트입니다: ${invalids.map((x) => args[x.index]).join(", ")}`);

    // 원본 sing 메서드 호출
    return originMethod.apply(this, args);
  };
}

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @ValidateMethod
  sing(
    // style 파라미터에 '신나게' | '열정적으로' 문자열만 입력 가능하게 하기
    @RestrictParamValue(["신나게", "열정적으로"]) style: string
  ) {
    // if (style !== "신나게" && style !== "열정적으로") throw Error("안 됨");
    return `${this.name}이 ${style} 노래를 부릅니다.`;
  }
}

const yujin = new Idol("안유진", 23);
console.log(yujin.sing("신나게")); // 안유진이 신나게 노래를 부릅니다.
console.log(yujin.sing("열정적으로")); // 안유진이 열정적으로 노래를 부릅니다.
yujin.sing("기분 좋게"); // Error: 유효하지 않은 아규먼트입니다: 기분 좋게
