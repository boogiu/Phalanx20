import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Directing = () => {

  return (
    <BackGroundSrc imagePath={"DiBack.png"}>
        <SectionBlock>
            <OnloadGroup>
                <ImgComponent2 imagePath={"Puzzle.png"} 
                top={"20%"} 
                left={"60%"}
                rotate={"0deg"}
                width={"30%"}/>
                <TextSection>
                  
                  <Title style={{textAlign : "start"}}>
                    운영 행정</Title>
                  <SubTitle style={{textAlign : "start"}}>
                  클럽 활동과 진행 사항을 <br/>체계적으로 관리하는  <br/>
                  <GreenSpan> 클럽만의 시스템</GreenSpan>입니다.
                  </SubTitle>
                </TextSection>
            </OnloadGroup>  
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Directing;

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
