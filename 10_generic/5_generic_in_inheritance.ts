/**
 * Generic in inheritance
 */
class BaseCache<T> {
  data: T[] = [];
}

class StringCache extends BaseCache<string> {}

const stringCache = new StringCache();
stringCache.data; // string[] 타입

// 자식 클래스의 제네릭 타입을 부모 클래스의 제네릭 타입에 넘겨줄 수 있음
class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
}

// T: string, Message: string
const genericChild = new GenericChild<string, string>("error");
genericChild.data; // string[] 타입
genericChild.message; // string | undefined 타입

/**
 * Generic inheritance
 */
interface BaseGeneric {
  name: string;
}

// BaseGeneric 타입을 상속하는 제네릭 타입 T
//    BaseGeneric 타입의 name 프로퍼티가 존재하는 제네릭 타입을 의미
class Idol<T extends BaseGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

// Idol<{ name: string; age: number; }> 타입
const yuJin = new Idol({
  name: "안유진", // name 프로퍼티를 포함하지 않으면 컴파일 에러: 제네릭 타입이 extends하는 타입을 강제함
  age: 22,
});
yuJin.information;

/**
 * keyof 함께 사용하기
 */
const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

// key 파라미터에는 특정 객체의 키만 입력될 것을 명시하기
// K extends keyof O -> 제네릭 타입 K를 제네릭 타입 O의 키들의 유니온 타입으로 강제
function objectParser<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

// O: testObj의 타입 - { a: number; b: number; c: number; }
// K extends keyof O - K extends 'a' | 'b' | 'c'
const value = objectParser(testObj, "a");
console.log({ value });

/**
 * 삼항 연산자(?:)
 */

class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: "Female Idol" = "Female Idol";
}

class MaleIdol extends Idol2 {
  type: "Male Idol" = "Male Idol";
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

// FemaleIdol는 Idol2 클래스를 상속하므로 제네릭 타입으로 사용 가능
// FemaleIdol은 MaleIdol 클래스를 상속하지 않으므로 SpecificIdol<FemaleIdol>은 FemaleIdol 타입
const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol(); // FemaleIdol 타입
idol2.type;

// MaleIdol도 마찬가지
const idol3: SpecificIdol<MaleIdol> = new MaleIdol(); // MaleIdol 타입
idol3.type;
