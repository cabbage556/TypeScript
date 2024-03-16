/**
 * Property attribute: 프로퍼티의 상태를 표현하는 속성
 *
 * 1. 데이터 프로퍼티: 키-값으로 형성되어 실질적 값을 갖고 있는 프로퍼티
 * 2. 액세서 프로퍼티: 자체적으로 값을 갖지 않지만 다른 프로퍼티의 값을 가져오거나 값을 설정할 때 호출하는 함수로 구성된 프로퍼티
 *                 getter, setter
 *
 * JS 엔진은 프로퍼티 생성 시 프로퍼티의 상태를 표현하는 프로퍼티 어트리뷰트를 기본값으로 자동 정의함
 */

const yujin = {
    name: "안유진",
    year: 2003,
};

/**
 * 객체에 대해 섬세한 작업이 필요할 경우 '프로퍼티 어트리뷰트' 활용 가능
 * 4가지 프로퍼티 어트리뷰트가 존재함
 *
 * 1. value: 프로퍼티의 실제 값
 * 2. writable: 프로퍼티의 값 수정 여부
 *              true - 프로퍼티의 값 수정 가능
 *              false - 프로퍼티의 값 수정 불가능
 * 3. enumerable: 프로퍼티 열거 가능 여부
 *                true - for...in 반복문 등을 통해 해당 프로퍼티 열거 가능
 *                false - for...in 반복문 등을 통해 해당 프로퍼티 열거 불가능
 * 4. configurable: 프로퍼티 어트리뷰트의 재정의 가능 여부
 *                  true - 해당 프로퍼티의 삭제, 다른 프로퍼티 어트리뷰트의 수정 가능
 *                  false - 해당 프로퍼티의 삭제, 다른 프로퍼티 어트리뷰트의 수정 불가능
 *                  단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능함
 */

// Object.getOwnPropertyDescriptor(객체, 프로퍼티 키)
//    객체의 프로퍼티에 대한 프로퍼티 디스크립터 객체를 반환함
//    프로퍼티 디스크립터 객체: '프로퍼티 어트리뷰트 정보'를 제공하는 객체

// yujin 객체의 year 프로퍼티에 대한 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체
const yujinYearPropDescriptor = Object.getOwnPropertyDescriptor(yujin, "year");
console.log({ yujinYearPropDescriptor });

// yujin 객체의 name 프로퍼티에 대한 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체
const yujinNamePropDescriptor = Object.getOwnPropertyDescriptor(yujin, "name");
console.log({ yujinNamePropDescriptor });

// Object.getOwnPropertyDescriptors 메서드
//    객체의 모든 프로퍼티에 대한 프로퍼티 디스크립터 객체를 반환함

// yujin 객체의 모든 프로퍼티에 대한 프로퍼티 디스크립터 객체
const yujinPropDescriptors = Object.getOwnPropertyDescriptors(yujin);
console.log({ yujinPropDescriptors });

const yujin2 = {
    name: "안유진",
    year: 2003,

    // 액세서 프로퍼티: getter
    get age() {
        return new Date().getFullYear() - this.year;
    },

    // 액세서 프로퍼티: setter
    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
};

console.log(yujin2.age); // getter 동작 확인: 21
yujin2.age = 32; // setter 동작
console.log(yujin2.age); // 32
console.log(yujin2.year); // 1991

// 액세서 프로퍼티의 어트리뷰트 확인
const yujin2AgeAccessorPropDescriptor = Object.getOwnPropertyDescriptor(yujin2, "age");
console.log({ yujin2AgeAccessorPropDescriptor });
// 액세서 프로퍼티의 프로퍼티 어트리뷰트
//    get, set 어트리뷰트가 존재함
//    value, writable 어트리뷰트가 존재하지 않음

// 객체에 프로퍼티를 추가하는 일반적인 방법
//    프로퍼티의 프로퍼티 어트리뷰트에 기본값이 할당됨
yujin2.height = 172;
const yujin2HeightPropDescriptor = Object.getOwnPropertyDescriptor(yujin2, "height");
console.log({ yujin2HeightPropDescriptor });

// Object.definedProperty(객체, 프로퍼티 키, 프로퍼티 디스크립터 객체)
//    프로퍼티 어트리뷰트의 값을 할당하면서 프로퍼티를 추가할 수 있음
// yujin2 객체에 height2 프로퍼티를 추가할 때 정의한 대로 프로퍼티 어트리뷰트 값이 할당됨
Object.defineProperty(yujin2, "height2", {
    value: 172,
    writable: false,
    enumerable: true,
    configurable: false,
});
const yujin2Height2PropDesriptor = Object.getOwnPropertyDescriptor(yujin2, "height2");
console.log({ yujin2Height2PropDesriptor });

// 프로퍼티 어트리뷰트의 값을 직접 할당하지 않으면 기본적으로 false가 할당됨
Object.defineProperty(yujin2, "height3", {
    value: 172,
});
const yujin2Height3PropDescriptor = Object.getOwnPropertyDescriptor(yujin2, "height3");
console.log({ yujin2Height3PropDescriptor });

/**
 * writable: 프로퍼티 값 수정 가능 여부
 */
Object.defineProperty(yujin2, "height4", {
    value: 172,
    writable: true, // height4 프로퍼티의 값을 수정할 수 있음
    enumerable: true,
    configurable: true,
});
yujin2.height4 = 180;
console.log({ yujin2 });

// height4 프로퍼티의 writable을 false로 수정하기
//    다른 프로퍼티 어트리뷰트의 값은 수정되지 않음
Object.defineProperty(yujin2, "height4", {
    writable: false,
});
const yujin2Height4PropDescriptor = Object.getOwnPropertyDescriptor(yujin2, "height4");
console.log({ yujin2Height4PropDescriptor });

// writable: false인 프로퍼티의 값을 변경해도 에러가 발생하지 않는다.
//    하지만 프로퍼티의 값이 변경되지 않는다.
yujin2.height4 = 172;
console.log({ yujin2Height4PropDescriptor });

/**
 * enumerable: 프로퍼티의 열거 가능 여부
 */
// height4 프로퍼티 키가 포함됨
console.log(`Object.keys(yujin2): ${Object.keys(yujin2)}`);
for (const key in yujin2) {
    console.log(key);
}

// height4 프로퍼티의 enumerable을 false로 수정하기
// height4 프로퍼티 키가 포함되지 않음
Object.defineProperty(yujin2, "height4", {
    enumerable: false,
});
console.log(Object.keys(yujin2));
for (const key in yujin2) {
    console.log(key);
}
console.log(yujin2);
console.log(yujin2.height4); // 180: height4 프로퍼티가 사라진 것은 아님. 다만 열거할 수 없음

/**
 * configurable: 프로퍼티 어트리뷰트 수정 가능 여부
 */
// height 프로퍼티의 configurable을 false로 변경
Object.defineProperty(yujin2, "height", {
    configurable: false,
});

// height 프로퍼티의 configurable이 false인 상태에서 enumerable을 false로 변경
// 에러 발생
//    TypeError: Cannot redefine property: height
//    configurable이 false이므로 프로퍼티 어트리뷰트를 재정의할 수 없음
Object.defineProperty(yujin2, "height", {
    enumerable: false,
});

// configurable이 false인 상태에서 writable이 true이면 프로퍼티의 값을 수정할 수 있음
yujin2.height = 177;
console.log(yujin2.height); // 177: height 프로퍼티의 값이 변경됨

// configurable이 false인 상태에서 writable이 true이면 false로 수정할 수 있음
Object.defineProperty(yujin2, "height", {
    writable: false,
});

// writable이 false로 변경됨
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

// 하지만 configurable이 false인 상태에서 writable이 false이면 다시 writable을 true로 수정할 수 없음
// 에러 발생
// TypeError: Cannot redefine property: height
Object.defineProperty(yujin2, "height", {
    writable: true,
});
