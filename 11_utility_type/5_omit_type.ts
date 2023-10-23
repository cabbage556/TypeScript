/**
 * Omit type
 * 프로퍼티를 제외하는 유틸리티 타입
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

// 생성 날짜를 자동으로 생성하기
//  createdAt 프로퍼티를 파라미터에서 제외하기
//  Pick<Post, "title" | "createdAt"> 과 같음
function createPost(post: Omit<Post, "createdAt">) {
  return {
    ...post,
    createdAt: new Date(),
  };
}

createPost({
  title: "타입스크립트 Pick 유틸리티 타입",
  content: "타입스크립트 Pick 유틸리티 타입이 뭔가요?",
  // createdAt 생략 가능
});
