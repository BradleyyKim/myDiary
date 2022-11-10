import styled from "styled-components";
const Container = styled.li`
  padding: 20px;
  margin: 10px 0;
  text-align: center;
  border-radius: 20px;
  background-color: #f5f6fa;
`;
const Header = styled.header`
  position: relative;

  color: #0a84e3;
`;
const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Buttons = styled.div`
  position: absolute;
  right: 10px;
  width: 50px;
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
`;

const EditButton = styled.button`
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: none;
  margin-right: 8px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
`;
const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
`;

const EditArea = styled.textarea`
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  height: 150px;
  border: 2px solid #0984e3;
  border-radius: 10px;
  color: black;
  font-weight: 500;
  resize: none;
  ::placeholder {
    color: black;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;
const Span = styled.span`
  padding: 5px;
  width: 200px;
`;
const Content = styled.div`
  margin: 80px 20px 20px 20px;
  height: 300px;
  text-align: left;
  font-weight: 500;
`;
const TimeContent = styled.p`
  text-align: right;
  color: #0a84e3;
`;

export { Container, Header, Span, Content, TimeContent, Info, DeleteButton, EditButton, Buttons, EditArea };
