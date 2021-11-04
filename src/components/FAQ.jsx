import styled from "styled-components";

import { useGlobalContext } from "../store/GlobalContext";

import FAQS from "./FAQS";

export default function FAQ() {
  const { newFaqs } = useGlobalContext();

  return (
    <Section>
      <SectionTitle>Frequently asked questions</SectionTitle>

      <QuestionContainer>
        {newFaqs.map((faq) => (
          <FAQS {...faq} key={faq.id} />
        ))}
      </QuestionContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem 0;
`;
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 5rem;
  color: rgba(0, 0, 0, 0.8);
`;
const QuestionContainer = styled.div`
  width: 112rem;
  max-width: 95%;
  margin: 0 auto;
  overflow: hidden;

  div:last-child {
    border-bottom: none;
  }
`;
