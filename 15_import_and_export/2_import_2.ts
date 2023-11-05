/**
 * import
 */
// 일반적인 export의 경우 export default와 달리 원하는 이름으로 임포트할 수 없음
// export한 이름을 그대로 사용해야 함
import { IdolModel, iu, number, ICat } from "./2_export_1";

const yujin = new IdolModel("안유진", 20);
console.log(yujin);

console.log(iu);

console.log(number);

const cat: ICat = {
  name: "냥이",
  breed: "코리안 길냥이",
};
console.log(cat);
