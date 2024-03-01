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
  min-height: 650px;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  position : relative;
  margin: 10% 0% 0% 0%;
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
  margin: 10vh 0% 0% 0%;

`;

export const SectionBlock3 = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  position : relative;

  margin: 15% 0% 0% 0%;
  z-index : 1;
  `;

export const GrenBlock = styled.div`
  width: 90%;
  height: auto;
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
  line-height : 200%;
  font-weight : 600;
`;
export const StrongTxt = styled.p`
  font-family : "한나프로";
  font-size : 7vmin;
  width: 100%;
  color : #40FF00;
  line-height : 250%;
  `;

  export const HannaProTxt = styled.p`
  font-family : "한나프로";
  font-size : 5vmin;
  width: 100%;
  line-height : 200%;
  `;
export const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7), 
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
padding: 8%;
overflow : hidden;
border-radius : 20px;
box-shadow: inset 0px 0px 15px 15px rgb(204,204,204,0.2);
z-index : 1;
position : relative;
margin: 5% 0%;
`;

export const TextGruop2 = styled.div`
display: flex;
width : 80%;
height :auto;
flex-flow : row wrap;
justify-content: flex-start;
align-items: center;  
text-align:center;
background-color: rgb(0,0,0,0.3);
overflow-y: auto;
padding: 10%;
overflow : hidden;
border-radius : 20px;
box-shadow: inset 0px 0px 10px 10px rgb(204,0,0,0.4);
z-index : 1;
position : relative;
margin: 5% 0%;
`;

export const TextGruop3 = styled.div`
display: flex;
width : 100%;
height :auto;
flex-flow : row wrap;
justify-content: flex-start;
align-items: center;  
text-align:center;
background-color: rgb(204,0,0);
overflow-y: auto;
padding: 0% 8%;
overflow : hidden;
border-radius : 20px;
margin: 5% 0%;
z-index : 1;
position : relative;
`;

export const TransText = styled.div`
display: flex;
width : 100%;
flex-flow : row wrap;
justify-content: flex-start;
align-items: center;  
text-align:center;
background-color: transparent;
overflow-y: auto;
padding: 8% 0%;
overflow : hidden;
margin: 5% 0%;
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


export const BlueSpan = styled.span`
color : #DA81F5;
font-weight : 600;
`

export const PupSpan = styled.span`
color : #8181F7;
font-weight : 600;
`

export const GraySpan = styled.span`

color : #A4A4A4;
`

export const GradientButton = styled.button`
  
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 5vmin;
  font-family : '한나프로';
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin : 15% 0% 15% 0%;
  box-shadow: 0px 4px 0px 0px #ff7300;
  background: linear-gradient(45deg, #ff7300, #feac5e);
  width : 70%;
`;

export const Balloon = styled.div`
  position: relative;
	background: linear-gradient(45deg, #006600, #33CC33);
	border-radius: .4em;
  padding : 5%;
  box-shadow: 1px 3px 0px 0px #339933;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right-color: #006600;
    border-left: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-left: -20px;
  }

  animation: FloatAnimation 2s ease infinite; /* 애니메이션을 적용합니다. */

  @keyframes FloatAnimation{
    0% {
      transform: translateY(0);
    }
    50% {
      transform:translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;


export const ImageContainer = styled.div`

width: ${({ width }) => width};
height: auto;
opacity : 60%;
object-fit: cover;
background-color: transparent;
transform : rotate(${({ rotate }) => rotate});
top:${({ top }) => top};
left: ${({ left }) => left};
position: absolute; /* 겹치는 요소에 position 추가 */
z-index : 0;
`;

export const ImgComponent = ({ imagePath, top, left,rotate,width }) => {
  return (
      <ImageContainer 
        top = {top}
        left = {left}
        rotate={rotate}
        width={width}
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} alt="페이지 이미지" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </ImageContainer>
      
  );
};