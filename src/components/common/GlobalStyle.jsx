import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height:auto;
  background-color: black;
  display: flex;
  flex-flow : column nowrap;
  justify-content:center;
  align-content: center;
  overflow: hidden;
  background-color: black;
  margin : 0;
  position : relative;
  `;

export const SectionBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  margin: 6vh 0vw 5vh 0vw;
  position : relative;
`;

export const HannaTxt = styled.p`
  font-family : "한나";
  font-size : 5vmin;
`;