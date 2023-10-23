/**
 * Partial type
 * 프로퍼티를 옵셔널 프로퍼티로 만드는 유틸리티 타입
 */
interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yujin: Idol = {
  name: "안유진",
  age: 23,
  groupName: "아이브",
};

// 원본 값을 수정할 값으로 덮어쓰기
//    수정할 값을 받는 파라미터의 타입을 Idol 인터페이스의 Partial 타입으로 선언
function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
  return {
    ...original,
  };
}

console.log(
  updateIdol(yujin, {
    // 수정할 값만 전달 가능(name, age, groupName 프로퍼티 중에서 수정할 프로퍼티 0개 이상 선택 가능)
    age: 20,
    height: 170, // 컴파일 에러: Idol 인터페이스에 존재하지 않는 타입
  })
);

type PartialIdol = Partial<Idol>; // Idol 인터페이스의 모든 프로퍼티가 옵셔널 프로퍼티가 됨
