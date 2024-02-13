import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const RealProject = () => {

  return (
    <BackGroundSrc imagePath={"RealProject.png"}>
          <SectionBlock>
          <Imagediv2>
                    <ImgComponent2 imagePath={"target.png"} 
                    top={"-20%"} 
                    left={"60%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    
                </Imagediv2>
            <TextSubGruop2>
                     <Main >
                      실무 <br/>연계 프로젝트
                     </Main>
                     <Txt>
                     클럽 팔랑크스는, 클럽과 연계/자문하는<br/>
                     다양한 후원사들 혹은 포럼에서 교류하는 <br/>
                     <GreenSpan>
                      다양한 대기업/중견기업들과의 교류를 통해, <br/>
                     <Bigger>실무 연계 프로젝트</Bigger>를 진행합니다. <br/>
                     </GreenSpan>
                    
                     </Txt>
                     <Imagediv>
                    <ImgComponent imagePath={"project.png"} 
                    top={"-20%"} 
                    left={"50%"}
                    rotate={"0deg"}
                    width={"100%"}/>
                     <ImgComponent imagePath={"project2.png"} 
                    top={"0%"} 
                    left={"-40%"}
                    rotate={"0deg"}
                    width={"110%"}/>
                    
                </Imagediv>
            </TextSubGruop2>
          </SectionBlock>       
      </BackGroundSrc>
  );
};

export default RealProject;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.7),
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
  margin: 0vh 0vw 0vh 0vw;

`;


const TextSubGruop2 = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(255, 204, 204, 0.2);
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    padding: 5%;
    overflow : hidden;
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
  height : 4vh; 
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
  font-family : '워헤븐';
  font-size : 11vmin;
  color :#F6E3CE;
  margin: 5% 0% 5% 0%;
  text-shadow:0 0 2px #FF4000,  0 0 3px #FF4000;
  width : 100%;
`
const Txt = styled.p`
  font-family : '스윗';
  font-size : 5vmin;
`

const GreenSpan = styled.span`
    color : #BCF5A9;
`
const Bigger = styled.span`
font-size : 6vmin;
`