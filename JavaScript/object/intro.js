/**
 * 객체의 모든 것
 *
 * 객체 선언 시 사용할 수 있는 방법들
 * 1. {}를 사용해서 객체 생성
 * 2. class를 사용해서 객체(인스턴스) 생성
 * 3. function을 사용해서 객체 생성
 */

// {}를 사용해서 객체 생성
const yujin = {
    name: "안유진",
    year: 2003,
};

// class를 사용해서 객체 생성
class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const yujin2 = new Idol("안유진", 2003);
console.log({ yujin2 });

// function을 사용해서 객체 생성: 생성자 함수
function IdolFunction(name, year) {
    // 함수 내부에서 this 키워드로 프로퍼티 할당
    this.name = name;
    this.year = year;
}
const yujin3 = new IdolFunction("안유진", 2003);
console.log({ yujin3 });
