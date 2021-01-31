import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  // 객체 디스트럭쳐링
  const { username, message } = form;
  const onChange = (e) => {
    //Spread 문법
    const nextForm = { ...form, [e.target.name]: e.target.value };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습-함수형 컴포넌트</h1>
      <input
        type="text"
        name="username"
        placeholder="username을 입력하세요"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message를 입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
