/**
 * Class as type and value
 */
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name}가 짖습니다.`;
  }
}

// ori 변수에 Dog 객체 할당
//    Dog 클래스의 객체가 값으로 사용됨
// ori 변수의 타입은 Dog 타입
//    Dog 클래스를 타입으로 선언하지 않았지만 Dog 클래스 자체가 타입이 됨
let ori = new Dog("오리");
console.log(ori.bark());

// ori는 Dog 타입이므로 string 타입의 값 할당 불가능
// ori = "오리";

// ori에 특수한 객체 할당 가능
//    클래스도 객체이므로 Dog 클래스의 시그니처와 동일한 시그니처를 갖는 객체를 할당할 수 있음
ori = {
  name: "별이",
  bark() {
    return `${this.name}가 짖습니다.`;
  },
};

console.log({ ori });
