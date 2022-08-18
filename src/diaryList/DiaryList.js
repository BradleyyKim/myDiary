import DiaryItem from "../diaryItem/DiaryItem";
import { Container, H2, AlarmList, Ul } from "./style";

const DiaryList = ({ diaryList, onRemove }) => {
  return (
    <Container>
      <H2>일기 리스트</H2>
      <AlarmList>{diaryList.length}개의 일기가 있습니다.</AlarmList>
      <Ul>
        {diaryList.map((list) => (
          <DiaryItem key={list.id} {...list} onRemove={onRemove} />
        ))}
      </Ul>
    </Container>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
