import React, { useState } from 'react';
import {styled,css} from 'styled-components';
import { shadowAnimation } from "../common/Animation"

const SeocndSection = () => {

  return (
<BackGroundSrc imagePath={"2Sec.png"}>
        <SectionBlock>
            <ScriptSection>
                <Title 
                style={{lineHeight:"300%"}}>팔랑크스는!
                </Title>
                <ImgComponent 
                    imagePath={"target.png"} 
                    rotate={"-15deg"}
                    width={"50%"}
                    top={'-10%'}
                    left={'70%'}/>
                <Discription>
                  IT / 브랜딩 / 서비스 3개 분야를 중심으로
                  <br />
                 모든 크루가&nbsp;
                  <span style={{ color: 'rgba(255, 238, 0, 0.788)' }}>
                  자신의 기획(개인+파트별)을
                  </span>
                        <br />
                        주차별 커리큘럼에 따라 진행하는<br />
                        <span style={{ 
                          color: 'rgba(255, 238, 0, 0.788)' ,
                          fontSize:"7vmin",
                          lineHeight : "200%"}}>
                        30주 과정
                        </span>
                        으로,
                        <br />
                        <br />
                        <span style={{ color: 'rgba(255, 238, 0, 0.788)'  }}>
                        4주당 1개씩</span> 
                        
                        자신이 관심이 있는<br /> 기업과 서비스에게
                        <br />
                        나와 내가 소속된 파트의 <br />
                        <span style={{ color: 'rgba(255, 238, 0, 0.788)'  }}>
                        기획서를 발송하여, </span> <br />
                        실무 프로젝트를 타진하는 과정을 <br />핵심으로 진행하는<br />
                        국내 최고의 기획 분야 <br />동아리(클럽) 입니다. ☺
                </Discription>
            </ScriptSection>
          </SectionBlock>
             
        <SectionBlock style={{ margin : "0 0 0 20%" , justifyContent : "flex-start"}}>
            <HookingDiv >
            <ImgComponent 
                    imagePath={"target.png"} 
                    rotate={"0"}
                    width={"30%"}
                    top={'20.8%'}
                    left={'70%'}/>
                    <div>
                        <Discription>학교에서 과제로 하는 <br/>레포트, 팀플이 아닌</Discription>
                        <SubTitle>진짜..기업에게<br/> 던지는 기획!</SubTitle>
                    </div>
                
            </HookingDiv>
            <HookingDiv>
                <ImgComponent 
                    imagePath={"file.png"} 
                    rotate={"10deg"}
                    width={"30%"}
                    top={'28.1%'}
                    left={'70%'}/>
                    <div>
                        <Discription>우리 또래의 아이디어와 <br/>망상에만 머무르지 말고,</Discription>
                        <SubTitle>진짜..실무자의 <br/>기획으로 바꿔보자!</SubTitle>
                    </div>
                
            </HookingDiv>
            <HookingDiv>
                <ImgComponent 
                    imagePath={"idea.png"} 
                    rotate={"-36deg"}
                    width={"30%"}
                    top={'34.6%'}
                    left={'70%'}/>
                    <div>
                        <Discription>재미있는 상상으로<br/> 구성된 메모가 아닌,</Discription>
                        <SubTitle>치열한 구조화로<br/> 도출된 현실적 기획!</SubTitle>
                    </div>
            </HookingDiv>
            
                        
            <HookingDiv style={{width : "100%"}}>
              <ImgComponent 
                    imagePath={"Scream.png"} 
                    rotate={"12deg"}
                    width={"50%"}
                    top={'41.5%'}
                    left={'-10%'}/>
            <Stronger style={{ margin : "30% 0 0 20%"}}> 이 세상 모든 건 <br/> 
            <span style={{fontSize : "12vmin"}}>기획이다!</span></Stronger>
            
            </HookingDiv>          
            
        </SectionBlock>
        
        <SectionBlock>
            <Colblock>
            <ImgComponent 
                    imagePath={"heart3.png"} 
                    rotate={"0deg"}
                    width={"50%"}
                    top={'100%'}
                    left={'0%'}/>
                    <ImgComponent 
                    imagePath={"heart2.png"} 
                    rotate={"0deg"}
                    width={"50%"}
                    top={'62%'}
                    left={'60%'}/>
                <p><GreenSpan>기획/컨설팅 분야로 <br/>
                진출하기 위해</GreenSpan> 다양하게 준비된<br/>
                 커리큘럼과 내부 운영 과정을, <br/>
                각자의 역량 성장과 <br/>정량적 스펙을 위해<br/>
                <Stronger>120% 활용하며  <br/></Stronger> 
                함께 성장하는 분이어야 합니다!</p>
                <ImgComponent 
                    imagePath={"Key.png"} 
                    rotate={"60deg"}
                    width={"50%"}
                    top={'49%'}
                    left={'50%'}/>
            </Colblock>
        </SectionBlock>
        <SectionBlock style={{ margin : "0% 0 0 00%"}}>
            <TextBlock2>
                <Discription>
                  <BigRedSpan>“그냥 될대로 되라~" 이러면서  <br/>
                  들어오면…안돼요.. <br/></BigRedSpan>
                  (꼭 약속..해줄거죠?)<br/>
                  <br/>
                  실무 기획 앞에서는<br/>  우리 모두 비기너에요.<br/>
                  <GreenSpan>우리와 함께 기획의 세계에  <br/>
                  흠뻑 담가보시겠다면!<br/></GreenSpan>
                  <br/>
                  1학년도 좋고 4학년도,  <br/>
                  졸업생도 좋지만!<br/>
                  규정을 무시하고  <br/>
                  노력을 하지 않는 분은 ..안돼요!<br/>
                </Discription>
              </TextBlock2>  
                
                <FloatBlock>
                  <Discription>
                    말로만 하는, 생각만 하는 기획 말고, <br/>
                    <DeepGreenSpan>진짜.. 실전 세상에 부딪혀보고 싶은 분이</DeepGreenSpan><br/>
                    팔랑크스에 알맞습니다. ☺<br/>
                  </Discription>
                </FloatBlock>   

            </SectionBlock>           
            <SectionBlock>
              <TextBlock2>
                <Discription>
                <BigRedSpan>열심히 했는데, 잘 안되는거!? </BigRedSpan> <br/>
                그건 괜찮아요!<br/>
                대학 때 신나게 실패해보고,  <br/>
                실무 가서 인정 받아보자구요!<br/>
                <br/>
                아무것도 모르는 1학년도, <br/>
                여태껏 생각만 해왔던 4학년도,<br/>
                <br/>
                <GreenSpan>나의 직무는 기획이고!<br/>
                나의 커리어는 이렇게 표현되는구나! </GreenSpan>를 
                알게 되는 <BigSpan>팔랑크스</BigSpan>입니다.
                </Discription>
            </TextBlock2>
            </SectionBlock>
                 
        
      </BackGroundSrc>
            
  );
};

export default SeocndSection;

const BackGroundGroup = styled.div`

  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.8), 
    rgba(0, 0, 0, 0.76),
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
  margin: 13vh 0vw 10vh 0vw;
`;
const ScriptSection = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 0px 4px 0px #979797;
  backdrop-filter: blur(9.999999046325684px);
  box-shadow: 0px 0px 4px 0px #979797;
  backdrop-filter: blur(10px);
  padding : 3vh 3vw 3vh 3vw;
  position:relative;
`;

const Discription = styled.p`
  font-family : "스윗";
  font-size : 5vmin;
  line-height : 150%;
  text-align : start;
`;


const Title = styled.h1`
  font-family: "워헤븐";
  font-size: 7vmin;
  color: white;
  text-shadow:0 0 2px #0fa, 0 0 4px #0fa,  0 0 8px #0fa;
`;

const HookingDiv = styled.div`
display: flex;
width : 90%;
flex-flow : row wrap;
justify-content: flex-start;
align-items: center;
text-align : start;
margin: 0vh 0vw 10vh 0vw;
`
const SubTitle = styled.h2`
  font-family : "워헤븐";
  font-size :6vmin;
  color : rgb(4, 243, 131);
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
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} alt="페이지 이미지" style={{ maxWidth: '80%', maxHeight: '80%' }}/>
      </ImageContainer>
      
  );
};

const Stronger = styled.h1`
  font-family: "자이언츠";
  font-size: 8vmin;
  color: white;
  text-shadow:0 0 2px #0fa, 0 0 4px #0fa,  0 0 8px #0fa;

`;

const Colblock = styled.div`
  display: flex;
  flex-flow : column wrap;
  justify-content: center;
  align-items: flex-start;
  width : 90%;
  margin : 5%;
  padding : 5%;
  font-family : "경북대";
  font-size : 5.5vmin;
  text-weight : 500;
  line-height : 200%;
  text-align : start;
  position : relatve;
`

const FloatBlock = styled.div`
    position: relative;
    width: 70%;
    height: auto;
    padding: 5%;
    border-radius: 10px;
    font-family: 'neuzeit-grotesk', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1em;
    line-height: 1.5;
    color: #333; /* 텍스트 색상 조정 */
    background: rgba(255, 255, 255, 0.85);
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.25);
    backdrop-filter: blur(9.999999046325684px);
    animation:ani 1s infinite alternate;  
   }
  @keyframes ani{
   
    0%{transform:translate(0,0);}
   100%{transform:translate(0,20px);}
}  

`;

const TextBlock2 = styled.div`
    position: relative;
    width: 70%;
    height: auto;
    padding: 5%;
    border-radius: 10px;
    font-style: normal;
    line-height: 1.5;
    color: #fff; /* 텍스트 색상 조정 */
    background: rgba(0, 0, 0, 0.2);
    box-shadow:  0 4px 8px 0 rgba(255,255,255,0.3);
    backdrop-filter: blur(9.999999046325684px);
`;

const BigSpan = styled.span`
  color:#40FF00;
  font-style: normal;
  font-weight: 600;
  line-height : 200%;
  font-size:4.5vmin;
`
const GreenSpan = styled.span`
color:#40FF00;
font-style: normal;
`

const DeepGreenSpan = styled.span`
color:#0B610B;
font-style: normal;
`

const BigRedSpan = styled.span`
  color:#FF0000;
  font-style: normal;
  font-size:5vmin;
  line-height : 200%;
  font-weight: 600;
`

