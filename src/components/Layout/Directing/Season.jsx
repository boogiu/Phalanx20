import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Season = () => {

  return (
    <BackGroundSrc imagePath={"DiBack.png"}>

          <SectionBlock>
            <TextSubGruop2>
                     <Main >
                      시즌과 <br/>주차
                     </Main>
                     <Imagediv2>
                    <ImgComponent2 imagePath={"Calender.png"} 
                    top={"-1000%"} 
                    left={"40%"}
                    rotate={"0deg"}
                    width={"60%"}/>  
                </Imagediv2>
                     <Txt>
                     <Bigger><GreenSpan>클럽 팔랑크스는,<br/></GreenSpan></Bigger>
                     1년을 기준하여  <RedSpan>4개의시즌<br/></RedSpan>
                     (겨울/봄/여름/가을), 그리고 각 주차 별로 <br/>
                     진행하는 운영 기간 단위를 가집니다.  <br/>
                     <YellowSpan>(타 클럽형 동아리와 동일)</YellowSpan>
                     <br/> <br/>
                    팔랑크스는 전국대학연합 동아리인만큼, <br/>
                    진행 기간을 <RedSpan>대학생들의 학기/방학 일정을 <br/>
                     그 기준으로</RedSpan> 잡게 됩니다.  <br/>
                     <br/>
                     이에 따라<GreenSpan> 겨울과 여름을 각 2개월,  <br/>
                     8주</GreenSpan>로 구성된 시즌으로,  <YellowSpan>봄과 가을을  <br/>
                     각 4개월, 16주</YellowSpan>로 구성된 시즌으로  <br/>
                     진행하며, 매주 정해진 일정에 따라  <br/>
                     모든 크루들이 자신의 포트폴리오를  <br/>
                     쌓는 방식으로 진행됩니다.  <br/>
                     <RedSpan>(졸업유예 혹은 졸업생 분들 역시,  <br/>
                    이 일정이 공통으로 적용되오니  <br/>
                    참고 바랍니다!) <br/></RedSpan>
                    <br/>


                    모든 크루분들은 총 30주를 활동 주차로  <br/>
                    인정 받아, 해당 기간 동안의 포트폴리오와  <br/>
                    기획/컨설팅 분야의 <Bigger><GreenSpan>다양한 활동 등이  <br/>
                    누적된 졸업 결과물</GreenSpan></Bigger> 을 가지고   <br/>
                    팔랑크스의 졸업 크루의 경력을 가지게 <br/>됩니다. <br/> 
                    <br/>

                    팔랑크스의 매주 활동은, 중앙, 세부,  <br/>
                    특별 활동으로 구성된 다양한 내용으로  <br/>
                    구성되며, 이는 역시 <RedSpan>상시적으로 운영되는 <br/>
                    캘린더를 통해</RedSpan> 확인하셔야 합니다. 
                     </Txt>
                     <Imagediv>
                    <ImgComponent imagePath={"season1.png"} 
                    top={"-0%"} 
                    left={"-40%"}
                    rotate={"0deg"}
                    width={"120%"}/>
                     <ImgComponent imagePath={"season2.png"} 
                    top={"30%"} 
                    left={"20%"}
                    rotate={"0deg"}
                    width={"120%"}/>   
                </Imagediv>
            </TextSubGruop2>
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Season;

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
