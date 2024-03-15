/**
 * Hoisting: 모든 변수 선언문이 코드 최상단으로 이동된 것처럼 느껴지는 현상
 *
 * 실제로 변수 선언문이 코드 최상단으로 이동하는 것은 아니다.
 * 호이스팅은 실행 컨텍스트와 관계가 있는 현상으로, 실행 컨텍스트를 통해 호이스팅에 대해 좀 더 자세히 알 수 있다.
 */

// console.log(name);
// var name = "코드팩토리";
// console.log(name);

var name;
console.log(name);
name = "코드팩토리";
console.log(name);

/**
 * let, const도 var와 마찬가지로 호이스팅이 발생한다.
 * 다만 var와 달리 let, const는 변수 할당 이전에 변수에 접근하는 것을 막는다.
 */

// '변수가 정의되지 않음' 에러가 발생하지 않는다.
//      yujin 변수가 호이스팅되어 이미 yujin 변수가 정의되었다는 것을 알고 있는 것이다.
//      하지만 let 변수는 할당 이전에 접근할 수 없으므로 '할당 이전에 접근할 수 없음' 에러가 발생한다.
console.log(yujin); // ReferenceError: Cannot access 'yujin' before initialization
let yujin = "안유진";

// '변수가 정의되지 않음' 에러가 발생하지 않는다.
//      yujin2 변수가 호이스팅되어 이미 yujin2 변수가 정의되었다는 것을 알고 있는 것이다.
//      하지만 const 변수는 할당 이전에 접근할 수 없으므로 '할당 이전에 접근할 수 없음' 에러가 발생한다.
console.log(yujin2); // ReferenceError: Cannot access 'yujin2' before initialization
const yujin2 = "안유진";
