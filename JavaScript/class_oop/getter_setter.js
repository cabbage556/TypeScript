/**
 * getter / setter
 *
 * getter
 *      데이터를 가공해서 반환할 때
 *      private 프로퍼티를 반환할 때
 *
 * setter
 *      일반적으로 프로퍼티 이름과 동일하게 설정
 *      프로퍼티의 값을 지정함
 *      immutable 프로그래밍에서 사용하지 않는 개념
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // getter
    get nameAndYear() {
        return `${this.name}-${this.year}`;
    }

    // setter
    set name(name) {
        this.name = name;
    }
}

const yujin = new IdolModel("안유진", 2003);
console.log(yujin.nameAndYear); // getter는 하나의 프로퍼티처럼 사용 가능

yujin.name = "안유쥔"; // setter로 프로퍼티 값 지정
console.log(yujin);

/**
 * getter, setter는 private 프로퍼티에 주로 사용한다.
 */
class IdolModel2 {
    #name; // private 프로퍼티 정의(ES7)
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    // getter: private 프로퍼티 반환
    get name() {
        return this.#name;
    }

    // setter: private 프로퍼티 값 지정
    set name(name) {
        this.#name = name;
    }
}

const yujin2 = new IdolModel2("안유진", 2003);
console.log(yujin2); // private 프로퍼티가 출력되지 않음
console.log(yujin2.name); // getter를 사용해 private 프로퍼티의 값 반환

yujin2.name = "안유쥔"; // setter를 사용해 private 프로퍼티의 값 지정
console.log(yujin2.name); // getter를 사용해 private 프로퍼티의 값 반환
