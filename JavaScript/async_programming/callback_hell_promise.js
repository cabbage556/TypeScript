/**
 * callback
 */

function waitAndRun() {
    setTimeout(() => {
        console.log("완료");
    }, 2 * 1000);
}

// 콜백 헬
function waitAndRun2() {
    setTimeout(() => {
        console.log("1번 콜백 시작");
        setTimeout(() => {
            console.log("2번 콜백 시작");
            setTimeout(() => {
                console.log("3번 콜백");
            }, 2000);
            console.log("2번 콜백 끝");
        }, 2000);
        console.log("1번 콜백 끝");
    }, 2000);
}

// waitAndRun2();

/**
 * Promise
 */

// Promise 객체 생성
// Promise 객체 생성 시 콜백 함수 전달
//      콜백 함수는 내부적으로 두 아규먼트 resolve, reject를 받음
const timeoutPromise = new Promise((resolve, reject) => {
    // resolve: 비동기 함수 실행 완료 시 값 처리
    // reject: 비동기 함수 실행 실패 시 에러 처리
    setTimeout(() => {
        resolve("완료"); // 비동기 함수 완료 시 "완료" 문자열 반환
    }, 2000);
});

// Promise 객체의 then 메서드를 사용해 resolve가 반환한 값을 받음
// timeoutPromise.then((res) => {
//     console.log("---------then---------");
//     console.log(res);
// });

// Promise를 반환하는 함수
const getPromise = (seconds) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (Math.random() > 0.5) {
            //     resolve("완료");
            // } else {
            //     reject("에러");
            // }
            resolve("완료");
        }, seconds * 1000);
    });

// getPromise 함수를 호출해 Promise를 리턴한다.
getPromise(1)
    // Promise에서 resolve가 반환한 값을 then 메서드로 받는다.
    .then((res) => {
        console.log("----- first then -----");
        console.log(res);

        // then 메서드에서 다시 getPromise 함수를 호출해 Promise를 리턴한다.
        return getPromise(1);
    })
    // Promise에서 resolve가 반환한 값을 then 메서드로 받는다.
    .then((res) => {
        console.log("----- second then -----");
        console.log(res);
    })
    // Promise에서 reject가 반환한 값을 catch 메서드로 받는다.
    .catch((res) => {
        console.log("----- first catch -----");
        console.log(res);
    })
    // then 또는 catch가 모두 실행된 뒤 마지막으로 무조건 finally 메서드가 실행된다.
    .finally(() => {
        console.log("----- finally -----");
    });

// 3개의 Promise를 동시에 실행하기
// Promise.all([
//     getPromise(1), //
//     getPromise(1),
//     getPromise(3),
// ])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log(res);
//     });
