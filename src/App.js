import { useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import DiaryEditor from "./diaryEditor/DiaryEditor";
import DiaryList from "./diaryList/DiaryList";

// const dummyList = [
//   {
//     id: "1",
//     author: "kmy",
//     content: "hello",
//     emotion: 1,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: "2",
//     author: "bradley",
//     content: "hello2",
//     emotion: 3,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: "3",
//     author: "Rachael",
//     content: "hello4",
//     emotion: 2,
//     create_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const listAfterRemove = data.filter((list) => list.id !== targetId);
    setData(listAfterRemove);
  };
  return (
    <article>
      <GlobalStyles />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} />
    </article>
  );
}

const GlobalStyles = createGlobalStyle`

* {
box-sizing: border-box;
padding:0;
margin:0;
};
body{
  background-color: white;
}
li {
  list-style: none;
}
p{
  margin:0;
  padding:0;
}
`;

export default App;
