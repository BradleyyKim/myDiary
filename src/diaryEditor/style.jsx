import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #333;
  margin: 10px auto;
  padding: 20px;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #0984e3;
  background-color: #0984e3;
  color: #dff9fb;
  width: 580px;
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  margin: 0 auto;
  padding-bottom: 20px;
  color: #dff9fb;
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
  color: black;
  border: 2px solid #0984e3;
  border-radius: 10px;
  ::placeholder {
    color: black;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  width: 500px;
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
const SelectDiv = styled.div`
  color: #dff9fb;
  display: flex;
  align-items: center;
  width: 500px;
  justify-content: space-between;
  margin: 0;
  @media (max-width: 480px) {
    width: 90%;
    margin: 0;
  }
`;
const SelectTxt = styled.div`
  font-weight: bold;
  margin-left: 0;
`;
const Select = styled.select`
  padding: 10px 0 10px 10px;
  border: 2px solid #0984e3;
  border-radius: 10px;
  width: 200px;
  margin-right: 0;
  text-align: center;
  @media (max-width: 480px) {
    width: 150px;
    margin-right: 0;
  }
`;

const Button = styled.button`
  width: 500px;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  border: 2px solid #dff9fb;
  border-radius: 10px;
  background-color: transparent;
  color: #dff9fb;
  font-weight: 700;
  :hover {
    border: 2px solid #fd79a8;
    border-radius: 10px;
    background-color: #dff9fb;
    color: #fd79a8;
  }
  @media (max-width: 480px) {
    width: 50%;
    margin-top: 20px;
  }
`;

export { Container, Title, Input, Textarea, SelectDiv, Select, Button, SelectTxt };
