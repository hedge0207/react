import React from "react";

const EventPracticeSelf = (props) => {
  console.log(props.bool);
  const handleClick = (message) => {
    console.log(message);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleClick("함수가 실행되었습니다!");
        }}
      >
        버튼!!
      </button>
    </div>
  );
};

export default EventPracticeSelf;
