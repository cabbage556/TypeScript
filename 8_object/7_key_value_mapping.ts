/**
 * Key Value mapping
 */
// 3가지 상태 가정
enum State {
  loading,
  done,
  error,
}

// 4가지 API 상태 관리 타입 가정
type GlobalApiStatus = {
  getUser: State;
  paginatedUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

// 유저 API 상태 관리 타입 가정
type UserApiStatus = {
  // GlobalApiStatus의 3가지 API 상태와 중복됨
  getUser: State;
  paginatedUsers: State | undefined;
  banUser: State | null;
};

// key value mapping1
type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"]; // 키 getUser에 해당하는 값(타입: State)가 대입됨
  paginatedUsers: GlobalApiStatus["paginatedUsers"]; // 키 paginatedUsers에 해당하는 값(타입: State | undefined)가 대입됨
  banUser: GlobalApiStatus["banUser"]; // 키 banUser에 해당하는 값(타입: State | null)이 대입됨
};

// key value mapping2
type UserApiStatus3 = {
  // 아래 표현을 더 간결하게 작성 가능
  // in 키워드 뒤에 유니온으로 연결된 값들이 키로 사용됨
  [key in "getUser" | "paginatedUsers" | "banUser"]: GlobalApiStatus[key];

  // getUser: GlobalApiStatus["getUser"]; // 키 getUser에 해당하는 값(타입: State)가 대입됨
  // paginatedUsers: GlobalApiStatus["paginatedUsers"]; // 키 paginatedUsers에 해당하는 값(타입: State | undefined)가 대입됨
  // banUser: GlobalApiStatus["banUser"]; // 키 banUser에 해당하는 값(타입: State | null)이 대입됨
};

// 위 표현을 Pick 유틸리티 타입을 이용해서 작성 가능
type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "paginatedUsers" | "banUser"
>;

// 위 표현을 Omit 유틸리티 타입을 이용해서 작성 가능
type OmittedUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/**
 * keyof 키워드
 * 객체의 키들을 유니온으로 가져올 수 있음
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = "getUser";

// keyof를 사용해서 GlobalApiStatus의 키들을 유니온으로 가져오기
type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

// Exclude 유틸리티 타입을 사용해서 'getPosts' 키를 제외한 나머지 키들을 유니온으로 가져오기
type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[k];
};

interface LoadingStatus {
  type: "loading";
  data: string[];
}

interface ErrorStatus {
  type: "error";
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;
type StatusType = FetchStatus["type"]; // 'loading' | 'error'
