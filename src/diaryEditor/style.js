import styled from "styled-components";

const Container = styled.section`
  border: 1px solid #333;
  margin: 10px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #0984e3;
  background-color: #0984e3;
  color: #dff9fb;
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
  color: black;
  font-weight: 500;
  resize: none;
  ::placeholder {
    color: black;
  }
  @media (max-width: 580px) {
    width: 80%;
  }
`;
const SelectDiv = styled.div`
  color: #dff9fb;
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
  @media (max-width: 580px) {
    width: 50%;
  }
`;

export { Container, Title, Input, Textarea, SelectDiv, Select, Button };
