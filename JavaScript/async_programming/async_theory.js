/**
 * async theory
 */

function longwork() {
    // milliseconds since epoch
    //      1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다.
    const now = new Date();
    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000;

    while (new Date().getTime() < afterTwoSeconds) {}

    console.log("완료");
}

// 동기 프로그래밍
//      hello 출력 -> longwork(약 2초 실행) -> world 출력
// console.log("hello");
// longwork();
// console.log("world");

function asyncLongwork() {
    // setTimeout: 비동기 함수
    setTimeout(() => {
        console.log("완료");
    }, 2 * 1000);
}

// 비동기 프로그래밍
//      hello 출력 -> asyncLongwork 실행 -> world 출력 -> asyncLongwork 실행 약 2초뒤 완료 출력
console.log("hello");
asyncLongwork();
console.log("world");

// 자바스크립트 엔진은 싱글 스레드로 동작한다.
//      싱글 스레드는 내부에 메모리 힙 1개와 콜 스택 1개를 갖는다.
//      자바스크립트에서는 비동기 프로그래밍을 사용해 싱글 스레드의 단점을 보완한다.
// 자바스크립트 런타임이 생성되면 이벤트 루프도 생성된다.
//      이벤트 루프는 비동기 함수가 실행되면 콜 스택에서 비동기 함수를 태스크큐/이벤트큐로 옮긴다.
//      비동기 함수는 태스크큐/이벤트큐에서 계속 실행된다.
//      이벤트 루프는 콜 스택과 태스크큐/이벤트큐를 지속적으로 확인한다.
//      콜 스택이 비어 있고 태스크큐/이벤트큐에 실행이 완료된 함수가 존재하면, 그 함수를 콜 스택으로 옮긴다.
