/**
 * Object: 객체
 */

// key: value pair
let yujin = {
    name: "안유진",
    group: "아이브",
    dance: function () {
        return `${this.name}이 춤을 춥니다.`;
    },
};

// 객체 프로퍼티 접근 방법
console.log(yujin.name);
console.log(yujin["name"]);

// 객체 프로퍼티 이름을 변수에 저장 가능
const key = "group";
console.log(yujin[key]);

// dance 메서드에서 this가 yujin 객체를 가리키도록 yujin 객체로 호출하기
console.log(yujin.dance());

// 대괄호[]를 사용해 변수를 키로 사용 가능
const nameKey = "name";
const nameVal = "안유진";
const groupKey = "group";
const groupVal = "아이브";
const yujin2 = {
    [nameKey]: nameVal,
    [groupKey]: groupVal,
};
console.log(yujin2);

// 존재하지 않는 키에 값을 대입하면 프로퍼티로 추가됨
yujin2["englishName"] = "An Yu Jin";
console.log(yujin2);

// delete를 사용해 프로퍼티 삭제 가능
delete yujin2["englishName"];
console.log(yujin2);

/**
 * 모든 키 가져오기: Object.keys(객체)
 */
console.log(Object.keys(yujin2));

/**
 * 모든 값 가져오기: Object.values(객체)
 */
console.log(Object.values(yujin2));

// 키-값이 동일한 경우 줄여서 표현 가능
const name = "안유진";
const yujin3 = {
    name,
};
console.log(yujin3);
