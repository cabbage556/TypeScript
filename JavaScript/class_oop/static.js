/**
 * static 키워드: 클래스에 소속되는 변수, 메서드를 정의하기 위한 키워드
 */

class IdolModel {
    name;
    year;
    static groupName = "아이브"; // static 변수

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // static 메서드
    static returnGroupName() {
        return "아이브";
    }
}

const yujin = new IdolModel("안유진", 2003);
console.log({ yujin }); // static 변수를 확인할 수 없다.

// static 변수, 메서드는 클래스에 소속된다.
//      클래스를 사용해 접근한다.
console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());

/**
 * factory constructor 패턴: static 메서드에서 객체를 생성해 리턴하는 패턴
 *
 * static 메서드가 주로 사용되는 패턴이다.
 * 단순히 하나의 constructor만 사용해 객체를 생성하지 않고, 다양한 형태의 데이터를 받아 객체를 생성할 수 있다는 장점이 있다.
 */
class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // factory constructor
    //      객체 형태의 데이터를 받아 객체 생성
    static fromObject(object) {
        return new IdolModel2(object.name, object.year);
    }

    // factory constructor
    //      배열 형태의 데이터를 받아 객체 생성
    static fromList(list) {
        return new IdolModel2(list[0], list[1]);
    }
}

const yujin2 = IdolModel2.fromObject({ name: "안유진", year: 2003 });
console.log({ yujin2 });

const wonyoung = IdolModel2.fromList(["장원영", 2004]);
console.log({ wonyoung });
