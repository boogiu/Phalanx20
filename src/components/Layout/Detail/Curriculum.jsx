import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Curriculum = () => {

  return (
    <BackGroundSrc imagePath={"CuBack.png"}>
            <SectionBlock>
                    
              <TextBox><ImgComponent2 imagePath={"CCU.png"} 
                    top={"-2%"} 
                    left={"70%"}
                    rotate={"-20deg"}
                    width={"40%"}/>
                <TextGruop>
                    
                    
                    <Main>
                        커리큘럼
                    </Main>
                    <Txt>
                    팔랑크스의 크루들은,<br/>
                    실제 기획/컨설팅 기업 혹은<br/>
                    서비스 기업들의 기획 직무의 5~7년차<br/>
                    <GreenSpan><Bigger>실무진들의 자문을 받아 구축된,<br/></Bigger></GreenSpan>
                    실무 기획에서 진행하는 <br/>
                    여러 단계와 tool들에 대한 <br/>
                    기초 사항들을 학습, 경험하는  <br/>
                    커리큘럼을 진행합니다. <br/><br/>

                    팔랑크스 커리큘럼에 따라, <br/>
                    모든 크루들은 자신의 팀 분야 내에서의 <br/>
                    <RedSpan>주제를 스스로 설정하여,</RedSpan> 개인 혹은 조별로<br/>
                    자신의 기획안을 활동 주차 30주 동안 <br/>
                    <RedSpan>실제 기업들에게 제안하여 그 평가를 받고<br/> </RedSpan>
                    프로젝트를 타진하게 됩니다. 

                    </Txt>
                </TextGruop>
                <Imagediv>
                    <ImgComponent imagePath={"p.41.png"} 
                    top={"-20%"} 
                    left={"-30%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                     <ImgComponent imagePath={"p.413.JPG"} 
                    top={"-40%"} 
                    left={"10%"}
                    rotate={"0deg"}
                    width={"90%"}/>
                     <ImgComponent imagePath={"p.414.JPG"} 
                    top={"20%"} 
                    left={"60%"}
                    rotate={"0deg"}
                    width={"100%"}/>
                   
                </Imagediv>
                
                <TextSubGruop1>
                    <Sub>
                        필수형 유닛 6종
                    </Sub>
                    <Txt2>
                    <YellowSpan>니즈 파악 / 단계 구조화 / <br/>
                    세부 심화 / 제안 발송 <br/></YellowSpan>
                    4단계의 기획 커리큘럼과<br/>
                    크루간의 상호 피드백과 보완점,<br/> 
                    실제 산업에서의 기획 레퍼런스 분석<br/>
                    등으로 이루어진 <RedSpan>총 6종의 <br/>
                    ‘필수형‘ 유닛을 진행합니다. <br/></RedSpan>
                    <br/>                    
                    
                    4단계를 각 1주 씩, 총 4주에 1회, <br/>
                    실제 기업에게 제안하며, <br/>
                    활동 주차 30주 동안, 총 7개를 <br/>
                    제안하는 방식을 토대로, <Bigger><RedSpan>개인 일정과<br/>
                     역량, 노력에 따라</RedSpan></Bigger> 그 제안의 수와 <br/>
                     빈도를 스스로 변경/설정할 수 있습니다.<br/>
                    </Txt2>
                    
                </TextSubGruop1>
                <Imagediv>
                    <ImgComponent2 imagePath={"Explore.png"} 
                    top={"-90%"} 
                    left={"-50%"}
                    rotate={"0deg"}
                    width={"80%"}/>
                     <ImgComponent2 imagePath={"heart2.png"} 
                    top={"50%"} 
                    left={"30%"}
                    rotate={"30deg"}
                    width={"90%"}/>
                   
                </Imagediv>
                <TextSubGruop2>
                    <Sub>
                        선택형 유닛 28종
                    </Sub>
                    <Txt2>
                    실제 실무 기획 단계에서<br/>
                    1~3년차 기획러들이 제일 많이<br/>
                    사용하는 <GreenSpan>tool과 방법을 경험해보며,<br/></GreenSpan> 
                    모든 크루들이 각자 본인의 역량 성장의 <br/>
                    발판으로 활용합니다.<br/>
                    <br/>
                    기획하는 ‘방법‘ 을 포함하여, <br/>
                    ‘기술’ 과 실제 세부 도구들에 <br/>
                    관한 내용으로서, <RedSpan>매우 직접적이고 <br/>
                    구체적으로 프로그램들을 다뤄보기<br/>
                    때문에,<Bigger> 이론적인 것을 지향하는 <br/>분에게는
                     적합하지 않습니다.</Bigger></RedSpan> <br/>

                    </Txt2>
                </TextSubGruop2>
              </TextBox>
        </SectionBlock>
      </BackGroundSrc>
  );
};

export default Curriculum;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
    rgba(0, 0, 0, 0.4), 
    rgba(0, 0, 0, 0.6),
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

`;
const TextBox = styled.div`
    display: flex;
    width : 100%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    position : relative;
    margin: 13vh 0vw 0vh 0vw;
`;

const Main = styled.h2`
  font-family : "스윗";
  font-size : 9vmin;
  color : #04B431;
  margin: 5%;
`;

const Sub = styled.h3`
  font-family : "경북대";
  font-size : 8vmin;
  font-weight : 600;
  color : #00FF40;
  margin: 5%;
  text-shadow : 1px 1px 2px black;
`;
const Txt = styled.p`
font-family : "스윗";
font-size : 5vmin;
color : black;
margin: 5%;
`;

const Txt2 = styled.p`
font-family : "스윗";
font-size : 5vmin;
color : black;
margin: 5%;
`;

const TextGruop = styled.div`
    display: flex;
    width : 90%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 40px;
    margin-top: 20px;
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    margin: 5% 0% 5% 0%;
`;

const TextSubGruop1 = styled.div`
    display: flex;
    width : 90%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(204, 255, 204, 0.8);
    border-radius: 40px;
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    margin: 5% 0% 5% 0%;
    animation:ani 2s infinite alternate;  
   }
  @keyframes ani{
   
    0%{transform:translate(0,0);}
   100%{transform:translate(0,20px);}
}  
`;
const TextSubGruop2 = styled.div`
    display: flex;
    width : 90%;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 204, 0.8);
    border-radius: 40px;
    transition: height 0.5s ease;
    overflow-y: auto;
    text-align:left;
    margin: 10% 0% 5% 0%;
    animation:ani 2s infinite alternate;  
   }
  @keyframes ani{
   
    0%{transform:translate(0,0);}
   100%{transform:translate(0,-20px);}
}  
`;

const Imagediv = styled.div`
  width : 100%;  
  height : 20vh; 
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
              borderRadius :"5% 5% 5% 5% ",
            }}/>
        </ImageContainer>
        
    );
  };
  


  const RedSpan = styled.span`
  color : #B40404;
`

const YellowSpan = styled.span`
  color : #886A08;
`
const GreenSpan = styled.span`
  color : #04B404;
`
const Bigger = styled.span`
font-size : 6vmin;
line-height : 150%;
`
