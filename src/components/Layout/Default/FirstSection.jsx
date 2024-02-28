import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromLeft } from "../../common/Animation"

const FirstSection = () => {

  return (
    <BackGroundSrc imagePath={"1Sec.png"}>
        <SectionBlock id="first-section">
            <OnloadGroup>
              <TitleSection>
                <ImgComponent imagePath={"wellcome.png"} 
                top={"-10%"} 
                left={"10%"}
                rotate={"-20deg"}
                width={"30%"}/>
                <TextSection>
                  <SubTitle style={{textAlign : "end"}}>
                  기획/컨설팅 분야,<br/>국내 최고의 <br/>전국대학연합 동아리</SubTitle>
                  <Title style={{textAlign : "end"}}>
                  여기는
                  <Titlespan> 팔랑크스
                    </Titlespan> 
                  입니다.</Title>
                </TextSection>
              </TitleSection>
            </OnloadGroup>  
          </SectionBlock>

          <SectionBlock id="Second-section">
            <OnloadGroup>
                <TitleSection>
                    <TextSection >
                      <DiscriptionBox>
                        <Discription  style={{textAlign : "start"}}>
                            <Strong>너! </Strong>그래 너,
                            <br/>
                            너, <Redspan>기획</Redspan>하고 싶다면서?<br/>
                            너를 보여주는 기획안들<br/>
                            ..어딨어.? <Redspan>너 머릿속에 있는 거 말고,</Redspan><br/>
                            <br/>
                            <Bold>진짜 실무 기획안! 기획서!</Bold><br/>
                            ..있어..?..<br/> 설마..
                            ..없어..? …악…<br/>
                            그럼 와서<br/>
                            <Bold>배우고 만들어서 가져가!!</Bold> (엄근진)
                        </Discription>
                      </DiscriptionBox>
                        
                    </TextSection>
                    <ImgComponent 
                    imagePath={"MegaPhone.png"} 
                    top={"00%"} 
                    left={"50%"}
                    rotate={"-20deg"}
                    width={"20%"}/>
                </TitleSection>
                  
            </OnloadGroup>  
          </SectionBlock>
            
          <SectionBlock>
            <SubTitle style={{textAlign : "start"}}>취향 목록이나, <br/>아이디어 메모 말고</SubTitle>
            <Title style={{textAlign : "end"}}>진짜 기획안!</Title>
            <SubTitle style={{textAlign : "start"}}>상상 노트 말고,  <br/>실제 기업에서</SubTitle>
            <Title style={{textAlign : "end"}}> 움직이는 기획안!</Title>
          </SectionBlock>
      </BackGroundSrc>
  );
};

export default FirstSection;

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
  margin: 0vh 0vw 8vh 0vw;

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

const SubTitle = styled.h2`
  font-family : "워헤븐";
  font-size : 5.5vmin;
  color : rgb(4, 243, 131);
  width : 80%;
  line-height : 150%;
 
`;
const Title = styled.h1`
  font-family: "워헤븐";
  font-size: 6.5vmin;
  color: white;
  text-shadow:0 0 2px #0B6121, 0 0 4px #0B6121,  0 0 3px #0B6121;
  width : 80%;
  line-height : 200%;
  
`;
const Titlespan = styled.span`
  font-family: "워헤븐";
  font-size: 9vmin;
  color: white;
  text-shadow:0 0 2px #0fa, 0 0 4px #0fa,  0 0 3px #0fa;
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
  font-size : 5.5vmin;
`;

const Bold = styled.span`

  color: #FFFF00;
  
`;

const Strong = styled.span`
  font-family : "워헤븐";
  font-size : 10vmin;
  color: #F78181;
  line-height:200%;
  
`;