import styled from "styled-components";

const StyledBottomContainer = styled.div`
  width: 1200px;
  margin: auto;
  height: 475px;
  background-color: yellow;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
`;

const StyledImgContainer = styled.div`
display: 'flex', 
flexDirection: 'column';

`;
export default function BottomContainer() {
  return (
    <StyledBottomContainer>
      <StyledImgContainer>
        <img
          src="./src/assets/images/Man_First.png"
          alt="userPhoto"
          height="300px"
        />
        <p>ssdf</p>
      </StyledImgContainer>
      <StyledImgContainer>
        <img
          src="./src/assets/images/Woman_second.png"
          alt="userPhoto"
          height="300px"
        />
        <p>ssdf</p>
      </StyledImgContainer>
      <StyledImgContainer>
        <img
          src="./src/assets/images/Man_Third.png"
          alt="userPhoto"
          height="300px"
        />
        <p>ssdf</p>
      </StyledImgContainer>
    </StyledBottomContainer>
  );
}
