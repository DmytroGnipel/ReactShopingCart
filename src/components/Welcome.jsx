import styled from "styled-components";
import H1 from "./H1";
import Button from "./Button";
import Paragraph from "./Paragraf";

const StyledWelcome = styled.div`
  width: 1170px;
  align-items: end;
  display: flex;
  flex-direction: column;
  margin-right: 200px;
`;
export default function Welcome() {
  return (
    <StyledWelcome>
      <Paragraph text={"Step in to new year with"} />
      <H1 />
      <Paragraph text={"Buy best goods from around the world"} />
      <Paragraph text={"and enjoy our top service"} />

      <Button />
    </StyledWelcome>
  );
}
