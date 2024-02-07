import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import PopUpBtn from '../Layout/PopUpBtn';

const ThirdSection = () => {

    return (
        <BackGroundSrc imagePath={"ThirdBack.png"}>
           <SectionBlock>
            <HookerSection>
              <ImgComponent 
                      imagePath={"TrashCan.png"} 
                      rotate={"-13deg"}
                      width={"30%"}
                      top={'-50%'}
                      left={'74%'}/>

              <SubTitle>장난은  &nbsp;
              <Redspan>이제 그만...!!</Redspan></SubTitle>
              

            </HookerSection>
           
            <ScriptSection>   
                <Discription>
                    <StrongP>대학생 수준에서 벗어나서<br/></StrongP>
                    <CommonP >이제 진짜 기획자로서, <br/>
                    우리가 가고 싶은 기업에게<br/></CommonP>
                    <CommonP >우리의 기획을 제안해보자구!<br/>
                    <br/></CommonP>
                    <StrongP>이제 끄적끄적 메모했다가 <br/> </StrongP>
                    <CommonP >어디로 갔는지 알 수 없는거 말고,<br/> </CommonP>
                    <StrongP>이제 주저리주저리 말로만<br/></StrongP> 
                    <CommonP> 휘황찬란하게 떠드는 거 말고,<br/><br/>
                    <RedSpan>실제 경력이 되는 실무 기획... <br/>
                    해야겠지?</RedSpan></CommonP>
                    <ImgComponent 
                      imagePath={"Heart3.png"} 
                      rotate={"13deg"}
                      width={"80%"}
                      top={'150%'}
                      left={'40%'}/>
                </Discription>
            </ScriptSection>
            <SubTitle>전국대학연합 기획/컨설팅 분야<br/>
            최강 동아리, 클럽 팔랑크스</SubTitle>                     
           </SectionBlock>

           <SectionBlock>

            <PopUpBtn/>
            
            <DiscriptSection>
              <TitleTxt>
                이제 대학생 수준의 <RedSpan>아이디어,상상에<br/> 
                머무르지 말고,</RedSpan> 진짜 기업에게 타진하는<br/>
                실무 기획으로 바꿔보자. <br/>
              </TitleTxt>
              <JustImg imagePath={"defaultimg2.png"}/>
              <DisTxt>
                재미있는 상상으로 구성된
                그냥 낙서, 메모가 아니라 <br/>
                치열한 구조화와 정량화된 수치로 
                무장한 실무 기획!<br/>
                <br/>
                30주차 동안 7개의 <GreenSpan>실제 기업에게<br/> 발송하는 실무 
                기획안에서</GreenSpan> 매 주차별 <br/>우리의 기획 포트폴리오를
                 쌓아보자구!<br/>
                <br/>
                내가 가고 싶은 기업 / 서비스에 대한 <br/>나의 기획을
                 타진하고, 그 전 과정을 나의 <br/> 포트폴리오로 누적한다.<br/>
                 <br/>
              </DisTxt>
              
            </DiscriptSection>
            <DiscriptSection>
              <TitleTxt>
              우리가 직접 기획한 것을,  <br/>
              기업에게 제안하고 까여도 내가 까이고, <br/> 
              <RedSpan>성공해도 우리가 성공하는거야!</RedSpan> <br/>
              아자!
              </TitleTxt>
              <JustImg imagePath={"computer.png"}/>
              <DisTxt>
              아이디어 노트, 메모, 망상, 낙서 ...<br/> 그런거 말고,
              

              숫자와 비용, 목표와 플랜,<br/> 
              현실성과 커리어가 녹아있는! <br/> <br/>
              

              진짜 기업과 서비스가 탐내고 군침 흘리며,  <br/>
              <GreenSpan>“이봐 같이 하자구!” 할 진짜 실무 기획!</GreenSpan> <br/> <br/>
              

              우리의 기획력을
              실제 세상과 기업들에게 증명해보자구! <br/>
              </DisTxt>
              
            </DiscriptSection>
            
        </SectionBlock>
    </BackGroundSrc>
        
    );
};

// 이하 스타일은 이전과 동일합니다.


const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.7)
  ),
    url(${({ BackGroundImage }) => BackGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


  //콘테이너 디자인//

const SectionBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
  color : white;
  margin: 25vh 0vw 3vh 0vw;
`;

const HookerSection = styled.div`
display : flex;
flex-flow : row wrap;
justify-content: center;
align-items: center;
width: 100%;
position : relative;
`

const SubTitle = styled.h2`
  color: #FFF;
  font-family: '스윗';
  font-size: 7.5vmin;
  font-style: normal;
  line-height: 200%; /* 72px */
`

const Redspan = styled.span`
color:#F78181;
`

const StrongP = styled.p`
  color:#610B21;
  font-family: '세종';
  font-size: 5vmin;
  font-style: normal;
`
const CommonP = styled.p`
  color:#000;
  font-family: '스윗';
  font-size: 4.5vmin;
  font-style: normal;
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

const Discription = styled.p`
  font-family : "스윗";
  font-size : 4.5vmin;
  color:#fff;
  line-height : 200%;
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

const ImageBox = styled.div`npm
  height: auto;
  object-fit: cover;
  background-color: transparent;
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

const DiscriptSection = styled.div`
  width :100%;
  height: auto;
  display: flex;
  flex-flow : column nowrap;
  justify-content: center;
  align-items: flex-start;
  color : white;
  text-align : start;
  margin: 10vh 10% 3vh 10%;
`;

const TitleTxt = styled.p`

  font-family: '스윗';
  font-size: 5vmin;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  margin: 0vh 0vw 3vh 0vw;
`;

const DisTxt = styled.p`

  font-family: '스윗';
  font-size: 5vmin;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 25.2px */
`;
const RedSpan = styled.span`
  color:#FF0000;
  font-style: normal;
`
const GreenSpan = styled.span`
color:#40FF00;
font-style: normal;
`


export default ThirdSection;