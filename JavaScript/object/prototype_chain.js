/**
 * Prototype
 */
const testObj = {};

// __proto__: 모든 객체에 존재하는 프로퍼티
//    생성자 함수(클래스)의 prototype 프로퍼티(객체)
console.log(testObj.__proto__);

// 생성자 함수(클래스)
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

// 생성자 함수 IdolModel의 prototype 프로퍼티
console.dir(IdolModel.prototype, {
    showHidden: true, // 숨겨진 프로퍼티까지 출력하는 옵션
});
// constructor 프로퍼티 확인 가능: 생성자 함수인 [Function: IdolModel]을 값으로 가짐

// circular reference(순환 참조)
//    IdolModel 생성자 함수의 prototype 프로퍼티의 constructor 프로퍼티는 생성자 함수 IdolModel을 가리킴
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

// 인스턴스의 __proto__ 프로퍼티는 생성자 함수의 prototype 프로퍼티와 동일함
//    인스턴스의 __proto__ 프로퍼티가 생성자 함수의 prototype 프로퍼티를 가리키는 것
const yujin = new IdolModel("안유진", 2003);
console.log(yujin.__proto__); // {}
console.log(yujin.__proto__ === IdolModel.prototype); // true

// 인스턴스의 __proto__ 프로퍼티는 객체이므로 Object 생성자 함수의 prototype 프로퍼티를 가리킴
console.log(testObj.__proto__ === Object.prototype); // true

// 프로토타입 체인에서 최상위에 Object.prototype이 위치함
console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

// yujin 인스턴스에서 Object.prototype의 toString 함수 사용 가능(프로토타입 체인)
console.log(yujin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    // 인스턴스 프로퍼티
    this.name = name;
    this.year = year;

    // 인스턴스 메서드
    this.sayHi = function () {
        return `${this.name}이 인사를 합니다.`;
    };
}

const yujin2 = new IdolModel2("안유진", 2003);
const wonyoung2 = new IdolModel2("장원영", 2004);

console.log(yujin2.sayHi());
console.log(wonyoung2.sayHi());

// 인스턴스 메서드는 인스턴스 자체가 소유하기 때문에 두 인스턴스 메서드를 비교하면 서로 다르다.
//    또한 인스턴스 메서드는 인스턴스마다 메모리 공간을 별도로 차지하므로 비효율적이다.
console.log("인스턴스 메서드 비교");
console.log(yujin2.sayHi === wonyoung2.sayHi); // false: 두 인스턴스 메서드는 같지 않음
console.log(yujin2.hasOwnProperty("sayHi")); // true: sayHi는 yujin2 인스턴스의 고유 메서드(상속 받지 않음)
console.log(wonyoung2.hasOwnProperty("sayHi")); // true: sayHi는 wonyoung2 인스턴스의 고유 메서드(상속 받지 않음)

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

// 생성자 함수 IdolModel3의 prototype 프로퍼티에 sayHi 메서드(프로토타입 메서드) 정의
IdolModel3.prototype.sayHi = function () {
    return `${this.name}이 인사를 합니다.`;
};

const yujin3 = new IdolModel3("안유진", 2003);
const wonyoung3 = new IdolModel3("장원영", 2004);

// IdolModel3 인스턴스는 프로토타입 메서드 sayHi 호출 가능
console.log(yujin3.sayHi());
console.log(wonyoung3.sayHi());

// IdolModel3 인스턴스는 동일한 프로토타입 메서드를 호출함
console.log("프로토타입 메서드 비교");
console.log(yujin3.sayHi === wonyoung3.sayHi); // true
console.log(yujin3.hasOwnProperty("sayHi")); // false: sayHi는 yujin3 인스턴스의 고유 프로퍼티가 아니고 프로토타입 메서드(상속한 메서드)
console.log(wonyoung3.hasOwnProperty("sayHi")); // false: sayHi는 wonyoung3 인스턴스의 고유 프로퍼티가 아니고 프로토타입 메서드(상속한 메서드)

/**
 * static
 *    - 생성자 함수도 결국 객체이므로 생성자 함수에 함수를 추가할 수 있음
 */
IdolModel3.sayStaticHi = function () {
    return `안녕하세요. 저는 static 메서드입니다.`;
};
console.log(IdolModel3.sayStaticHi());

/**
 * Overriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    // 인스턴스 메서드(프로퍼티 셰도잉 - 클래스의 overriding)
    this.sayHi = function () {
        return `안녕하세요. 저는 인스턴스 메서드입니다.`;
    };
}

// 프로토타입 메서드
IdolModel4.prototype.sayHi = function () {
    return `안녕하세요. 저는 프로토타입 메서드입니다.`;
};

const yujin4 = new IdolModel4("안유진", 2003);
console.log(yujin4.sayHi()); // 프로토타입 메서드가 아닌 인스턴스 메서드 sayHi 호출

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel5(name, year) {
    this.name = name;
    this.year = year;
}
IdolModel5.prototype.sayHi = function () {
    return `${this.name} 인사를 합니다.`;
};

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name} 춤을 춥니다.`;
    };
}

const gaeul = new IdolModel5("가을", 2004);
const ray = new FemaleIdolModel("레이", 2004);

console.log(gaeul.__proto__);
console.log(gaeul.__proto__ === IdolModel5.prototype); // true
console.log(Object.getPrototypeOf(gaeul) === IdolModel5.prototype); // true

console.log(gaeul.sayHi()); // 프로토타입 메서드 호출
console.log(ray.dance()); // 인스턴스 메서드 호출

console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true

/**
 * 인스턴스의 __proto__ 변경
 */
// ray 인스턴스의 프로토타입을 IdolModel5.prototype으로 변경함
Object.setPrototypeOf(ray, IdolModel5.prototype);
console.log(ray.sayHi()); // 프로토타입 메서드를 호출할 수 있게 되었음

// ray 인스턴스의 프로토타입이 IdolModel5.prototype으로 변경되었음
console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel5); // true
console.log(gaeul.constructor === IdolModel5); // true

// ray 인스턴스의 프로토타입이 IdolModel5.prototype으로 변경되었음
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false

// FemaleIdolModel의 prototype은 변경되지 않았음
console.log(FemaleIdolModel.prototype === IdolModel5.prototype); // false

/**
 * 함수의 prototype 변경
 */
// FemaleIdolModel 생성자 함수의 프로토타입을 IdolModel5.prototype으로 변경
FemaleIdolModel.prototype = IdolModel5.prototype;

const eseo = new FemaleIdolModel("이서", 2007);
console.log(Object.getPrototypeOf(eseo) === FemaleIdolModel.prototype); // true
console.log(Object.getPrototypeOf(eseo) === IdolModel5.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel5.prototype); // true

// IdolModel5.prototype의 sayHi 프로토타입 메서드 호출 가능
console.log(eseo.sayHi());
