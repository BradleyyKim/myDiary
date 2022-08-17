import { useRef, useState } from "react";
import styled from "styled-components";

const DiaryEditor = () => {
  const authorInput = useRef();
  const textareaContent = useRef();
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
    alert("저장되었습니다!");
  };
  return (
    <Container className="DiaryEditor">
      <Title>오늘의 일기</Title>
      <Input ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />
      <Textarea ref={textareaContent} name="content" value={state.content} onChange={handleChangeState}></Textarea>
      <SelectDiv>
        오늘의 감정 점수 :
        <Select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Select>
      </SelectDiv>
      <Button onClick={handleSubmit}>일기 저장하기</Button>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #333;
  margin: 10px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  border: 5px solid #0984e3;
`;

const Title = styled.h2`
  margin: 0 auto;
  padding-bottom: 20px;
  color: #0984e3;
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
  border: 2px solid #0984e3;
  border-radius: 10px;
  ::placeholder {
    color: ${(props) => (props.toggle ? "#a9a9a9" : "red")};
  }

  @media (max-width: 580px) {
    width: 80%;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
  height: 150px;
  border: 2px solid #0984e3;
  border-radius: 10px;
  ::placeholder {
    color: ${(props) => (props.toggle ? "#a9a9a9" : "red")};
  }
  @media (max-width: 580px) {
    width: 80%;
  }
`;
const SelectDiv = styled.div`
  color: #0984e3;
`;
const Select = styled.select`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  border: 2px solid #0984e3;
  border-radius: 10px;
  @media (max-width: 580px) {
    width: 50%;
  }
`;

const Button = styled.button`
  width: 500px;
  padding: 10px;
  cursor: pointer;
  border: 2px solid #0984e3;
  border-radius: 10px;
  background-color: transparent;
  color: #0984e3;
  :hover {
    border: 2px solid #fd79a8;
    border-radius: 10px;
    background-color: transparent;
    color: #fd79a8;
  }
  @media (max-width: 580px) {
    width: 50%;
  }
`;
export default DiaryEditor;
