/**
 * 에러 핸들링
 *
 * 1. 에러를 발생시킨다 -> 에러를 던진다고 한다. (throw)
 * 2. 에러를 명시적으로 인지한다 -> 에러를 잡는다고 한다. (catch)
 */

function runner() {
    // try 내부에서 에러가 던져지면 catch에서 에러를 잡는다.
    // 에러 발생 여부 상관 없이 항상 finally는 실행된다.
    //      finally는 필수가 아님
    try {
        console.log("-----try-----");
        console.log("hello");
        throw new Error("큰 문제 발생!!");
        console.log("hello2");
    } catch (e) {
        console.log("-----catch-----");
        console.log(e);
    } finally {
        console.log("-----finally-----");
    }
}
runner();
