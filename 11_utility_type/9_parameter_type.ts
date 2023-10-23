/**
 * Parameters type
 * 함수의 파라미터들의 타입을 배열 형식으로 가져오는 유틸리티 타입
 */
function sample(x: number, y: string, z: boolean) {}

type Params = Parameters<typeof sample>; // [x: number, y: string, z: boolean] 타입
type Params2 = Parameters<(one: number) => void>; // [one: number] 타입
