import styled from "styled-components";

const Container = styled.section`
  padding-top: 50px;
  color: #0984e3;
  margin: 0 auto;
  width: 580px;
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const H2 = styled.h2`
  text-align: center;
`;

const AlarmList = styled.h4`
  padding: 10px;
`;

const Ul = styled.ul`
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  border: 5px solid #0a84e3;
`;

export { Container, H2, AlarmList, Ul };
