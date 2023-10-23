/**
 * Pick type
 * 프로퍼티를 선택하는 유틸리티 타입
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

// 생성 날짜를 자동으로 생성하기
//  createdAt 프로퍼티를 파라미터에서 제외하기
//  -> Post 인터페이스에서 title, content 프로퍼티만 선택하기
function createPost(post: Pick<Post, "title" | "content">) {
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
