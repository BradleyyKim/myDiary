import { Container, Header, Span, Content, TimeContent, Info, DeleteButton, CorrectButton, Buttons } from "./style";
import correctionLogo from "../asset/pen-solid.svg";
import RemoveLogo from "../asset/trash-can-solid.svg";

const DiaryItem = ({ onRemove, id, author, content, emotion, created_date }) => {
  return (
    <Container>
      <Header>
        <Info>
          <Span>작성자 : {author}</Span>
          <Span>감정점수 : {emotion}</Span>
        </Info>
        <Buttons>
          <CorrectButton style={{ backgroundImage: `url(${correctionLogo})` }}></CorrectButton>
          <DeleteButton
            style={{ backgroundImage: `url(${RemoveLogo})` }}
            onClick={() => {
              if (window.confirm(`${id + 1}번째 일기를 정말로 삭제하시겠습니까?`)) {
                onRemove(id);
              }
            }}
          ></DeleteButton>
        </Buttons>
      </Header>
      <Content>{content}</Content>
      <TimeContent>{new Date(created_date).toLocaleString()}</TimeContent>
    </Container>
  );
};

export default DiaryItem;
