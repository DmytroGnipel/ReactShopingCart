import styled from "styled-components";

const StyledParagraph = styled.p`
  color: white;
`;
export default function Paragraph({ text }) {
  return <StyledParagraph>{text}</StyledParagraph>;
}
