import { useEffect, useRef, useState } from "react";
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

// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      console.log(item);
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  return (
    <article>
      <GlobalStyles />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </article>
  );
}

const GlobalStyles = createGlobalStyle`

* {
box-sizing: border-box;
padding:0;
margin:0 auto;
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
article{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export default App;
