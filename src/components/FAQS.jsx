import { useGlobalContext } from "../store/GlobalContext";

import styled from "styled-components";

export default function FAQS({ id, question, answer, answerVisible }) {
  const { toggleFaqAnswer } = useGlobalContext();

  return (
    <Question>
      <h3
        style={{
          backgroundColor: answerVisible ? `rgba(0,0,0,0.1)` : `#fff`,
        }}
      >
        {question}
        <button
          style={{
            transform: answerVisible ? `rotate(45deg)` : `rotate(0deg)`,
          }}
          id={id}
          onClick={(e) => toggleFaqAnswer(e.target.id)}
        >
          &#x0002B;
        </button>{" "}
      </h3>
      <p
        style={{
          display: answerVisible ? `block` : `none`,
        }}
      >
        {answer}
      </p>
    </Question>
  );
}

const Question = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.4rem;
    color: rgba(0, 0, 0, 0.7);
    padding: 1rem 2.5rem;

    button {
      font-size: 4rem;
      color: rgba(0, 0, 0, 0.5);
      border: none;
      outline: none;
      cursor: pointer;
      background-color: transparent;
      transition: 0.3s ease;
    }
  }

  p {
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.7);
    padding: 1rem 2.5rem;
    transition: 0.3s ease;
  }
`;
