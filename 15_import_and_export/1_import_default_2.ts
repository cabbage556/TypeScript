/**
 * import default
 */
// 1
// 이 파일을 기준으로 임포트할 파일의 상대 경로 입력
// import IdolModel from "./1_export_default_1";

// export default를 임포트할 때 원하는 이름으로 임포트 가능
// import Idol from "./1_export_default_1";
// const yujin = new Idol("안유진", 20);
// console.log(yujin);

// 2
// import number from "./1_export_default_1";
// console.log(number);

// 3
// import Cat from "./1_export_default_1";
// const cat: Cat = {
//   name: "냥이",
//   breed: "코리안 길냥이",
// };
// console.log(cat);

// 4
// 여러 개를 export default하는 경우 하나의 객체를 가져옴
import Example from "./1_export_default_1";

const yujin = new Example.IdolModel("안유진", 20);
console.log(yujin);
console.log(Example.number);
