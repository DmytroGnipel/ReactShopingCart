import styled from "styled-components";

const StyledTitle = styled.div`
  height: 100px;
  padding: 15px 0 0 15px;
`;

export default function Title({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
}
