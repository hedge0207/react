import React, { useState } from "react";

const IterationSample = () => {
  const [keywords, setKeywords] = useState([
    { id: 1, keyword: "겨울" },
    { id: 2, keyword: "눈" },
    { id: 3, keyword: "코코아" },
    { id: 4, keyword: "눈사람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextKeywords = keywords.concat({
      id: nextId,
      keyword: inputText,
    });
    setNextId(nextId + 1);
    setKeywords(nextKeywords);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextKeywords = keywords.filter((k) => k.id !== id);
    setKeywords(nextKeywords);
  };

  const keywordList = keywords.map((k) => (
    <li
      key={k.id}
      onDoubleClick={() => {
        onRemove(k.id);
      }}
    >
      {k.keyword}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{keywordList}</ul>
    </div>
  );
};

export default IterationSample;
