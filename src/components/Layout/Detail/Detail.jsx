import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Detail = () => {

  return (
    <BackGroundSrc imagePath={"TeamBack.png"}>
        <SectionBlock>
            <OnloadGroup>
              <TitleSection>
                <ImgComponent imagePath={"heart1.png"} 
                top={"20%"} 
                left={"70%"}
                rotate={"0deg"}
                width={"30%"}/>
                <TextSection>
                  
                  <Title style={{textAlign : "start"}}>
                    세부활동</Title>
                  <SubTitle style={{textAlign : "start"}}>
                  자신이 속한 <br/>세부 팀과 파트에서 <br/>
                  진행하는 <GreenSpan>‘세부 과정‘</GreenSpan> 입니다.
                  </SubTitle>
                </TextSection>
              </TitleSection>
            </OnloadGroup>  
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Detail;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.9)
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
  margin: 13vh 0vw 0vh 0vw;

`;

const TitleSection = styled.div`
  display: flex;
  width : 100%;
  flex-flow : row wrap;
  color : white;
  position: relative; /* 부모 요소에 position 추가 */
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
  color :#F2E0F7;
  width : 80%;
  line-height : 150%;
 
`;
const Title = styled.h1`
  font-family: "워헤븐";
  font-size: 13vmin;
  color: white;
  text-shadow:0 0 2px #D358F7, 0 0 4px #D358F7,  0 0 3px #D358F7;
  width : 80%;
  line-height : 200%;
  
`;

const DiscriptionBox = styled.div`
  width : 90%;
  border-radius: 16px;
  background: rgba(105, 105, 105, 0.20);

/* box2 */
box-shadow: 0px 0px 4px 0px #979797;
backdrop-filter: blur(3px);
`;

const Discription = styled.p`
  font-family : "스윗";
  font-size : 5vmin;
  color : white;
  line-height : 150%;
  margin : 5% 0% 5% 5%;
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
          style={{ maxWidth: '100%', maxHeight: '100%',
          borderRadius : "15% " }}/>
      </ImageContainer>
      
  );
};





const HookerSection = styled.div`
display : flex;
flex-flow : row wrap;
justify-content: center;
align-items: center;
width: 100%;
position : relative;
`

const ScriptSection = styled.div`
  border-radius: 16px;
  background: #FFFDF4;
  box-shadow: 0px 0px 4px 0px #979797;
  backdrop-filter: blur(9.999999046325684px);
  box-shadow: 0px 0px 4px 0px #979797;
  backdrop-filter: blur(10px);
  margin: 3vh 0vw 3vh 0vw;
  padding : 3vh 3vw 3vh 3vw;
  width : 75%;
`;

const About = styled.p`
  font-family: "스윗";
  font-size: 5vmin;
  color: black;
  line-height : 200%;
  text-align : left;
`;

const Sub2 = styled.h2`
  font-family: "스윗";
  font-size: 10vmin;
  color: white;
  width : 80%;
  line-height : 200%;
`;

const SecTitle = styled.h2`
  font-family : "스윗";
  font-size : 10vmin;
  color: #58ACFA;
  line-height:200%;
  margin : 5% 0% 5% 5%;
`;

const Discription2 = styled.p`
  font-family : "스윗";
  font-size : 4vmin;
  color : #81DAF5;
  line-height : 150%;
  margin : 5% 0% 5% 5%;
`;

const Discription3 = styled.p`
  font-family : "스윗";
  font-size : 4.55vmin;
  color : white;
  line-height : 150%;
  margin : 5% 0% 5% 5%;
  font-style : italic;
`;


const Redspan = styled.span`
  color: #F78181;
`;

const StrongSpan = styled.span`
width: 100%;
font-size: 6vmin;
font-family : '스윗';
color : #01DF01;
line-height : 200%;
font-style : normal;
`;


const GreenSpan = styled.span`
  color : #81F79F;
`;
;