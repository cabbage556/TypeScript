/**
 * Enum
 */

/**
 * API 요청
 * 4가지 상태
 *
 * DONE - 요청 완료 상태
 * ERROR - 에러가 발생한 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */
function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";
    // 작업
    state = "DONE";
  } catch (error) {
    state = "ERROR";
  } finally {
    return state;
  }
}
console.log(runWork());
console.log(runWork() === "DONNE"); // 문자열끼리의 비교는 발견하기 어려운 버그가 발생할 가능성이 높아진다.

// JS에서 문자열끼리의 비교 중 버그를 최대한 줄이기 위해서 사용한 방법
//    변수 사용하기
const doneState = "DONE";
const errorState = "ERROR";
const loadingState = "LOADING";
const initialState = "INITIAL";

function runWork2() {
  let state = initialState;

  try {
    state = loadingState;
    // 작업
    state = doneState;
  } catch (error) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState); // 문자열끼리 직접 비교하는 대신 변수끼리 비교

// TS에서는 enum을 사용하여 비교 가능
enum State {
  DONE = "DONE", // 0 대신 직접 값을 입력해서 초기화 가능
  LOADING = "LOADING",
  INITIAL = "INITIAL",
  ERROR = "ERROR",
}

function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // 작업
    state = State.DONE;
  } catch (error) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);
console.log(runWork3()); // 'DONE': State.DONE
