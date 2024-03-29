import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Season = () => {

  return (
    <BackGroundSrc imagePath={"DiBack.png"}>
          <SectionBlock>
          <Imagediv2>
                    <ImgComponent2 imagePath={"Chess1.png"} 
                    top={"-500%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"60%"}/>  
                </Imagediv2>
            <TextSubGruop2>
                     <Main style={{textAlign : "right"}}>
                      졸업과<br/> 포트폴리오
                     </Main>
                     <Txt>
                     <Bigger><GreenSpan>클럽 팔랑크스는,<br/></GreenSpan></Bigger>
                     <RedSpan>총 30주의 과정을 통해</RedSpan> 졸업하게 되며,<br/>
                    해당 기간 동안 <YellowSpan>총 7개의 기업/서비스 등에</YellowSpan><br/>
                     각자의 기획안을 심도 있게 제작하여, <Bigger><YellowSpan><br/>실제
                     타진/발송하는 것을 핵심 <br/>포트폴리오로 </YellowSpan></Bigger> 
                     가져가는 과정입니다. <br/>
                    <br/>
                    <RedSpan>클럽 팔랑크스는 공식적으로 <br/>
                    다수의 대기업/중견기업, 그리고 <br/>
                    중소기업/스타트업 들과 연계되어 있기 <br/>
                    때문에 </RedSpan>그동안의 활동에서 뛰어나고 <br/>
                    활발한 성과를 보여준 크루의 경우, 졸업과 <br/>
                    동시에 <GreenSpan>기획/컨설팅과 관련한 직무로의 <br/>
                    채용 및 추천 연계가 이루어질 수 <br/>
                    있습니다.<br/></GreenSpan>
                    <br/> 

                    졸업 조건을 갖춘 크루는,<br/>
                    팔랑크스 졸업 시스템 하에서, <br/>
                    아래 결과물을 수령합니다.<br/>
                    이는 공식 후원사의 명의로서 <br/>
                    <RedSpan>실제 채용과 직접적으로 연결되는 <br/>
                    공식 자료로서 기능합니다. </RedSpan> 
                     </Txt>
                     <Imagediv>
                   
                    <ImgComponent imagePath={"gra2.png"} 
                    top={"0%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"120%"}/>
                    <ImgComponent imagePath={"gra3.jpg"} 
                    top={"25%"} 
                    left={"10%"}
                    rotate={"-90deg"}
                    width={"100%"}/>
                    <ImgComponent imagePath={"gra4.png"} 
                    top={"10%"} 
                    left={"50%"}
                    rotate={"0deg"}
                    width={"80%"}/>

                </Imagediv>
                <BoxinBox>
                    <Txt>
                    <NumSpan>1. 클럽 활동 증명서</NumSpan>
                    <RedSpan>(필수)<br/></RedSpan>
                    <br/>
                    기획/컨설팅 분야 클럽의 졸업 성적과<br/>
                    졸업 사항을 확인합니다. <br/>
                    (크루 개별 고유 code number 수반)<br/>
                    <br/><br/>
                    <NumSpan>2. 클럽 활동 내역서</NumSpan> 
                    <RedSpan>(필수)<br/></RedSpan>
                    기획/컨설팅 분야 클럽에서 활동한 <br/>
                    내역과 30주 동안 쌓아올린 본인의 <br/>
                    포트폴리오가 팔랑크스 클럽 <br/>
                    공식 포트폴리오 양식을 기반으로 <br/>
                    시스템 검수를 거쳐 발급됩니다. <br/>
                    (고유번호와 운영진 검수 단계 컨펌)<br/>
                    <br/><br/>
                    <NumSpan>3. 기획/컨설팅 분야<br/> 에세이 컬렉션</NumSpan> 
                    <YellowSpan>(자율)<br/></YellowSpan>
                    기획/컨설팅 산업 분야에 대해 매주<br/>
                    본인이 작성한 에세이가 담긴 자신의 <br/>
                    SNS 계정을 가지고 스펙으로 활용합니다. <br/>
                    <br/><br/>

                    <NumSpan>4. 기획/컨설팅 분야 <br/>
                    실무 연계 프로젝트 경력 </NumSpan>
                    <YellowSpan>(자율)<br/></YellowSpan>
                    <br/>
                    팔랑크스 클럽의 내부 활동 중 <br/>
                    상시적으로 연계되는 실무 프로젝트에 <br/>
                    대한 실무 경력 증빙입니다.<br/>   
                    <br/>
                    <Bigger><RedRedSpan>(중요!)</RedRedSpan></Bigger>
                    <br/>해당 프로젝트는, <br/><RedSpan>
                    실제 기업, 서비스와 프로젝트 <br/>
                    계약에 의거하여 진행하는 <br/>
                    실무 경력이기 때문에</RedSpan> 적격자를 <br/>
                    선발하여 진행하며 이에 대한 <br/>
                    수당, 기간, 보안 등과 관련한 <br/>
                    별도의 계약이 수반될 수 있습니다. 
                    </Txt>
                </BoxinBox>
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
