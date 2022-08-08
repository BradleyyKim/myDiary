import { useState } from "react";
import styled from "styled-components";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(state);
    alert("saved!");
  };
  return (
    <Container className="DiaryEditor">
      <Title>오늘의 일기</Title>
      <div>
        <input name="author" value={state.author} onChange={handleChangeState} />
      </div>
      <div>
        <textarea name="content" value={state.content} onChange={handleChangeState}></textarea>
      </div>
      <div>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #333;
  margin: 10px;
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
`;

export default DiaryEditor;
