import styled,{css} from 'styled-components';

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
  height: 100vh;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  position : relative;
`;
export const SectionBlock2 = styled.div`
  width: 100%;
  height: auto;
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
export const StrongTxt = styled.p`
  font-family : "워헤븐";
  font-size : 7vmin;
  width: 100%;
  color : #40FF00;
  `;
export const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9), 
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
export const TextGruop = styled.div`
display: flex;
width : 80%;
height :auto;
flex-flow : row wrap;
justify-content: flex-start;
align-items: center;  
text-align:center;
background-color: rgb(50,50,50,0.5);
overflow-y: auto;
padding: 3%;
overflow : hidden;
border-radius : 20px;
margin: 2% 0% 0% 0%;
box-shadow: inset 0px 0px 15px 15px rgb(204,204,204,0.2);
`;
export const RedSpan = styled.span`
color : #FF0000;
font-weight : 600;
`
export const PinkSpan = styled.span`
color : #FF4500;
font-weight : 600;
`

export const YellowSpan = styled.span`
color : #FFFF00;

`

export const GreenSpan = styled.span`
color : #58FAF4;
font-weight : 600;

`
export const BlueSpan = styled.span`
color : #DA81F5;
font-weight : 600;
`

export const PupSpan = styled.span`
color : #8181F7;
font-weight : 600;
`

const GraySpan = styled.span`

color : #A4A4A4;
`