import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Special = () => {

  return (
    <BackGroundSrc imagePath={"Spb.png"}>
        <SectionBlock>
            <OnloadGroup>
                <ImgComponent2 imagePath={"idea.png"} 
                top={"20%"} 
                left={"60%"}
                rotate={"-60deg"}
                width={"30%"}/>
                <TextSection>
                  
                  <Title style={{textAlign : "start"}}>
                    특별활동</Title>
                  <SubTitle style={{textAlign : "start"}}>
                  비정기적으로 진행되는 <br/>실무 기획 분야의  <br/>
                  <GreenSpan> 행사와 프로젝트</GreenSpan>입니다.
                  </SubTitle>
                </TextSection>
            </OnloadGroup>  
          </SectionBlock>

      </BackGroundSrc>
  );
};

export default Special;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.95)
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
  color :#F8ECE0;
  width : 80%;
  line-height : 150%;
 
`;
const Title = styled.h1`
  font-family: "워헤븐";
  font-size: 13vmin;
  color: white;
  text-shadow:0 0 2px #FA8258, 0 0 4px #FA8258,  0 0 3px #FA8258;
  width : 80%;
  line-height : 200%;
  
`;

const OnloadGroup = styled.section`
    animation: ${fadeInFromLeft} 1s ease forwards;
    width : 100%;
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
const GreenSpan = styled.span`
    color : #BCF5A9;
`