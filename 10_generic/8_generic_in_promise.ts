/**
 * Generic in promise
 */
const afterTwoSecs = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
};

const runner = async function () {
  const res = await afterTwoSecs(); // unknown 타입 유추
  console.log({ res });
};
runner();

// Promise<string> 반환 타입: string 타입을 resolve할 것
const afterOneSec = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
};

const runner2 = async function () {
  const res = await afterOneSec(); // string 타입
  console.log({ res });
};
runner2();

// async 함수는 Promise를 반환하므로 반환 타입: Promise<string>
const runner3 = async function () {
  return "string return";
};
