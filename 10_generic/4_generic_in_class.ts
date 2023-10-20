/**
 * Generic in class
 */

class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;
}

// 인스턴스 생성 시 제네릭 타입 할당
const pgData = new Pagination<number, string>();
pgData.data; // number[] 타입
pgData.message; // string | undefined 타입
pgData.lastFetchedAt; // Date | undefined 타입

class Pagination2<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;

  // 생성자의 파라미터에 제네릭 타입 사용 가능
  constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

// 제네릭 타입 유추 가능
const pgData2 = new Pagination2([1, 2, 3]);
pgData2.data; // number[] 타입
pgData2.message; // unknown 타입: 제네릭 타입과 아규먼트를 전달하지 않았기 때문, 명시적으로 타입을 지정하려면 제네릭 타입을 전달하기
pgData2.lastFetchedAt; // Date | undefined 타입

// 기본 제네릭 타입 사용 가능
class Pagination3<T = boolean> {
  data: T[] = [];
}

const pgData3 = new Pagination3();
pgData3.data; // boolean[] 타입
