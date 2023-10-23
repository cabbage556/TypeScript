/**
 * Non nullable type
 * 유니온 타입 중에서 null이 될 수 없는 타입만 추출하는 유틸리티 타입
 */
type NonNull = NonNullable<string | number | null | undefined | object>; // string | number | object 타입(null, undefined 타입 제외)
