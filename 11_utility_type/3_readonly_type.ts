/**
 * Readonly type
 * 프로퍼티를 읽기 전용으로 만드는 유틸리티 타입
 */
interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: "nya",
  age: 8,
};

nyaong.name = "nyaong"; // 프로퍼티 값 수정 가능

const bori: Readonly<Cat> = {
  name: "bori",
  age: 2,
};

bori.name; // 프로퍼티 읽기 가능
bori.name = "보리"; // 프로퍼티 쓰기 불가능

// Readonly 유틸리티 타입은 타입스크립트에만 존재하므로 무시하고 자바스크립트 코드로 컴파일하면 값을 할당할 수 있음
// 자바스크립트에서도 읽기 전용으로 선언하려면 Object.freeze 사용
Object.freeze(bori);
