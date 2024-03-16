/**
 * async, await
 */

const getPromise = (seconds, order) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("완료" + order);
            // reject("에러" + order);
        }, seconds * 1000);
    });

// await를 사용하기 위해 함수에 async 키워드를 붙인다.
async function runner() {
    // await을 사용해 Promise에서 resolve가 반환한 값을 기다린다.
    // await을 사용해도 쓰레드는 막히지 않는다.
    try {
        console.log("----- try -----");
        const result1 = await getPromise(1, 1);
        console.log(result1);
        const result2 = await getPromise(1, 2);
        console.log(result2);
        const result3 = await getPromise(1, 3);
        console.log(result3);
    } catch (e) {
        // Promise에서 reject가 반환한 값을 catch를 사용해 잡는다.
        console.log("----- catch -----");
        console.log(e);
    } finally {
        console.log("----- finally -----");
    }
}

runner();
console.log("실행 끝");
