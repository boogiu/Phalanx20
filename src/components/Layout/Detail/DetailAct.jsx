import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const DetailAct = () => {

  return (
    <BackGroundSrc imagePath={"DetailBack.png"}>
        <SectionBlock>
            <HookerSection>
                <Main>세부진행</Main>
            </HookerSection>
            <TextGruop>
                    <Sub>
                    팔랑크스의 크루들은 
                    자신이 속한 팀 <br/>
                    내부에서 자신이 중점을 두는 세부  <br/>
                    분야인 ‘파트’ 에 배정되어, 파트장과<br/>
                    파트 크루들과 함께, 자신의 기획안을 <br/>
                    설정/진행/보완하며 나아갑니다.<br/>
                    </Sub>
            </TextGruop>
            
                <TextBox>
                

                <TextSubGruop>
                    
                    <Txt>
                    <Sub2>
                        세부진행은
                    </Sub2><br/>
                    모든 크루들이 1주 단위로 <br/>
                    <YellowSpan>짜여진 운영 과정에 따라 진행하며,</YellowSpan><br/>
                    월요일 시작 / 토요일 종료를 기준으로<br/>
                    매주 진일보하는 자신의 포트폴리오를<br/>
                    30주 동안 쌓아갑니다.<br/> 
                    <br/>

                    세부진행은 <GreenSpan>커리큘럼에 따라<br/>
                    자신이 관심이 있는 기업<br/>
                    (혹은 지원하고자 하는 기업)의<br/>
                    서비스와 브랜딩을 중점적으로<br/>
                    기획, 제안, 발송하고, </GreenSpan>그 전 과정과<br/>
                    결과를 자신의 포트폴리오로 <br/>
                    누적해가는 클럽 팔랑크스의<br/>
                    가장 핵심 과정입니다. <br/>
                      <br/>
                   실제 기업or 서비스에 <br/>
                    기획안 타진 후 해당 기업과<br/>
                     <RedSpan>프로젝트가 진행될 경우 <br/>
                    해당 과정으로 모든 세부진행 과정을<br/>
                    대체할 수 있으며,</RedSpan> 해당 프로젝트의<br/>
                    진행 과정과 결과를 <br/>
                    포트폴리오로 가져갑니다.<br/>
                    </Txt>
                </TextSubGruop>
                <Imagediv>
                    <ImgComponent imagePath={"p.413.JPG"} 
                    top={"15%"} 
                    left={"-50%"}
                    rotate={"0deg"}
                    width={"100%"}/>
                    <ImgComponent imagePath={"p.414.JPG"} 
                    top={"30%"} 
                    left={"30%"}
                    rotate={"0deg"}
                    width={"100%"}/>
                    <ImgComponent imagePath={"p.415.JPG"} 
                    top={"0%"} 
                    left={"50%"}
                    rotate={"0deg"}
                    width={"100%"}/>
                    <ImgComponent imagePath={"p.416.JPG"} 
                    top={"60%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"100%"}/>
                    
                </Imagediv>
                <TextSubGruop2>
                    <Txt>
                    (참고!) <br/>
                    이전 기수는, 이러한 실제 기업들과의 타진이<br/> 
                     주를 이루었었는데 이렇게 실무 프로젝트를<br/> 
                    하게 되면, 그 프로젝트가 끝나고 그 기업<br/>
                    분들이 바로 채용해가시는 경우가 많습니다.<br/>  
                    
                    <br/>
                    그래서, 클럽을 <RedSpan>끝까지 졸업하지 않고<br/> 
                    중간에 채용되어버리는 경우가 생기는데, </RedSpan> <br/>
                    이번 기수에서는 그런 경우, <br/>
                    조기 졸업으로 처리하고자 합니다. <br/><br/> 

                    <YellowSpan>(아직 행정 사항에 대한 처리가<br/>
                    완료되지는 않았습니다!!)</YellowSpan>
                    
                    </Txt>
                </TextSubGruop2>


              </TextBox>
        </SectionBlock>
      </BackGroundSrc>
  );
};

export default DetailAct;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.8), 
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
  
`;
const TextBox = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    margin: 13vh 0vw 5vh 0vw;
`;

const Main = styled.h2`
  font-family : "워헤븐";
  font-size : 15vmin;
  color : #F8EFFB;
  margin: 5% 5% 5% 5%;
`;

const Sub = styled.h3`
font-family : "스윗";
font-size : 5.5vmin;
color : #E3F6CE;
margin: 5%;
line-height :150%;
`;

const Sub2 = styled.span`
font-family : "워헤븐";
font-size : 8vmin;
color : #58FA58;
line-height :200%;
`;

const Txt = styled.p`
font-family : "스윗";
font-size : 5vmin;
color : #E0F8F1;
margin: 5%;
`;
const TextGruop = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    margin-top: 20px;
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:center;
`;

const TextSubGruop = styled.div`
    display: flex;
    width : 90%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(204, 153, 255, 0.4);
    border-radius: 20px;
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    margin: 5% 0% 10% 0%;
`;

const TextSubGruop2 = styled.div`
    display: flex;
    width : 110%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 204, 204, 0.1);
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    padding: 5% 0% 5% 0%;
`;

const Imagediv = styled.div`
  width : 100%;  
  height : 60vh; 
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

const HookerSection = styled.div`
display : flex;
flex-flow : row wrap;
justify-content: center;
align-items: center;
width: 100%;
margin: 25vh 0vw 0vh 0vw;
position : relative;
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