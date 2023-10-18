/**
 * Narrowing
 *
 * Narrowing은 union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추할 수 있게 되는 것을 의미
 */

// number 타입 또는 string 타입으로 선언
// 문자열 할당
// let numberOrString: number | string = "code factory";
// numberOrString; // 문자열을 할당했으므로 string 타입으로 유추됨

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// 컴파일 에러
//    number 타입의 toFixed 메서드를 string 타입의 변수에서 사용할 수 없음
//    narrowing 된 타입으로 완전하게 인식하기 때문
// numberOrString.toFixed(2);

/**
 * Narrowing 종류
 *
 * 1. assignment narrowing
 * 2. typeof narrowing
 * 3. truthiness narrowing
 * 4. equality narrowing
 * 5. in operator narrowing
 * 6. instanceof narrowing
 * 7. discrimated union narrowing (차별된 유니온 내로잉)
 * 8. exhaustiveness checking
 */

// 1. Assignment narrowing
//    특정 값을 할당하는 방식의 내로잉
let numberOrString: number | string = "아이유";
numberOrString.includes("아"); // string 타입으로 유추됨

// 2. typeof narrowing
// 컴파일 타임에 정확한 타입을 유추할 수 없으므로 number | string 타임으로 유추됨
numberOrString = Math.random() > 0.5 ? 11 : "아이유";

if (typeof numberOrString === "string") {
  // if문 내부에서 numberOrString은 string 타입으로 유추됨
  numberOrString;
} else {
  // else문 내부에서 numberOrString은 number 타입으로 유추됨
  numberOrString;
}

// 3. truthiness narrowing
let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];

if (nullOrString) {
  // if문 내부에서 nullOrString은 string[] 타입으로 유추됨
  //    if문 조건을 통과하려면 nullOrString은 truthy 값이어야 하기 때문에
  nullOrString;
} else {
  // else문 내부에서 nullOrString은 null 타입으로 유추됨
  //    if문 조건을 통과하지 못하는 경우 nullOrString은 falsy 값이어야 하기 때문에
  nullOrString;
}

// 4. equality narrowing
let numberOrString2: number | string = Math.random() > 0.5 ? 11 : "아이유";
let stringOrBool2: string | boolean = Math.random() > 0.5 ? "아이브" : true;

if (numberOrString2 === stringOrBool2) {
  // if문 내부에서 두 변수 모두 string 타입으로 유추됨
  //    if문 조건을 통과하려면 두 변수의 타입이 모두 string 타입인 경우만 가능하기 때문에
  numberOrString2;
  stringOrBool2;
} else {
  // else문 내부에서 두 변수 모두 기존의 유니온 타입으로 유추됨
  //    if문 조건을 통과하지 못하는 경우 두 변수의 타입은 유니온 타입 중 어떤 것이라도 될 수 있기 때문에
  numberOrString2;
  stringOrBool2;
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 11 : Math.random() > 0.5 ? "안유진" : null;

if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull;
} else {
  // else문 내부에서 string | null 타입으로 유추됨
  //    if문 조건을 통과하지 못하는 경우 변수의 타입은 number 타입이 될 수 없기 때문에
  numberOrStringOrNull;
}

// 5. in operator narrowing
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  type: string;
}
let human: Human = {
  name: "안유진",
  age: 20,
};
let dog: Dog = {
  name: "오리",
  type: "Bulldog",
};

// in 연산자
//    human 객체에 'name'이라는 키가 존재하는지 여부를 true / false로 리턴
console.log("name" in human);
console.log("name2" in human);

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

if ("type" in humanOrDog) {
  // if문 내부에서 humanOrDog는 Dog 타입으로 유추됨
  //    if문 조건을 통과하려면 humanOrDog에 'type' 키가 존재해야 하기 때문에
  humanOrDog;
} else {
  // else문 내부에서 Human 타입으로 유추됨
  //    if문 조건을 통과하지 못하는 경우는 Human 타입인 경우이기 때문에
  humanOrDog;
}

// 6. instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "아이유";

if (dateOrString instanceof Date) {
  // if문 내부에서 Date 타입으로 유추됨
  //    if문 조건을 통과하려면 Date 타입이어야 하기 때문에
  dateOrString;
} else {
  // else문 내부에서 string 타입으로 유추됨
  dateOrString;
}

// 7. discriminated union narrowing
interface Animal {
  type: "dog" | "human";
  height?: number; // 사람 키
  breed?: string; // 강아지 종
}
let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "Bulldog",
      };

if (animal.type === "human") {
  // number | undefined로 유추됨
  //    height 프로퍼티를 옵셔널로 선언했기 때문에
  animal.height;
} else {
  // 두 프로퍼티 모두 옵셔널로 선언했으므로 유니온 undefined가 추가됨
  animal.height; // number | undefined
  animal.breed; // string | undefined
}

// 타입을 나누고 싶을 때 하나의 인터페이스를 사용하지 않음
//    두 인터페이스를 선언하고 유니온으로 묶는 방법이 타입을 정확히 유추하기가 유리함
interface Human2 {
  type: "human";
  height: number;
}
interface Dog2 {
  type: "dog";
  breed: string;
}
type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "Bulldog",
      };

if (humanOrDog2.type === "human") {
  // Human2 타입으로 유추됨
  //    if문 조건을 통과하려면 type 프로퍼티가 'human'인 Human2 타입이어야 하므로
  humanOrDog2;
} else {
  // Dog2 타입으로 유추됨
  //    if문 조건을 통과하지 못하는 경우는 type 프로퍼티가 'dog'인 Dog2 타입이어야 하므로
  humanOrDog2;
}

// 8. Exhaustiveness checking
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2; // Human2 타입으로 유추됨
    break;
  case "dog":
    humanOrDog2; // Dog2 타입으로 유추됨
    break;
  default:
    // never 타입으로 유추됨
    //    switch문에서 humanOrDog2의 type 프로퍼티는 'human' 또는 'dog' 밖에 될 수 없음
    //    결국 위 두 케이스에 무조건 해당됨
    //    따라서 default로는 코드 실행이 갈 수 없기 때문에 never 타입으로 유추됨
    const _check: never = humanOrDog2;
    break;
}

// default에서 never 타입을 활용하는 방법
interface Human3 {
  type: "human";
  height: number;
}
interface Dog3 {
  type: "dog";
  breed: string;
}
interface Fish3 {
  type: "fish";
  length: number;
}
type HumanOrDogOrFish3 = Human3 | Dog3 | Fish3;

let humanOrDogOrFish3: HumanOrDogOrFish3 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : Math.random() > 0.5
    ? {
        type: "dog",
        breed: "Bulldog",
      }
    : {
        type: "fish",
        length: 11,
      };

switch (humanOrDogOrFish3.type) {
  case "human":
    humanOrDogOrFish3;
    break;
  case "dog":
    humanOrDogOrFish3;
    break;
  default:
    // type 프로퍼티가 'fish'를 가질 수 있는 코드로 변경된 경우
    //    default에서 humanOrDogOrFish3이 Fish3으로 유추됨
    //    'fish'에 해당하는 case 문이 없기 때문
    //    따라서 코드 변경에 맞춰 case 문을 작성하지 않은 경우 never 타입을 통해 컴파일 에러를 발생시켜 에러를 사전에 방지할 수 있음
    const _check: never = humanOrDogOrFish3;
}
