# 명세

- axios를 활용하여 newsapi에서 data를 받아온다.
- 카테고리를 구현하고 카태고리 탭을 선택할 때마다 카테고리에 맞는 기사들을 띄운다.
- 리액트 라우터를 활용한다.
- `NavLink`를 활용한다.







# 프로젝트 준비

- Prettier 설정

  - `.prettierc` 파일을 프로젝트 최상단에 생성
  - 아래 코드를 입력한다. 

  ```json
  {
      "singleQuote":true,
      "semi":true,
      "useTabs":false,
      "tabWidth":2,
      "trailingComma":"all",
      "printWidth":80
  }
  ```



- VS Code에서 파일 자동 불러오기 기능 설정

  - `jsconfig.json` 파일 생성
  - 아래 코드를 입력한다.

  ```json
  {
      "compilerOptions":{
          "target":"es6"
      }
  }
  ```



- 라이브러리 설치
  - axios 설치

  ```bash
  $ yarn add axios
  ```
  - styled-components 설치

  ```bash
  $ yarn add styled-components
  ```

  - react-router 설치

  ```bash
  $ yarn add react-router-dom
  ```

  



- newsapi API 키 발급받기

  > https://newsapi.org/

  - 위 사이트 접속 후 회원 가입하면 api key를 발급받을 수 있다.

  > https://newsapi.org/s/south-korea-news-api

  - 위 사이트에 한국 뉴스를 가져오는 API에 대한 설명서가 존재한다.





# 프로젝트 실행

```bash
$ yarn install
$ yarn start
```

