import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FcFlashOn  } from "react-icons/fc";


const SlideShow = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(8);

  const handleSlideClick = (index) => {
    setActiveSlideIndex(index);
  };

  return (
    <BackGroundSrc imagePath={"SubMsgBack.png"}>
        <Container>
          <TxtBox>
            <Strong><RedSpan>오지마!!!!</RedSpan></Strong>
            <SubStrong>이런 분들은 <br/>오면 안돼요...!</SubStrong>
            <ImgComponent
            imagePath={"back13.png"}
            width={"40%"}
            top={"15%"}
            left={"60%"}
            rotate={"20deg"}/>
          </TxtBox>
        <SlideBox>
          <SlideContainer
              className={activeSlideIndex === 0 ? "Slideactive3" : ""}
            onClick={() => handleSlideClick(0)}
            style={{ backgroundImage: "url('')" }}
          >
            <Title>
             <FcFlashOn /> 이미 기획 스펙이나 <br/>
             <RedSpan>역량을 완성하신 분</RedSpan>
            </Title>
            <ContentBox className="content-box90">
              <Txt >
              <BigGreenSpan>저희 팔랑크스는,</BigGreenSpan><br/><br/>
              이미 뛰어난 기획자로서 구체적인 <br/> 
              경력과 스펙을 갖춘 분이 오시면, <br/>
              <RedSpan>그다지 배울 것이 없을 지도 몰라요!</RedSpan> <br/>
              <br/>
              <GreenSpan>이번 9기에서 준비한 커리큘럼은</GreenSpan> <br/>
              이전 소모임에서 졸업한 선배 크루분들과 <br/>
              다양한 후원사의 실무진들에서 자문을 받아,  <br/>
              대학생 및 취업준비생이 1~2년차 실무 기획자를 <br/>
              능가할 수 있는 현실적인 기획 경험을 배워가며,<br/>
              <br/>
              <GreenSpan>채용에 필요한 포트폴리오 스펙을 갖추는 방향</GreenSpan>으로<br/>
              커리큘럼을 구성해 놓았기 때문에  이미 그 이상의 <br/>
              스펙과 경력을 구체적으로 가진 분은 오셔도  <br/>
              30주 과정 동안 유의미한 실제 성장보다는   <br/>
              후원사 증빙의 경력과 포트폴리오 내역 정도만 <br/>
              하나 더 추가될 뿐입니다. <br/>
              <br/>
              <BigGreenSpan>지금 이미 잘하시는 분보다, <br/>
              배우고 성장하려는 분에게<br/> 더 알맞습니다!</BigGreenSpan>
              </Txt>
            </ContentBox>
          </SlideContainer>

          <SlideContainer
              className={activeSlideIndex === 1 ? "Slideactive2" : ""}
            onClick={() => handleSlideClick(1)}
            style={{ backgroundImage: "url('')" }}
          >
            <Title>
             <FcFlashOn /> 직접하기보다는, <br/>
             <RedSpan>누가 해줘야 하는 분</RedSpan>
            </Title>
            <ContentBox className="content-box">
              <Txt >
              <BigGreenSpan>저희 팔랑크스는,</BigGreenSpan><br/><br/>
              자신의 노력 없이 누구의 덕만 <br/>
              보고자 하는 분은 오시면 안돼요! <br/>
              강의/팀플에서 이른바  <RedSpan>프리라이더분들..<br/>
              들어오시면 절대 안됩니다ㅠ</RedSpan> <br/>
              <br/>
              팔랑크스 안에서는 모든 동아리 활동 과정이,<br/> 
              <GreenSpan>주차별로  자신의 실무 기획 포트폴리오를<br/> 
              쌓아가는 과정</GreenSpan>으로 진행되는데,  <br/>
              <br/>
              이 과정에서 중앙 / 세부 / 특별 활동의<br/>
              모든 과정과 함께, 커리큘럼상  <br/>
              <GreenSpan>기획의 니즈/구조화/심화/제안의 <br/>
              모든 단계를 ‘직접’ </GreenSpan>혹은 자신의 파트 크루들과 <br/>
               진행하게 됩니다.  <br/>
               <br/>
              그러다보니 자신의 진행 과정을 자신이 직접 챙기지 못하고,  <br/>
              자꾸 누군가의 결과물에만 의존하는 것에만 익숙하신 분은  <br/>
              오시면 적응하기가 매우 힘듭니다!

              <br/><br/>
              <BigGreenSpan>누군가에게 의존하기보다, <br/>
                자신의 일정과 과정을 <br/>스스로 통제할 수 있어야 해요!</BigGreenSpan>


              </Txt>
            </ContentBox>
          </SlideContainer>
          <SlideContainer
              className={activeSlideIndex === 2 ? "Slideactive2" : ""}
            onClick={() => handleSlideClick(2)}
            style={{ backgroundImage: "url('')" }}
          >
            <Title>
             <FcFlashOn /> 본인의 희망 스펙/커리어가 <br/> 
             <RedSpan>기획 쪽 분야가 아닌 분</RedSpan>
            </Title>
            <ContentBox className="content-box">
              <Txt >
              <BigGreenSpan>저희 팔랑크스는,</BigGreenSpan><br/><br/>
              기획/컨설팅 분야의 정예 소모임에서  <br/>
              쌓아온 여러 인프라와 인사이트를 바탕으로, <br/>
              <br/>
              실제 기획/컨설팅 직무의 채용과 취업에<br/>
              곧바로 연결되는 <GreenSpan>실제 기업/서비스/브랜드 등을<br/>
              대상으로 한 ‘포트폴리오’ 를 쌓는 것에</GreenSpan><br/>
              그 핵심을 두고 있습니다. <br/>
              <br/>
              이에 따라 매주 진행되는 모든 크루의 <br/>
              기획안 작성과 기업에 대한 제안 등<br/>
              커리큘럼과 에세이, 특별 강연 등 <br/>
              <br/>
              <RedSpan>모든 과정이 <br/>
              ‘기획‘ / ‘기업의 문제 해결’ / ‘컨설팅’ 부분에 <br/>
              중점</RedSpan>을 두고 있기 때문에, 본인의 관심사가 <br/>
              이러한 키워드가 아닌 분들은 들어오시면 안돼요! <br/>
              <br/>
              친목이나 연애, 술자리가 목적이시면 <br/>
              저희 동아리는<br/> <BigRedSpan>기대감을 충족해드릴 수 없습니다.
                </BigRedSpan>
              <br/><br/>
              <BigGreenSpan>실제 기획/컨설팅 분야에서 <br/>
              본인의 정량적이고 확실한 커리어를  
              <br/>시작하는 것이 목표여야 합니다</BigGreenSpan>



              </Txt>
            </ContentBox>
          </SlideContainer>

          <SlideContainer
              className={activeSlideIndex === 3 ? "Slideactive1" : ""}
            onClick={() => handleSlideClick(3)}
            style={{ backgroundImage: "url('')" }}
          >
            <Title>
             <FcFlashOn /> 아직 사회의 커뮤니케이션을<br/> 
             <RedSpan>받아들이기 싫은 분</RedSpan>
            </Title>
            <ContentBox className="content-box">
              <Txt >
              <BigGreenSpan>저희 팔랑크스는,</BigGreenSpan><br/><br/>
              기획/컨설팅 분야의 ‘실무’ 역량을 준비하고,<br/>
              실제 기업을 대상으로 하는 자신의 포트폴리오를<br/>
              채워나가는 동아리입니다. <br/>
              <br/>
              이에 따라 내부 활동의 <br/>
              커뮤니케이션 빈도와 강도가, <RedSpan>실무를 진행하는 <br/>
              사회인(人)에 준하는 수준에서</RedSpan> 이루어집니다. <br/>
              <br/>
              강의 팀플에서 발생하는 눈치 싸움이나 <br/>
              톡방에는 있는데 답변이 없는 등의 <br/>
              커뮤니케이션 미스와 부주의로 발생하는 <br/>
              어처구니 없는 비용을 극도로 경계합니다.<br/>
              <br/>
              우리 대학생이라는 신분이 가지고 있는 <br/>
              <RedSpan>‘자유’ 를, 불러도 대답 없는 무책임과 <br/>
              혼동하시는 분은 절대 오시면 안됩니다.</RedSpan>
              <br/><br/>
              <BigGreenSpan>본인이 연락이 안된다는 소리를 <br/>
                자주 듣는 분이 오시면 서로 힘듭니다ㅠ</BigGreenSpan>
              </Txt>
            </ContentBox>
          </SlideContainer>

          <SlideContainer
              className={activeSlideIndex === 4 ? "Slideactive4" : ""}
            onClick={() => handleSlideClick(4)}
            style={{ backgroundImage: "url('')" }}
          >
            <Title>
             <FcFlashOn /> 기획 역량의 성장이 아닌,<br/>  
             <RedSpan>불순한 목적이 있는 분</RedSpan>
            </Title>
            <ContentBox className="content-box">
              <Txt >
              <BigGreenSpan>저희 팔랑크스는,</BigGreenSpan><br/><br/>
              기획 직무로의 실제 기업에서 원하는 <br/>
              정량적 포트폴리오를 만드는 것에 <br/>
              가장 최적의 과정을 핵심으로, <br/>
              <br/>
              이에 도움을 주시는 다수의 기업 및 실무진과<br/>
              자문/연계 등으로 함께 하고 있으며, <br/>
              클럽 활동의 <GreenSpan>‘모든 과정‘ 이 최종 합격자들에게 <br/>
              활동 신청 전에 안내되는 ‘규정’ 에 따라 </GreenSpan> <br/>
              움직이고 있습니다. <br/>
              <br/>
              그런데, 동아리의 운영 목적을 수호하고, <br/>
              각 크루들의 활동과 주차별로 쌓아가는 <br/>
              스펙을 공고히 하기 위해 만든 <br/>
              이 ‘규정’ 을 무시하고, 종교 활동이나 <br/>
              개인의 임의적인 목적을 가지고 <br/>
              클럽에 들어오는 <RedSpan>
                이른바 분탕질을 치는 사람은 <br/>
              ‘절대 올 수’ 없습니다. </RedSpan><br/>
              <br/>
              발각 즉시, 제명될 예정이며 크루들에게<br/>
              비용적/시간적 피해가 발생할 경우 <br/>
              규정 동의서에 따른 <br/>
              <BigRedSpan>사법 절차 역시 적극 고려할 예정입니다. </BigRedSpan> <br/>
              <br/><br/>
              <BigGreenSpan>동아리 소개를 <br/>
              괜히 공들여 하는 게 아닙니다. <br/>
              부합하는 분만 오세요!</BigGreenSpan>
              </Txt>
            </ContentBox>
          </SlideContainer>
        </SlideBox>
        

      </Container>
    </BackGroundSrc>
   
  );
};

export default SlideShow;



const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center;
  margin: 25vh 0vw 3vh 0vw;
`;
const SlideBox = styled.div`
width : 90%;
height: auto;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items:center;
margin: 8vh 1vw 3vh 0vw;
`;

const SlideContainer = styled.div`
  width: 90%;
  height: ${({ active }) => (active ? 'auto' : '15vh')}; /* 활성 슬라이드일 때는 높이를 자동으로 조정 */
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  align-items: flex-start;
  margin-top: 5vh;
  border-radius: 16px;
  background: rgba(255, 204, 153, 0.15);
  box-shadow: 0px 0px 4px 0px #979797;
  backdrop-filter: blur(9.999999046325684px);
  transition: all 0.7s ease-in-out;
  overflow-y: hidden;
  position: relative;
  color:white;
  
  .content-box {
    height: auto; /* 활성 슬라이드일 때 ContentBox가 나타나도록 */
    opacity: ${({ active }) => (active ? '0' : '1')}; /* 활성 슬라이드일 때 투명도를 조정하여 나타나도록 */
    transition: opacity 0.7s ease-out;
  }
  -webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  &.Slideactive1 {
    height: 100vh;
    overflow-y: auto;
  } 
  
  &.Slideactive2 {
    height: 100vh;
    overflow-y: auto;
  }

  &.Slideactive3 {
    height: 100vh;
    overflow-y: auto;
  }

  &.Slideactive4 {
    height: 100vh;
    overflow-y: auto;
  }
`;

const TxtBox = styled.div`
  width: 80%;
  color:white;
  display: flex;
  flex-flow : column wrap;
  justify-content: center;
  align-items:flex-start;
  position : relative;
`;

const ContentBox = styled.div`
  width : 100%;
  height : auto;
  flex-flow : row wrap;
  justify-content: center;
  align-items:flex-start;
  position : relative;
  display : flex;
`
const Title = styled.h3`
  font-size: 6vmin;
  font-family: '워헤븐';
  margin : 2% 0% 0% 5%;
  text-align : start;
`;

const Txt = styled.p`
  font-size: 4vmin;
  font-family: '스윗';
  text-align : start;
  transition: font-size 0.7s ease-out;
  margin : 5% 0% 0% 5%;
`;

const Strong = styled.div`
  font-size: 13vmin;
  font-family : '워헤븐';
  text-align:start;
  color : #27FF97;
  line-height : 200%;
  `

const  SubStrong = styled.div`
  font-size: 5.5vmin;
  font-family : '워헤븐';
  text-align:start;
  line-height : 150%;
`






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

const BackGroundGroup = styled.div`
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.95), 
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

const RedSpan =styled.span`
  color : #F78181;
  line-height : 150%;
`

const BigRedSpan =styled.span`
  color : #FA5858;
  font-family : "세종";
  font-size : 4.5vmin;
  line-height : 200%;
`

const GreenSpan =styled.span`
  color : #27FF97;
  line-height : 150%;
`
const BigGreenSpan =styled.span`
  color : #27FF97;
  font-family : "세종";
  font-size : 5vmin;
  line-height : 150%;
`