/**
 * namespace
 * ECMAScript에 모듈 관리가 정식 기능으로 도입되기 전에 사용했던 방식으로, 레거시 프로젝트에서는 사용되지만 새로운 프로젝트에서는 사용하지 않음
 */

// namespace: 관련 있는 코드들을 하나의 모듈로 묶을 수 있는 기능
namespace Home {
  class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  // 다른 네임스페이스에서 사용할 수 있도록 export 키워드 사용
  export const yujin = new Idol("안유진", 20);
}

namespace Post {
  class User {
    email: string;
    name: string;

    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }

  // 에러 발생: Home 네임스페이스에 정의된 Idol 클래스를 찾을 수 없음
  // const yujin = new Idol("안유진", 20);

  // Home 네임스페이스의 yujin 인스턴스: Home.yujin
  const admin = new User("admin@admin.com", Home.yujin.name);
  console.log(admin);
}

namespace Comment {
  const name = "comment";

  // 네임스페이스 중첩 가능
  namespace Detail {
    const page = "detail";

    console.log("중첩 네임스페이스 내부");
    console.log(name); // 외부 네임스페이스 변수에 접근 가능
    console.log(page);
  }

  console.log("중첩 네임스페이스 외부");
  console.log(name);
  // console.log(page); // 에러 발생: 내부 네임스페이스 변수에 접근 불가능
}
