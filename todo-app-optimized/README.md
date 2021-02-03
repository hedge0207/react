# 명세

- TodoTemplate
  - 화면을 가운데 정렬한다.
  - 앱 타이틀을 보여 준다.
  - children으로 내부 JSX를 props로 받아 와서 렌더링 한다.
- TodoInsert
  - 새로운 항목을 입력하고 추가할 수 있는 컴포넌트.
  - state를 통해 인풋의 상태를 관리한다.
- TodoListItem
  - 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트.
  - todo 객체를 props로 받아 와서 상태에 따라 다른 UI를 보여 준다.
- TodoList
  - 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환해서 보여준다.





# 프로젝트 준비

- 구현에 필요한 라이브러리 설치

  ```bash
  $ yarn add node-sass classnames react-icons
  ```



- Prettier 설정

  - 프로젝트 최상위 디렉터리에 `.prettierrc` 파일 생성

  ```json
  {
      "singleQuoto": true,
      "semi":true,
      "useTabs":false,
      "tabWidth":2,
      "trailingComma": "all",
      "printWidth": 80
  }
  ```

  

- index.css 수정

  ```css
  body {
    margin: 0;
    padding: 0;
    background: #e9ecef;
  }
  ```



