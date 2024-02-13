import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Point = () => {

  return (
    <BackGroundSrc imagePath={"DiBack.png"}>

          <SectionBlock>
            <TextSubGruop2>
            <Imagediv2>
                    <ImgComponent2 imagePath={"Crown.png"} 
                    top={"-1000%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"60%"}/>  
                </Imagediv2>
                     <Main style={{textAlign : "center"}}>
                     일반/심화 크루 
                     </Main>
                     <Txt>
                     <Bigger><GreenSpan>클럽 팔랑크스는,<br/></GreenSpan></Bigger>
                     산하 <Bigger><RedSpan>세부 팀</RedSpan>과 
                     <YellowSpan> 파트로</YellowSpan></Bigger> 진행되며,<br/><br/>
                     <RedSpan>팀장은</RedSpan> 팀 크루 전원의 활동 내용을<br/>
                    브리핑하고 주차 활동에 대한 검수를 <br/>
                    진행하여, 크루들의 주차별 포트폴리오<br/>
                     누적 과정을 도와줍니다. <br/>
                     <br/>

                    모든 클럽 크루들은 <Bigger><GreenSpan>‘일반’ 크루이며,<br/>
                        </GreenSpan></Bigger>
                    일반 크루의 주차 과정 동안 <br/>
                    타의 모범이 되고, 전체 팀 전략과 기획을<br/>
                    수반하기에 역량이 증빙되었다고 여겨지는<br/>
                     크루들이 <YellowSpan>심화 크루로 스텝업하여,<br/>
                    각 팀의 ‘기획실’ 을 구성</YellowSpan>합니다. <br/>
                    <br/>

                    각 <YellowSpan>팀 기획실의 심화 크루들은</YellowSpan> <br/>
                    특정 파트를 리딩하거나, 자신의<br/>
                    팀 크루들의 결과물을 리딩하고 <br/>
                    케어하여 더 나은 방향으로 이끌며, <br/>
                    팀 크루들과 함께 여러 기획안들이 <br/>
                    <Bigger><GreenSpan>실제 기업들과의 연계/실무 <br/>프로젝트로 
                    진척될 수 있도록</GreenSpan></Bigger> <br/>역할합니다. <br/>
                    <br/>

                    그리고, <Bigger><RedSpan>올림피아 기획 대전에서,
                        </RedSpan></Bigger> <br/>
                    파트장을 중심으로 파트에서 진행해온 <br/>
                    기획들을 연계/후원사들의 심사 하에서 <br/>
                    진행되는 경쟁 PT에서 크루들과 함께 <br/>
                    발표합니다. 


                     </Txt>

                     <Imagediv>
                    <ImgComponent imagePath={"CrewLevel1.png"} 
                    top={"-10%"} 
                    left={"-25%"}
                    rotate={"0deg"}
                    width={"120%"}/>
                    <ImgComponent imagePath={"ADV1.png"} 
                    top={"50%"} 
                    left={"10%"}
                    rotate={"0deg"}
                    width={"150%"}/>
                  
                    
                </Imagediv>
            </TextSubGruop2>

            
          </SectionBlock>

      </BackGroundSrc>
  );
};

export default Point;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.85), 
    rgba(0, 0, 0, 0.87),
    rgba(0, 0, 0, 0.85)
  ),
    url(${({ BackGroundImage }) => BackGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
`;

const BackGroundSrc = ({ imagePath, children }) => {
  return (
    <BackGroundGroup
      BackGroundImage={`${process.env.PUBLIC_URL}/imgData/${imagePath}`}
    >
      {children}
    </BackGroundGroup>
  );
};


const SectionBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  margin: 13vh 0vw 5vh 0vw;

`;

const TextSection = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    margin: 13vh 0vw 0vh 0vw;
    
`;

const SubTitle = styled.h2`
  font-family : "워헤븐";
  font-size : 7vmin;
  color :#F8E0F1;
  width : 80%;
  line-height : 150%;
 
`;
const Title = styled.h1`
  font-family: "워헤븐";
  font-size: 13vmin;
  color: white;
  text-shadow:0 0 2px #FA58D0, 0 0 4px #FA58D0,  0 0 3px #FA58D0;
  width : 80%;
  line-height : 200%;
  
`;

const OnloadGroup = styled.section`
    animation: ${fadeInFromLeft} 1s ease forwards;
    width : 100%;
`;




const TextSubGruop2 = styled.div`
    display: flex;
    width : 80%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(255,204,255,0.1);
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    padding: 5%;
    overflow : hidden;
    box-shadow: inset 0px 0px 15px 15px rgb(255,204,255,0.1);
    border-radius : 20px;
`;

const BoxinBox = styled.div`
    display: flex;
    width : 90%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(255,204,255,0.1);
    overflow-y: auto;
    text-align:left;
    padding: 3%;
    overflow-x : hidden;
    border-radius : 20px;
    margin: 15% 0% 0% 0%;
`;






const Imagediv = styled.div`
  width : 100%;  
  height : 40vh; 
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  margin : 15% ;
  position : relative;
`;

const Imagediv2 = styled.div`
  width : 100%;  
  height : 1vh; 
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  margin : 15% ;
  position : relative;
`;
const ImageContainer = styled.div`

width: ${({ width }) => width};
height: auto;
object-fit: cover;
background-color: transparent;
transform : rotate(${({ rotate }) => rotate});
top:${({ top }) => top};
left: ${({ left }) => left};
position: absolute; /* 겹치는 요소에 position 추가 */

`;

const ImgComponent = ({ imagePath, top, left,rotate,width }) => {
  return (
      <ImageContainer 
        top = {top}
        left = {left}
        rotate={rotate}
        width={width}
        
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', maxHeight: '100%' ,
            borderRadius :"5% 5% 5% 5% ",
            boxShadow : " 0px 3px 3px 1px gray" 
          }}/>
      </ImageContainer>
      
  );
};


const ImgComponent2 = ({ imagePath, top, left,rotate,width }) => {
  return (
      <ImageContainer 
        top = {top}
        left = {left}
        rotate={rotate}
        width={width}
        
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', maxHeight: '100%' ,
            borderRadius :"5% 5% 5% 5% "
          }}/>
      </ImageContainer>
      
  );
};

const Main = styled.h2`
  font-family : '테나다';
  font-size : 11vmin;
  color :#FBEFF5;
  margin: 5% 0% 5% 0%;
  text-shadow:0 0 2px #FF4000,  0 0 3px #FF4000;
  width : 100%;
`
const Txt = styled.p`
  font-family : '스윗';
  font-size : 5vmin;
`

const RedSpan = styled.span`
    color : #F5A9A9;
`

const YellowSpan = styled.span`
    color : #F2F5A9;
`
const GreenSpan = styled.span`
    color : #BCF5A9;
`
const Bigger = styled.span`
font-size : 6vmin;
`


const NumSpan = styled.span`
font-size : 7vmin;
line-height : 200%;
font-family : '테나다';
color : #BCF5A9;
`
const RedRedSpan = styled.span`
    color : #FA5882;
`
