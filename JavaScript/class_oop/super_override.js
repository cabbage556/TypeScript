/**
 * super / override
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    part;

    // constructor 재정의
    constructor(name, year, part) {
        super(name, year); // 슈퍼 클래스 constructor 호출
        this.part = part;
    }

    // sayHello 메서드 재정의
    sayHello() {
        // 슈퍼 클래스 sayHello 호출
        return `${super.sayHello()} ${this.part}을 맡고 있습니다.`;
    }
}

const yujin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log({ yujin });
console.log(yujin.sayHello());
