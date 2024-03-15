/**
 * 클래스: 객체지향 프로그래밍에서 객체(인스턴스)를 생성하기 위한 변수와 메서드를 정의하는 틀
 *
 * 정보를 일반화해서 정리하는 방법이다. 라고 볼 수 있다.
 */

class IdolModel {
    // 객체 변수(프로퍼티) 정의
    name;
    year;

    // constructor - 생성자
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // 객체 함수(메서드) 정의
    sayName() {
        return `${this.name}입니다.`;
    }
}

const yujin = new IdolModel("안유진", 2003);
console.log({ yujin });

const gaeul = new IdolModel("가을", 2002);
console.log({ gaeul });

const ray = new IdolModel("레이", 2004);
console.log({ ray });

console.log(yujin.sayName());
console.log(gaeul.sayName());
console.log(ray.sayName());

console.log(typeof IdolModel); // function: 클래스는 function 타입이다.
console.log(typeof yujin); // object: 객체는 object 타입이다.
