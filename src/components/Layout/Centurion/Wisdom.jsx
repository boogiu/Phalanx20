import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const Wisdom = () => {

  return (
    <BackGroundSrc imagePath={"Cent1.png"}>
        <SectionBlock>
            <OnloadGroup>
              <TitleSection>
                <ImgComponent imagePath={"Flag1.png"} 
                top={"-40%"} 
                left={"30%"}
                rotate={"0deg"}
                width={"30%"}/>
                <TextSection>
                  
                  <Title style={{textAlign : "end"}}>
                    중앙활동</Title>
                  <SubTitle style={{textAlign : "end"}}>
                  클럽 전체 크루들이 공통으로 <br/>진행하는 
                  <GreenSpan>‘중앙 과정’ </GreenSpan>입니다.</SubTitle>
                </TextSection>
              </TitleSection>
            </OnloadGroup>  
          </SectionBlock>

          <SectionBlock id="Second-section">
            <OnloadGroup>
                <TitleSection>
                    <TextSection >
                    <SecTitle>위즈덤 & 에세이 </SecTitle>
                      <DiscriptionBox>
                        
                        <Discription  style={{textAlign : "start"}}>
                            현재 우리가 사는 세상 속 다양한 기업과 <br/>
                            서비스, 산업 실무에서의 <Redspan>실제 기획 <br/>
                            레퍼런스를 바탕으로</Redspan> 크루들의 인싸이트를<br/>
                             나누는 위즈덤과, 에세이가 진행됩니다. <br/>
                             <br/>
                            <Strong>위즈덤을 통해서</Strong>, 모든 크루들은 <br/>
                            매주 정해진 기획 분야의 이슈/트렌드를 <br/>
                            전달받고, <Redspan>자신의 인싸이트를 다른 크루들과 <br/>
                            간단하게 나누며,</Redspan> 실무진에게 피드백 받습니다. <br/>
                            <br/>
                            <Strong>에세이에서는</Strong> 보다 더 <Redspan>심화적인 <br/>
                            기획 이슈를 소재로,</Redspan> 우리의 기획력을 <br/>
                            각자 블로그와 티스토리 등 개인 채널에 <br/>
                            아카이빙 한 후, 크루들과 공유합니다. 

                        </Discription>
                      </DiscriptionBox>
                    </TextSection>
                    <ImgComponent 
                    imagePath={"Pen.png"} 
                    top={"-6%"} 
                    left={"-13%"}
                    rotate={"-60deg"}
                    width={"40%"}/>
                </TitleSection>
                
            </OnloadGroup>  
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default Wisdom;

const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.4), 
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
  color :#CEECF5;
  width : 80%;
  line-height : 150%;
 
`;
const Title = styled.h1`
  font-family: "워헤븐";
  font-size: 13vmin;
  color: white;
  text-shadow:0 0 2px #58ACFA, 0 0 4px #58ACFA,  0 0 3px #58ACFA;
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
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} alt="페이지 이미지" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </ImageContainer>
      
  );
};

const Redspan = styled.span`
  font-weight: 500;
  color: #F78181;
  font-size : 5vmin;
`;

const RedStrongSpan = styled.span`
width: 100%;
font-size: 6vmin;
font-family : '스윗';
font-weight : 600;
color : #FF0000;
line-height : 200%;
font-style : italic;
`;

const StrongSpan = styled.span`
  width: 100%;
  font-size: 6vmin;
  font-family : '스윗';
  font-weight : 600;
  color : #298A08;
  line-height : 200%;
`;

const GreenSpan = styled.span`
  color : #81F79F;
`;
const Strong = styled.span`
  font-family : "스윗";
  font-size : 7vmin;
  color: #FAAC58;
  line-height:200%;
  font-weight : 600;
  
`;

const SecTitle = styled.h2`
  font-family : "워헤븐";
  font-size : 10vmin;
  color: #58ACFA;
  line-height:200%;
`;

const ImageBox = styled.div`
  height: auto;
  object-fit: cover;
  background-color: transparent;
  margin : 5% ;
  animation:ani 1s infinite alternate;  
   }
  @keyframes ani{
   
    0%{transform:translate(0,0);}
   100%{transform:translate(0,20px);}
}  
`;

const JustImg = ({ imagePath }) => {
  return (
      <ImageBox 
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', 
          maxHeight: '100%',
          borderRadius :"5% 5% 5% 5% " }}/>
      </ImageBox>
      
  );
};
