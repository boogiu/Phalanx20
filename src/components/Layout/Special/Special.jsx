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

          <SectionBlock>
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
                    <ImgComponent imagePath={"p.41.png"} 
                    top={"-0%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                     <ImgComponent imagePath={"p.411.png"} 
                    top={"20%"} 
                    left={"10%"}
                    rotate={"0deg"}
                    width={"60%"}/>
                    
                </Imagediv>
            </TextSubGruop2>
          </SectionBlock>

          <SectionBlock>
            <TextSubGruop2>
                     <Main style={{textAlign : "center"}}>
                      포럼
                     </Main>
                     <Txt>
                     팔랑크스의 포럼에서는, <br/>
                     선배/졸업/동료 크루들 중 해당 부분에서 <br/>
                     <Bigger><YellowSpan>최고의 역량을 가지고 있는 크루가
                      </YellowSpan></Bigger><br/>
                     기획/컨설팅 분야에서 주요한 프로그램과<br/>
                     스킬에 대한 사용 방식이나, 기초적이지만 <br/>
                     <br/>
                    <RedSpan>한번도 누가 알려주지 않았던</RedSpan> 실무 사항들의<br/>
                    실제 진행 방식과 팁을 직접 보여주며, <br/>
                    <YellowSpan>클럽 크루  전체의 역량으로 진화할 수 있게<br/>
                    됩니다.<br/></YellowSpan>
                    <br/>
                    매월 평균 1~2회에 걸쳐, <br/>
                    선배/졸업/동료 크루들이 기획 분야의 팁을 <br/>
                    주제로 포럼이 개최되며 모든 크루들은 <br/>
                    자유롭게 참가할 수 있습니다. <br/>
                    <br/><Bigger><GreenSpan>
                    너무나도 쉽고, 다 아는것 같은데 <br/>
                    나만 모르는 스킬, 기술, 팁 등을 <br/>
                    포럼에서 얻어가세요! <br/></GreenSpan></Bigger>

                     </Txt>

                     <Imagediv>
                    <ImgComponent imagePath={"Forum.png"} 
                    top={"-10%"} 
                    left={"-10%"}
                    rotate={"0deg"}
                    width={"120%"}/>
                    
                </Imagediv>
            </TextSubGruop2>

            
          </SectionBlock>

          <SectionBlock>
            <TextSubGruop2>
                     <Main style={{textAlign : "right"}}>
                      특별행사
                     </Main>
                     <Txt>
                     팔랑크스에서는 <br/>
                     시즌 중 다양한 후원/연계사와의 교류를 통해 <br/>
                     실무진들의 특강, 공모전 참가, 관련 정보 공유, <br/>
                     채용 캐스팅 제안 등의 행사가 개최됩니다.<br/>
                     <br/>
                    해당 특별행사는, 클럽 팔랑크스와의 제휴로<br/>
                    연계사들의 다양한 지원/후원 하에 이루어지는 <br/>
                    것이며, 실제 기업들과의 채용 연계도 <br/>
                    이루어지오니, <br/>
                    기획/컨설팅을 위시한 여러 직무로의 <br/>
                    취업에서의 기회 역시 잡아가세요.<br/>
                    <br/>
                    <YellowSpan>특강, 행사 뒤에는 항상 뒷풀이와 <br/>
                    술자리가 있으니, 재밌게 노는 건 덤!<br/>
                    고생한 사람들끼리 마시는 술자리는..캬~</YellowSpan>

                     </Txt>
                     <Imagediv>
                    <ImgComponent imagePath={"Moim1.png"} 
                    top={"0%"} 
                    left={"50%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    <ImgComponent imagePath={"Moim2.png"} 
                    top={"70%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    <ImgComponent imagePath={"Moim3.png"} 
                    top={"10%"} 
                    left={"-40%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    <ImgComponent imagePath={"Moim4.png"} 
                    top={"80%"} 
                    left={"40%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                    <ImgComponent imagePath={"Moim5.png"} 
                    top={"50%"} 
                    left={"20%"}
                    rotate={"0deg"}
                    width={"50%"}/>
                </Imagediv>
            </TextSubGruop2>
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Special;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6), 
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
  margin: 13vh 0vw 0vh 0vw;

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
    overflow-x : hidden;
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