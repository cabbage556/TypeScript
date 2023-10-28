# Execution Context

실행하려는 자바스크립트 코드와 코드를 실행할 때 필요한 정보를 담고 있는 특수한 환경
코드 실행에 필요한 모든 데이터를 가지고 있는 환경이라고 생각할 수 있다.

Execution Context는 크게 두 개로 나뉜다.

1.  Global Context

    - 최상위 Execution Context
    - 코드를 실행하면 무조건 생성되는 context로 windown 객체(브라우저)나 global 객체(Node.js)를 생성해 갖고 있는다.

2.  Function Context

    - 함수를 실행할 때마다 함수별로 생성되는 context
    - 함수 실행에 필요한 모든 정보를 갖고 있는다.

## Execution Context Stack

1.  Creation Phase

    - Global 객체를 생성한다.(window 또는 global) 함수에서는 arguments 객체가 생성된다.
    - this를 window 또는 global에 바인딩한다.
    - 변수와 함수를 메모리 힙에 배정하고 기본 값을 undefined로 저장한다.

2.  Execution Phase
    - 코드를 실행한다.
    - 필요하다면 새로운 Execution Context를 생성한다.
