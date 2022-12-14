import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "../App";
import { Container, Title, Input, Textarea, SelectDiv, Select, Button, SelectTxt } from "./style";

const DiaryEditor = () => {
  const emotions = {
    1: "기쁨 🙂",
    2: "좋음 😌",
    3: "보통 🙂",
    4: "별로 😕",
    5: "짜증 😠",
  };

  const { onCreate } = useContext(DiaryDispatchContext);
  const authorInput = useRef();
  const textareaContent = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: emotions[1],
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      authorInput.current.placeholder = "1글자 이상 입력해 주세요 :)";
      return;
    }
    if (state.content.length < 5) {
      textareaContent.current.focus();
      textareaContent.current.placeholder = "5글자 이상 입력해 주세요 :)";
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장되었습니다!");
    setState({
      author: "",
      content: "",
      emotion: emotions[1],
    });
    authorInput.current.placeholder = "작성자명";
    textareaContent.current.placeholder = "내용을 입력해주세요...";
    return;
  };
  return (
    <Container className="DiaryEditor">
      <Title>오늘의 일기</Title>
      <Input placeholder="작성자명" ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />
      <Textarea
        placeholder="내용을 입력해주세요..."
        ref={textareaContent}
        name="content"
        value={state.content}
        onChange={handleChangeState}
      ></Textarea>
      <SelectDiv>
        <SelectTxt>오늘의 감정 점수 :</SelectTxt>
        <Select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={emotions[1]}>기쁨 😆</option>
          <option value={emotions[2]}>좋음 😌</option>
          <option value={emotions[3]}>보통 🙂</option>
          <option value={emotions[4]}>별로 😕</option>
          <option value={emotions[5]}>짜증 😠</option>
        </Select>
      </SelectDiv>
      <Button onClick={handleSubmit}>일기 저장하기</Button>
    </Container>
  );
};

export default React.memo(DiaryEditor);
