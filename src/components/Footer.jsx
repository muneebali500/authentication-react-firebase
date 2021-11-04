import styled from "styled-components";

export default function Footer() {
  return (
    <Para>
      🙂 The Project is developed by Muneeb Ali to showcase his React.js skills
      🙂
    </Para>
  );
}

const Para = styled.footer`
  font-size: 1.5rem;
  color: #fff;
  background-color: #0236b9;
  padding: 1.5rem;
  text-align: center;
`;
