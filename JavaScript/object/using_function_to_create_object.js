/**
 * 생성자 함수: function을 사용해 객체 생성하기
 */

// 생성자 함수
function IdolModel(name, year) {
    // this
    //    new 키워드 사용: IdolModel {}(IdolModel 인스턴스) 출력
    //    new 키워드 사용x: 글로벌 객체(global) 출력
    console.log("this: ");
    console.log(this);

    // new.target
    //    new 키워드 사용: [Function: IdolModel] 출력
    //        new 키워드의 대상 함수가 출력됨
    //    new 키워드 사용x: undefined 출력
    //        new 키워드의 대상 함수가 없음(new 키워드 없이 생성자 함수 호출)
    console.log("new.target: ");
    console.log(new.target);

    // new 키워드 없이 생성자 함수를 호출하는 경우, 인스턴스를 생성해서 반환하는 코드
    if (!new.target) {
        return new IdolModel(name, year);
    }

    // 프로퍼티, 메서드 선언 및 할당
    this.name = name;
    this.year = year;
    this.dance = function () {
        return `${this.name}이 춤을 춘다.`;
    };
}

console.log(`new IdolModel("안유진", 2003)`);
const yujin1 = new IdolModel("안유진", 2003); // new 키워드와 함께 생성자 함수 호출

console.log("-----------------------------------");

console.log(`IdolModel("안유진", 2003)`);
const yujin2 = IdolModel("안유진", 2003); // new 키워드 없이 생성자 함수 호출

console.log({ yujin1 }); // IdolModel { name: '안유진', year: 2003, dance: [Function (anonymous)] }
console.log({ yujin2 }); // IdolModel { name: '안유진', year: 2003, dance: [Function (anonymous)] }

// 화살표 함수를 생성자 함수로 선언하면?
const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

// 에러 발생
// TypeError: IdolModelArrow is not a constructor
// 생성자 함수는 일반 함수로만 선언 가능. 화살표 함수로 선언할 수 없음.
const yujin3 = new IdolModelArrow("안유진", 2003);
