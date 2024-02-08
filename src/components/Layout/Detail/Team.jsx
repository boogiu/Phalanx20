import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Team = () => {

  return (
    <BackGroundSrc imagePath={"TeamBack.png"}>
        <SectionBlock>
            <OnloadGroup>
              <TitleSection>
                <ImgComponent imagePath={"Flag1.png"} 
                top={"-40%"} 
                left={"30%"}
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
          <SectionBlock>
            <HookerSection>
                <ImgComponent 
                        imagePath={"Scream.png"} 
                        rotate={"-13deg"}
                        width={"30%"}
                        top={'-50%'}
                        left={'74%'}/>
                <Sub2>세부팀?</Sub2>
            </HookerSection>
           
            <ScriptSection>   
                <About>
                    <StrongSpan>클럽 팔랑크스는, <br/></StrongSpan>
                    기획/컨설팅 분야를 중점적으로 다루는<br/>
                    세부적인 산업 분야를 기준으로<br/> 팀을 구성합니다. <br/><br/>
                    기존 7기까지의 5개 팀의 모든 과정을 <br/>종료하고(~23년 6월), <br/>
                    <span style={{color :"#2ECCFA"}}>IT,&nbsp;
                        </span>
                        <span style={{color :"#CC2EFA"}}>브랜딩,&nbsp;
                        </span> 
                        <span style={{color :"#868A08"}}>서비스,
                        </span>에 대한 <br/> <StrongSpan>3개 팀으로</StrongSpan>  구성됩니다.<br/>
                </About>
            </ScriptSection>


          </SectionBlock>
          
          <SectionBlock id="Second-section">
            <OnloadGroup>
                <TitleSection>
                    <TextSection >
                      <DiscriptionBox style={{textAlign : "start"}}>
                        <SecTitle style={{color: "#A9E2F3"}}>팀 IT </SecTitle>
                        <Discription >
                            온라인 웹/앱을 기반으로 한 IT 플랫폼,  <br/>
                            서비스,메신저 등의 산업분야 속 <br/>
                            기능, 니즈, 내용, 솔류션 등을 <br/>
                            기획하는 활동을 메인으로 다룹니다<br/>
                        </Discription>
                        <Discription2 >
                            #앱스토어, #모바일 서비스<br/>
                            #실리콘밸리, #판교, #IT 서비스  
                        </Discription2>
                        <Discription3 >
                        <StrongSpan>팀장의 말<br/> </StrongSpan>
                        “우리 스마트폰 속에 있는 모든 앱이 <br/>
                        다 우리의 기획 대상입니다. <br/>
                        그리고 우리가 제휴 연결하기 제일 쉬워요!<br/>
                         (실제 해봄)”<br/>
                        </Discription3>
                      </DiscriptionBox>
                    </TextSection>
                    <ImgComponent 
                    imagePath={"ITTeam.png"} 
                    top={"0%"} 
                    left={"50%"}
                    rotate={"-20deg"}
                    width={"40%"}/>
                </TitleSection>

                <TitleSection>
                    <TextSection >
                      <DiscriptionBox style={{textAlign : "start"}}>
                        <SecTitle style={{color: "#CC2EFA"}}>팀 브랜딩 </SecTitle>
                        <Discription >
                            B2C 제품/서비스/기업 등을 중심으로, <br/>
                            해당 브랜드의 뉘앙스, 밸류 설정 등을 <br/>
                            다루는 ‘브랜딩‘ 기획 활동을 <br/>
                            메인으로 다룹니다.<br/>
                            (디자인 브랜딩의 BI와는 다릅니다!)
                        </Discription>
                        <Discription2 >
                            #기업 가치, #페르소나, #브랜딩 컨셉,<br/>
                            #뉘앙스 설정, #브랜딩 스토리 
                        </Discription2>
                        <Discription3 >
                            <StrongSpan>팀장의 말 </StrongSpan><br/>
                            “다른 크루 기획에 피드백은 좋은데,<br/>
                            근거 없이 비난하는 분은 저희 팀에 <br/>
                            오시면 안됩니다.. 근거를 가진 건강한 비판!<br/>
                            피드백은 환영!”
                        </Discription3>
                      </DiscriptionBox>
                    </TextSection>
                    <ImgComponent 
                    imagePath={"BrTeam.png"} 
                    top={"0%"} 
                    left={"50%"}
                    rotate={"-20deg"}
                    width={"40%"}/>
                </TitleSection>

                <TitleSection>
                    <TextSection >
                      <DiscriptionBox style={{textAlign : "start"}}>
                        <SecTitle style={{color: "#F3F781"}}>팀 서비스 </SecTitle>
                        <Discription >
                            하드웨어 제품 보다는, 소프트웨어/행동 <br/>
                            기반 서비스를 중심으로 해당 서비스의 <br/>
                            기능과 매출 등 실무 지표의 유의미한 <br/>
                            성장에 대한 기획을 메인으로 다룹니다.<br/>
                        </Discription>
                        <Discription2 >
                            
                            #전환율, #정량적 지표, #MAU, <br/>
                            #퍼포먼스, #매출, #비용 

                        </Discription2>
                        <Discription3 >
                        <StrongSpan>팀장의 말 </StrongSpan><br/>
                            “기획은, 숫자에요. <br/>
                            우리 서비스가 좋아요가 아니라, <br/>
                            이번 기획의 MAU가 월 기준 4,500이고 <br/>
                            전월 대비 34% 상승했다고, <br/>
                            표현하는 팀입니다.”<br/>
                        </Discription3>
                      </DiscriptionBox>
                    </TextSection>
                    <ImgComponent 
                    imagePath={"SVTeam.png"} 
                    top={"0%"} 
                    left={"50%"}
                    rotate={"-20deg"}
                    width={"40%"}/>
                </TitleSection>

            </OnloadGroup>  
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Team;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.6),
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