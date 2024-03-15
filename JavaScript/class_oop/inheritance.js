/**
 * inheritance: 객체들 간의 관계를 구축하는 방법, 슈퍼 클래스의 변수와 메서드를 상속 받을 수 있다.
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// 슈퍼 클래스의 프로퍼티를 상속함
class FemaleIdolModel extends IdolModel {
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

// 슈퍼 클래스의 프로퍼티를 상속함
class MaleIdolModel extends IdolModel {
    sing() {
        return `${this.name}이 노래를 부릅니다.`;
    }
}

// 서브 클래스에 constructor가 정의되어 있지 않아 슈퍼 클래스의 constructor 사용 가능
const yujin = new FemaleIdolModel("안유진", 2003);
console.log({ yujin });
console.log(yujin.dance());

// 서브 클래스에 constructor가 정의되어 있지 않아 슈퍼 클래스의 constructor 사용 가능
const jimin = new MaleIdolModel("지민", 1995);
console.log({ jimin });
console.log(jimin.sing());

const codefac = new IdolModel("코드팩토리", 1992);

// yujin은 IdolModel, FemaleIdolModel 인스턴스이다.
console.log(yujin instanceof IdolModel); // true
console.log(yujin instanceof FemaleIdolModel); // true
console.log(yujin instanceof MaleIdolModel); // false

console.log("----------------------");

// jimin은 IdolModel, MaleIdolModel 인스턴스이다.
console.log(jimin instanceof IdolModel); // true
console.log(jimin instanceof FemaleIdolModel); // false
console.log(jimin instanceof MaleIdolModel); // true

console.log("----------------------");

// codefac은 IdolModel 인스턴스이다.
console.log(codefac instanceof IdolModel); // true
console.log(codefac instanceof FemaleIdolModel); // false
console.log(codefac instanceof MaleIdolModel); // false
