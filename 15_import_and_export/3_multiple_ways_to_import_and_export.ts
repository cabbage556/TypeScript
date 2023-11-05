/**
 * multiple ways to Import and Export
 */
// 일반적인 export를 임포트할 때 원하는 이름으로 변경하려면 as 키워드 사용 가능
// import { IdolModel as Idol, iu, number, ICat } from "./2_export_1";

// console.log(new Idol("장원영", 19));

// 와일드카드 임포트
//      하나의 객체로 임포트
// import * as all from "./2_export_1";
// console.log(all);
// console.log(all.number);

// export default와 export 동시에 임포트
// import cf, { iu, number } from "./2_export_1";
// console.log(cf);
// console.log(iu);
// console.log(number);

// tsconfig.json의 baseUrl: './' 을 설정하는 경우
//    baseUrl: './' 은 tsconfig.json이 위치한 프로젝트의 디렉터리를 의미함
//    즉 프로젝트의 루트부터 import 경로를 설정할 수 있게 해주는 옵션
import { IdolModel } from "15_import_and_export/2_export_1";
