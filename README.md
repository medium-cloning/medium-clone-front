### 폴더 구조 설명

- src 
    - common
        - constants.ts : 프로젝트 내에서 쓰일 변수 정의 파일
        - paths.ts : url 루트별 컴포넌트 배열 정의 파일
    - components
        - common : 공통으로 쓰일 작은 컴포넌트들 (ex. button, input 등)
        - pages
            - main : 하위에 메인 페이지에서만 사용될 컴포넌트 작성
            - profile : 하위에 프로필 페이지에서만 사용될 컴포넌트 작성
    - routes
        - index.tsx : 루트에 따른 컴포넌트 출력
    - store
        - index.ts : export rootReducer 
        - 이후 여기에 user.ts 등 redux 파일 추가
        <!-- https://velog.io/@velopert/use-typescript-and-redux-like-a-pro 참고 -->
    - App.tsx
    - index.js