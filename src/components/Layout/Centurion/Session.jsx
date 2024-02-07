import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Session = () => {

  return (
    <BackGroundSrc imagePath={"Cent3.png"}>
 
          <SectionBlock id="Second-section">
            <OnloadGroup>
                <TitleSection>
                    <TextSection >
                    <SecTitle>올림피아 기획 대전 </SecTitle>
                      <DiscriptionBox>
                      <Discription  style={{textAlign : "start"}}>
                      팔랑크스의 각 팀 산하의 파트와 크루들은, <br/>
                      매년 2월과 8월에 진행하는 올림피아 기획 대전에 참가합니다. <br/>
                      (주로 겨울, 여름 방학 시즌 마감 전)<br/>
                      <br/>
                      올림피아 기획 대전은 각 시즌 동안, <br/>
                      <GreenSpan>팔랑크스의 크루들이 직접 기획하고, <br/>
                      공식 발송하여 연계된 다양한 기업과의 <br/>
                      실무 프로젝트의 과정과 결과</GreenSpan>를 놓고, <br/>
                      상금과 시상을 두고 상호 경쟁 PT 하는 <br/>
                      방식으로 진행되며, 서울 시내 공기관 <br/>
                      연계 시설에서 개최됩니다.  <br/>
                      <br/>
                      세부 팀과 산하 파트 단위로 각자의<br/>
                      <YellowSpan>기획안에 대한 실제 산업 선배들의 반응과<br/>
                      실제 진행 결과(목표 달성)로 경쟁</YellowSpan>하는 <br/>
                      <Strong>팔랑크스에서, 올림피아 기획 대전에 <br/>
                      참가하는 크루&파트로 뽑혀보세요!<br/></Strong>
                      <br/>
                      올림피아 기획대전에서는 팔랑크스의 <br/>
                      후원사와 여러 실무 연계 프로젝트를 <br/>
                      <RedSpan><Bigger>함께한 다양한 브랜드,  <br/>기업들이 참가하여 <br/>
                      특별 채용 역시 이루어집니다.<br/></Bigger></RedSpan>


                        </Discription>
                      </DiscriptionBox>
                    </TextSection>
                    <ImgComponent 
                    imagePath={"MegaPhone.png"} 
                    top={"-10%"} 
                    left={"70%"}
                    rotate={"-20deg"}
                    width={"20%"}/>
                </TitleSection>
            </OnloadGroup>  
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Session;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.6),
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
  

`;

const TitleSection = styled.div`
  display: flex;
  width : 100%;
  flex-flow : row wrap;
  color : white;
  position: relative; /* 부모 요소에 position 추가 */
  
  margin: 13vh 0vw 0vh 0vw;
`;

const TextSection = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
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
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} alt="페이지 이미지" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </ImageContainer>
      
  );
};

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
line-height : 150%;
`

const Strong = styled.span`
  font-family : "스윗";
  font-size : 5.5vmin;
  color: #F78181;
  line-height:200%;
  
`;

const SecTitle = styled.h2`
  font-family : "워헤븐";
  font-size : 10vmin;
  color: #2EFE2E;
  line-height:200%;
  
`;