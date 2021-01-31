import React, { useState } from "react";

const Pract = () => {
  const [arr, setArr] = useState([
    { id: 1, name: "Cha" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Lee" },
  ]);
  const [obj, setObj] = useState({ a: 1, b: 2, c: 3 });
  return (
    <div>
      <p>{obj.b}</p>
      <button
        onClick={() => {
          const copyObj = { ...obj, b: 9 };
          return setObj(copyObj);
        }}
      >
        오브젝트 변경
      </button>
      <p>{arr[2].name}</p>
      <button
        onClick={() => {
          const copyArr = arr.concat({ id: 4 });
          copyArr[2].name = "Park";
          return setArr(copyArr);
        }}
      >
        배열 변경
      </button>
    </div>
  );
};

export default Pract;
