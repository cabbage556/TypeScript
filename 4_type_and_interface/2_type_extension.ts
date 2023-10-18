/**
 * Extension
 */
interface IName {
  name: string;
}

// interface는 상속 시 extends 키워드 사용
// interface IName 상속(extends)
interface IIdol extends IName {
  age: number;
}

// interface 상속(extends) 시 상속한 인터페이스의 모든 프로퍼티들을 그대로 받음
const idol: IIdol = {
  name: "안유진",
  age: 20,
};

type TName = {
  name: string;
};

// type은 상속 시 & 키워드 사용
// type TName 상속(&)
type TIdol = TName & {
  age: number;
};

// type 상속 시 상속한 타입의 모든 프로퍼티들을 그대로 받음
const idol2: TIdol = {
  name: "아이유",
  age: 29,
};

// 인터페이스는 인터페이스끼리, 타입은 타입끼리만 확장할 수 있는 것은 아니다.
// 인터페이스가 타입을 상속할 수 있음
interface IIdol2 extends TName {
  age: number;
}
const idol3: IIdol2 = {
  name: "제니",
  age: 29,
};

// 타입이 인터페이스를 상속할 수 있음
type TIdol2 = IName & {
  age: number;
};
const idol4: TIdol2 = {
  name: "장원영",
  age: 20,
};

/**
 * extending multiple
 * 여러 타입 상속 가능
 */
type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};
type DogBreed = {
  breed: string;
};

// 여러 타입 상속(원하는 만큼)
type Dog = DogName & DogAge & DogBreed;
const dog: Dog = {
  name: "후추",
  age: 2,
  breed: "시고르자브종",
};

interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}

// 여러 인터페이스 상속(원하는 만큼)
interface Cat extends CatName, CatAge {
  breed: string;
}
const cat: Cat = {
  name: "길냥이",
  age: 1,
  breed: "코리안 길냥이",
};

/**
 * Overriding
 */
type THeight = {
  height: number;
};
type TRectangle = THeight & {
  height: string; // height 프로퍼티 오버로딩 -> number & string -> never
  width: number;
};
const rect: TRectangle = {
  width: 10,
  // height: // never 타입: 인터섹션(&)을 사용하므로 number & string 타입 -> never 타입으로 유추됨
  // primitive 타입은 항상 같은 타입으로 오버로딩해야 함
};

type TWidth = {
  width: number | string;
};
type TRectangle2 = TWidth & {
  width: number; // width 프로퍼티 오버로딩 -> (number | string) & number -> number
  height: number;
};
const rect2: TRectangle2 = {
  height: 10,
  width: 10, // number 타입: (number | string) & number -> number 타입으로 유추됨(내로잉)
};

interface IHeight {
  height: number;
}
interface IRectangle extends IHeight {
  height: number; // 동일한 타입의 프로퍼티는 오버로딩 가능
  // height: string; // 동일하지 않은 타입의 프로퍼티는 오버로딩 불가능
  width: number;
}

interface IWidth {
  width: number | string;
}
interface IRectangle2 extends IWidth {
  // width 프로퍼티의 타입과 같거나 좀 더 자세한 타입으로 오버로딩 가능
  width: number;
  // width: string;
  // width: number | string;

  // 다른 타입으로 오버로딩 불가능(never 타입으로 유추되어 interface에서 오버로딩 불가능, type에서는 never 타입으로 유추되어 오버로딩 가능)
  // width: boolean;

  height: number;
}

// 상속 시
// 타입은 never 타입으로 유추되어도 오버로딩 가능
// 인터페이스는 never 타입으로 유추되면 오버로딩 불가능
