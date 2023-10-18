/**
 * Object union
 */

/**
 * 유추된 객체 타입 유니온
 */
const dogOrCat =
  Math.random() > 0.5
    ? // 강아지
      {
        name: "별이",
        age: 10,
      }
    : // 고양이
      {
        name: "오리",
        breed: "코리안 길냥이",
      };

// 암묵적으로 타입을 유추하면 옵셔널 프로퍼티가 되어 | undefined 타입이 유추됨
dogOrCat.name; // string 타입 유추
dogOrCat.age; // number | undefined 타입 유추
dogOrCat.breed; // string | undefined 타입 유추

// age, breed 프로퍼티를 포함시키지 않으려면 타입을 직접 선언해야 함
interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat =
  Math.random() > 0.5
    ? // 강아지
      {
        name: "별이",
        age: 10,
      }
    : // 고양이
      {
        name: "오리",
        breed: "코리안 길냥이",
      };

// 명시적으로 타입을 선언하면 프로퍼티에 바로 접근할 수 없음
dogOrCat2.name; // string 타입
dogOrCat2.age; // 컴파일 에러: age 프로퍼티가 Cat 타입에 존재하지 않음
dogOrCat2.breed; // 컴파일 에러: breed 프로퍼티가 Dog 타입에 존재하지 않음

// 내로잉을 통해 프로퍼티에 접근 가능
if ("age" in dogOrCat2) {
  dogOrCat2; // Dog 타입
  dogOrCat2.age; // age 프로퍼티 접근 가능
} else {
  dogOrCat2; // Cat 타입
  dogOrCat2.breed; // breed 프로퍼티 접근 가능
}
