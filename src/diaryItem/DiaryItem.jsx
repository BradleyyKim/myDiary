import {
  Container,
  Header,
  Span,
  Content,
  TimeContent,
  Info,
  DeleteButton,
  EditButton,
  Buttons,
  EditArea,
} from "./style";
import EditIcon from "../asset/pen-solid.svg";
import RemoveIcon from "../asset/trash-can-solid.svg";
import CompleteIcon from "../asset/check-solid.svg";
import xmarkIcon from "../asset/xmark-solid.svg";
import { useRef, useState } from "react";

const DiaryItem = ({ onRemove, id, author, content, emotion, created_date, onEdit }) => {
  const handleRemove = () => {
    if (window.confirm(`${id + 1}번째 일기를 정말로 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleCancelEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      alert("5글자 이상 입력해주세요 :)");
      return;
    }
    if (window.confirm(`${id + 1}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };
  return (
    <Container>
      <Header>
        <Info>
          <Span>작성자 : {author}</Span>
          <Span>감정점수 : {emotion}</Span>
        </Info>
        {isEdit ? (
          <>
            <Buttons>
              <EditButton style={{ backgroundImage: `url(${CompleteIcon})` }} onClick={handleEdit}></EditButton>
              <DeleteButton style={{ backgroundImage: `url(${xmarkIcon})` }} onClick={handleCancelEdit}></DeleteButton>
            </Buttons>
          </>
        ) : (
          <Buttons>
            <EditButton style={{ backgroundImage: `url(${EditIcon})` }} onClick={toggleIsEdit}></EditButton>
            <DeleteButton style={{ backgroundImage: `url(${RemoveIcon})` }} onClick={handleRemove}></DeleteButton>
          </Buttons>
        )}
      </Header>
      <Content>
        {isEdit ? (
          <>
            <EditArea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)} />
          </>
        ) : (
          <>{content}</>
        )}
      </Content>
      <TimeContent>{new Date(created_date).toLocaleString()}</TimeContent>
    </Container>
  );
};

export default DiaryItem;
