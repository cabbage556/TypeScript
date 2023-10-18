/**
 * Casting
 * TS에서 Casting을 하면 JS에서는 적용이 되지 않음
 */
let codeFactory = "code factory";
console.log(codeFactory.toUpperCase());

let testNumber = 3;
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase()); // any 타입의 문제점: 변수에 저장된 값이 어떤 것이든지 toUpperCase 메서드를 가지고 있다고 가정함

// casting을 사용하면 실제 그 타입이 아니더라도 해당 타입이라고 가정할 수 있음
let stringVar = sampleNumber as string;

// casting은 JS에서 아무런 의미를 갖지 않음
// sampleNumber에는 5가 저장되어 있기 때문에 JS는 sampleNumber를 number 타입이라고 간주함
// string 타입으로 casting하더라도 number 타입이 됨
//   TS에서 casting하면 casting하려는 타입으로 간주할 수 있고, 해당 타입의 메서드를 사용할 수 있게 되는데
//   TS에서 string 타입으로 casting해서 string 타입의 메서드를 사용했지만,
//   JS는 number 타입으로 간주하므로 string 타입의 메서드를 사용할 수 없어서 에러가 발생함
//   결과적으로 TS에서 코드를 편리하게 작성하기 위해 casting 사용하는 것을 지양해야 함
console.log(typeof (sampleNumber as string));
console.log((sampleNumber as string).toUpperCase());

// JS 코드를 실제로 실행할 때의 타입과 TS 코드를 작성할 때 인식하는 타입이 달라질 수 있다는 문제점이 발생함
let number = 5;
// console.log(number.toUpperCase()); // number 타입에는 toUpperCase가 존재하지 않으므로 사용할 수 없음
console.log((number as any).toUpperCase()); // any 타입으로 casting하면 toUpperCase를 가지고 있다고 가정하므로 사용할 수 있으나 실행하면 에러 발생
