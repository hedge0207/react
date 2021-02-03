import React from "react";
import qs from "qs";

const About = ({ location }) => {
  console.log(location); // {pathname: "/about", search: "?detail=true", hash: "", state: undefined}
  // location.search에 담긴 쿼리 스트링을 객체로 변환한다.
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  // 쿼리 문자열을 객체로 파싱하는 과정에서 나온 결과 같은 언제나 문자열이므로 아래와 같이 문자열 "true"로 비교해야 한다.
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>About</h1>
      <p>이 프로젝트는 리액트 라우터의 기초를 실습하는 프로젝트입니다!</p>
      {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
