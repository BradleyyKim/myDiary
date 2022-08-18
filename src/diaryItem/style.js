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
  display: flex;
  justify-content: space-between;
  color: #0a84e3;
`;
const Info = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
`;
const Buttons = styled.div`
  display: flex;
  background-color: transparent;
`;

const CorrectButton = styled.button`
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: none;
  margin-right: 8px;
  background-color: transparent;
`;
const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
const Span = styled.span`
  padding: 5px;
`;
const Content = styled.div`
  margin: 20px;
  height: 300px;
  text-align: left;
  font-weight: 500;
`;
const TimeContent = styled.p`
  text-align: right;
  color: #0a84e3;
`;

export { Container, Header, Span, Content, TimeContent, Info, DeleteButton, CorrectButton, Buttons };
