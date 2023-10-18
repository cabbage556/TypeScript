/**
 * Optional and Undefined property
 */
interface Dog {
  name: string;
  age: number;
  breed?: string; // optional property: 종을 모르면 undefined(string | undefined)
}

const dang: Dog = {
  name: "댕이",
  age: 1,
  breed: "시고르자브종",
};
const ori: Dog = {
  name: "오리",
  age: 2,
};

// optional property의 경우 | undefined 타입으로 유추된다.
// 그렇다면 | undefined 타입으로 선언하는 경우와 어떻게 다를까?
interface Cat {
  name: string;
  age: number;
  breed: string | undefined;
}

// breed 프로퍼티를 string | undefined 타입으로 선언했지만, optional 프로퍼티와 달리 무조건 undefined를 할당해야 한다.
const navi: Cat = {
  name: "나비",
  age: 3,
  // breed: undefined, // breed 프로퍼티에 값을 할당하지 않으면 컴파일 에러
};

// optional 프로퍼티는 값을 할당하지 않아도 된다.
// 하지만 | undefined 타입으로 선언되면 값이 없더라도 undefined를 무조건 할당해야 한다.
