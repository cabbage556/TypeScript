/**
 * Generic in method
 */
class Idol<T> {
  id: T;
  name: string;

  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }

  // 메서드에서 제네릭 타입 선언 가능
  sayHello<Time>(logTime: Time) {
    return `[${logTime}] 안녕하세요. ${this.name}입니다. ID는 ${this.id}입니다.`;
  }
}

const yuJin = new Idol("a000", "안유진");
console.log(yuJin.sayHello("2023")); // 제네릭 타입 Time: string 타입
console.log(yuJin.sayHello(2022)); // 제네릭 타입 Time: number 타입

class Message<T> {
  sayHello<Time>(logTime: Time, message: T) {
    console.log(`logTime: ${typeof logTime}, message: ${typeof message}`);
  }
}

const message = new Message<string>(); // 제네릭 타입 T: string 타입
message.sayHello<number>(2000, "123"); // 제네릭 타입 Time: number 타입

class DuplicatedGenericName<T> {
  // 메서드의 제네릭 타입이 클래스의 제네릭 타입과 중복 -> 메서드의 제네릭 타입을 사용함
  //    클래스의 제네릭 타입과 헷갈릴 수 있으므로 중복해서 사용하지 말 것
  sayHello<T>(logTime: T) {
    console.log(`logTime: ${typeof logTime}`);
  }
}

const duplicate = new DuplicatedGenericName<string>(); // 클래스의 제네릭 타입 T: string 타입
duplicate.sayHello<number>(123); // 메서드의 제네릭 타입 T: number 타입
