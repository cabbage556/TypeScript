/**
 * defining class
 */
class Sample {}

class Game {
  // 타입스크립트에서 프로퍼티 타입 선언 필요
  name: string;
  country: string;
  download: number;

  // 생성자에서 프로퍼티 초기화
  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  // 메서드
  intro() {
    return `${this.name}은 ${this.country}에서 제작되어 ${this.download}번의 다운로드를 달성한 게임입니다.`;
  }
}

// 생성자 정의에 맞게 객체 생성 가능
//    생성자 정의에 맞지 않으면 컴파일 에러
const starcraft = new Game("스타크래프트", "미국", 10000000);
const intro = starcraft.intro();

// 타입스크립트에서 존재하지 않는 메서드 호출 시 컴파일 에러
//    자바스크립트의 경우 런타임 에러
starcraft.changeGame();
