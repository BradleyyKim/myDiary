import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "../App";
import { Container, Title, Input, Textarea, SelectDiv, Select, Button, SelectTxt } from "./style";

const DiaryEditor = () => {
  const emotions = {
    1: "κΈ°μ¨ π",
    2: "μ’μ π",
    3: "λ³΄ν΅ π",
    4: "λ³λ‘ π",
    5: "μ§μ¦ π ",
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
      authorInput.current.placeholder = "1κΈμ μ΄μ μλ ₯ν΄ μ£ΌμΈμ :)";
      return;
    }
    if (state.content.length < 5) {
      textareaContent.current.focus();
      textareaContent.current.placeholder = "5κΈμ μ΄μ μλ ₯ν΄ μ£ΌμΈμ :)";
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("μ μ₯λμμ΅λλ€!");
    setState({
      author: "",
      content: "",
      emotion: emotions[1],
    });
    authorInput.current.placeholder = "μμ±μλͺ";
    textareaContent.current.placeholder = "λ΄μ©μ μλ ₯ν΄μ£ΌμΈμ...";
    return;
  };
  return (
    <Container className="DiaryEditor">
      <Title>μ€λμ μΌκΈ°</Title>
      <Input placeholder="μμ±μλͺ" ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />
      <Textarea
        placeholder="λ΄μ©μ μλ ₯ν΄μ£ΌμΈμ..."
        ref={textareaContent}
        name="content"
        value={state.content}
        onChange={handleChangeState}
      ></Textarea>
      <SelectDiv>
        <SelectTxt>μ€λμ κ°μ  μ μ :</SelectTxt>
        <Select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={emotions[1]}>κΈ°μ¨ π</option>
          <option value={emotions[2]}>μ’μ π</option>
          <option value={emotions[3]}>λ³΄ν΅ π</option>
          <option value={emotions[4]}>λ³λ‘ π</option>
          <option value={emotions[5]}>μ§μ¦ π </option>
        </Select>
      </SelectDiv>
      <Button onClick={handleSubmit}>μΌκΈ° μ μ₯νκΈ°</Button>
    </Container>
  );
};

export default React.memo(DiaryEditor);
