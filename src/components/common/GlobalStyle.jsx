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
  height: 300vh;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  position : relative;
`;
export const GrenBlock = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : black;
  background : #80FF00;
  position : relative;
`;
export const HannaTxt = styled.p`
  font-family : "한나";
  font-size : 5vmin;
  width: 100%;
`;

export const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.3), 
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.95)
  ),
    url(${({ BackGroundImage }) => BackGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
`;

export const BackGroundSrc = ({ imagePath, children }) => {
  return (
    <BackGroundGroup
      BackGroundImage={`${process.env.PUBLIC_URL}/imgData/${imagePath}`}
    >
      {children}
    </BackGroundGroup>
  );
};