import React, { useState } from 'react';
import styled from 'styled-components';
import { CgChevronUp, CgChevronDown  } from "react-icons/cg";

const LeaderMessage = () => {
  const [isOpen, setIsOpen] = useState(false); // 텍스트 박스의 여닫음 상태를 관리하는 상태 변수

  // 텍스트 박스를 여닫는 함수
  const toggleTextBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BackGroundSrc imagePath={"LeaderBack.png"}>
      <SectionBlock>
        <Heading>
          <ImgComponent
            imagePath={"Mail.png"}
            top={"-35%"}
            left={"20%"}
            width={"30%"}
            rotate={"-20deg"}
          />
          <Title>9기 단장의 말</Title>
          <Title
          style={{
            fontSize : "5vmin",
            top : "40%",
            color : "#848484"
          }}>주절주절 주의...</Title>
        </Heading>
      </SectionBlock>

      {/* 여닫을 수 있는 텍스트 박스 */}
      <TextBox isOpen={isOpen}>
        <ToggleButton onClick={toggleTextBox}>
        {isOpen ? (<><CgChevronUp /> 주절주절 그만 보기</>) : 
        (<> 주절주절 더보기 <CgChevronDown /> </>)}
        </ToggleButton>
        <Content>
        <ImgComponent
            imagePath={"heart1.png"}
            top={"0%"}
            left={"60%"}
            width={"10%"}
            rotate={"20deg"}
          />
          {/* 여러 줄의 텍스트 내용 */}
          <p>
          <ImgComponent
            imagePath={"heart2.png"}
            top={"6.5%"}
            left={"-8%"}
            width={"10%"}
            rotate={"-20deg"}
            />
            <ImgComponent
            imagePath={"BoxIcon.png"}
            top={"7.5%"}
            left={"70%"}
            width={"30%"}
            rotate={"20deg"}
            />
            <ImgComponent
            imagePath={"Flash2.png"}
            top={"10.7%"}
            left={"-7%"}
            width={"20%"}
            rotate={"-30deg"}
            />
            <ImgComponent
            imagePath={"target.png"}
            top={"15.5%"}
            left={"80%"}
            width={"20%"}
            rotate={"-10deg"}
            />
            <ImgComponent
            imagePath={"Explore.png"}
            top={"20.5%"}
            left={"60%"}
            width={"30%"}
            rotate={"10deg"}
            /> 
            <ImgComponent
            imagePath={"Chess2.png"}
            top={"25.5%"}
            left={"80%"}
            width={"30%"}
            rotate={"-10deg"}
            />
            <ImgComponent
            imagePath={"Crown.png"}
            top={"31.2%"}
            left={"0%"}
            width={"10%"}
            rotate={"10deg"}
            />
            <ImgComponent
            imagePath={"Flash1.png"}
            top={"37%"}
            left={"70%"}
            width={"25%"}
            rotate={"30deg"}
            />
            <ImgComponent
            imagePath={"Key.png"}
            top={"44.5%"}
            left={"70%"}
            width={"25%"}
            rotate={"60deg"}
            />
            <ImgComponent
            imagePath={"idea.png"}
            top={"50%"}
            left={"60%"}
            width={"30%"}
            rotate={"-30deg"}
            />
            <ImgComponent
            imagePath={"Flag1.png"}
            top={"54%"}
            left={"70%"}
            width={"50%"}
            rotate={"-50deg"}
            />
            <ImgComponent
            imagePath={"Medal.png"}
            top={"66%"}
            left={"70%"}
            width={"30%"}
            rotate={"0deg"}
            />
            <ImgComponent
            imagePath={"heart3.png"}
            top={"77%"}
            left={"70%"}
            width={"30%"}
            rotate={"10deg"}
            />
            <ImgComponent
            imagePath={"ChatIcon.png"}
            top={"82%"}
            left={"80%"}
            width={"10%"}
            rotate={"10deg"}
            />
            <ImgComponent
            imagePath={"Flag2.png"}
            top={"96%"}
            left={"60%"}
            width={"50%"}
            rotate={"0deg"}
            />
            안녕하세요, <br/>
            클럽 팔랑크스 9기 단장으로 선임된,<br/>
            00대 00학과 4 000입니다.<br/>
            <br/>
            
            5개 대학
            <GraySpan>(서울대, 숭실대, 건국대, 숙명여대, 성균관대),</GraySpan> <br/>
            12명의 연합 소모임이었던 지난 8기를 <br/>
            끝으로 4, 5, 7기 구성원들이, <br/>
            졸업한 선배 크루들과 다양한 후원사의<br/>
            십시일반 도움을 받아, 23년 10월부터<br/>
             준비하여 확장 리뉴얼한 이후에 <br/>
            <StrongSpan>이번 9기를 시작하게 되어</StrongSpan> <br/>
            뿌듯한 마음니다.<br/>
            <br/>
            
            <RedSpan>특히 이번 리뉴얼 때 고생하신 <br/>
            5기 파호 선배 크루께 감사드립니다.😚<br/></RedSpan>
            <GraySpan>(난 말했다..?)</GraySpan><br/>
            <br/>
            팔랑크스는 <br/>
            <RedSpan>실무로 구체화되는 결과물 없이 <br/></RedSpan>
            단순히 일회성의 팀플이나 발표, <br/>
            
            그리고 친목 모임 위주로만 운영되는<br/>
            기획/컨설팅 분야의 기존의 학회/동아리 <br/>
            활동을 탈피하여, 실제 세상과 <br/>
            <StrongSpan>더 직접적으로 연결되고,</StrongSpan><br/>
            기획 직무에서의 정량적인 경력,<br/>
            커리어의 시작 그리고 기업 <br/>
            채용 과정에서의 공신성 있는<br/>
            증빙이 가능한 <GreenSpan>실무 역량 성장을</GreenSpan><br/>
            주요 모토로 삼고 있습니다. <br/>
            <br/> <br/>
            <StrongSpan>이에 따라,</StrongSpan> <br/>
            동아리의 활동 내용 자체가 <br/>
            특정 강의나 수업의 과제로 <br/>
            우리가 배워왔던 <RedSpan>‘학습’ 이나 <br/>
            이론을 공부하는 과정이 아닌, </RedSpan> <br/>
            모든 크루가 자신이 관심 있는<br/>
            (or 취업하고자 하는) 기업이나 <br/>
            브랜드(서비스) 등을 대상으로 <br/>
            <br/>
            우리의 아이디어와 발상을 기획하여 <br/>
            해당<GreenSpan> 기업에게 실제로 던지는 실무 과정과,</GreenSpan><br/>
            그로 인해 누적, 도출되는 치열한 30주의 <br/>
            결과물을 본인의 포트폴리오로 누적, <br/>
            졸업하는 활동으로 구성됩니다.<br/>
            <br/>
            팔랑크스의 이번 9기 리뉴얼을 할 때,<br/>
            저희 이번 운영진들이 공통으로 중점을 <br/>
            두었던 부분은, 처음 5기로 들어와서 <br/>
            ‘기획‘ 이라는 부분을 익혀갈 때, <br/>
            클럽의 모두가 좋은 대학, 좋은 능력, <br/>
            좋은 아이디어를 가지고 있다고 <br/>
            각자가 생각하다 보니, <br/>
            그 어떤 기획 과정도<br/>
            <RedStrongSpan>실무와는 동떨어진,</RedStrongSpan> <br/>
            <RedSpan>우리들끼리의 자체적인 평가나 <br/>
            자화자찬에 지나지 않았다</RedSpan>는 <br/>
            것이었습니다. <br/>
            <br/>
            <br/>
            이에 따라 팔랑크스의 <br/>
            여러 커리큘럼과 선배 자문들 <br/>
            그리고, 정말 뛰어난 실무 기획자들의<br/>
            피드백과 결과를 바탕으로, <br/>
            <StrongSpan>‘기획’ 에는 구체적이고<br/> 
            현실적인 방법과 절차가 있고, </StrongSpan><br/>
            이것이 우리가 생각하는 <br/>
            <RedSpan>‘취향, 상상‘ 과 ‘실무 기획’ 의 차이</RedSpan>를<br/>
            만든다는 것을 뼈저리게 경험하고 나니, <br/>
            <br/>
            이러한 실무적인 실제 과정을 <br/>
            대학 수업이나 팀플, <br/>
            기존의 동아리에서는<br/>
            <RedStrongSpan>겪을 수 없다는 것이, <br/></RedStrongSpan>
            이번 리뉴얼의 가장 큰 동기였습니다. 
            <br/><GraySpan>이론과 실제는 다르더라구요.</GraySpan><br/>
            <br/><br/>
            <StrongSpan>이번 9기 리뉴얼은, </StrongSpan><br/>
            기존의 선배 크루들의 도움과 <br/>
            5~7년차의 기획 실무자 분들의 <br/>
            자문을 받아 ‘기획/컨설팅’ 분야의 <br/>
            <GreenSpan>38개의 선택/필수 유닛을 <br/>
            매주 2~3개씩 진행하며,</GreenSpan> <br/>
            이 커리큘럼을 바탕으로 <br/>
            우리 팔랑크스의 크루들을 <br/>
            기획/컨설팅 분야에 <br/>
            단순히 관심 있던 사람에서,<br/>
            <StrongSpan>구체적인 ‘경력‘ 을 가진 사람으로</StrongSpan><br/>
            만드는 것을 가장 주된 목적으로 <br/>
            가지고 있기 때문에 <br/>
            <br/>
            클럽 내의 모든 활동 과정이 <br/>
            실제 기업과 서비스를 대상으로<br/>
            구체적인 기획 과정과 경력 <br/>
            그리고 포트폴리오를 쌓아가는,<br/>
            <StrongSpan>‘초보’ 기획러들을 위한 과정에 <br/>
            가장 중점을 맞추어져 있다는 것을,</StrongSpan><br/>
            강하게 재명시드립니다! <br/>
            (이미 혼자서도 정량적인 <br/>
            실무 기획 포트폴리오를 <br/>
            쌓으실 수 있는 분은..굳이..?)<br/>
            <br/>
            다른 클럽형 동아리들처럼,<br/>
            정말 많은 실무적인 활동들을 통해,<br/>
            구체적으로 증빙된 결과물을 쌓아 <br/>
            졸업하는 동아리이다보니, <br/>
            <RedSpan>그냥 섣부르게 들어오시기보다는,</RedSpan><br/>
             준비된 설명과 사항들을 꼼꼼히 <br/>
             읽어 보시고 같이 다양한 <br/>
             실무적 고민과 노력하면서, <br/>
             <GreenSpan>진짜 실무 기획자로 성장하여, <br/>
             관련한 직무의 커리어를 시작하는 <br/>
             포트폴리오를 확보하실 분</GreenSpan>이 알맞습니다!<br/>
             <br/>

            정말 오랜 기간 동안 고생하면서,<br/>
            많은 선배 크루들이 여러 <br/>
            안내 페이지를 만들어놨으니, <br/>
            <RedSpan>꼭 숙지해주셔야 해요!<br/></RedSpan>
             <br/>

            들어오시면 다른 클럽형 동아리처럼<br/>
            활동량 자체가 꽤 됩니다.<br/> 
            <GreenSpan>학년이나 현재 실력은 크게 상관이 없지만,</GreenSpan><br/>
            기획 분야의 실무 포폴을 <br/>
            진짜 쌓고자 하는 분이 적합합니다. <br/>
            <br/>

            지금 1학년이냐 4학년이냐 보다,<br/>
            얼마나 기획 포트폴리오를 쌓아야 하고, <br/>
            실제 <RedSpan>개인의 노력이 어느 정도 있느냐에<br/>
            따라 </RedSpan>각자 결과물과 채용 아웃풋이 <br/>
            달라지더라구요.<br/>
            <br/>
            정말 뜻이 있으시다면, <br/>
            <RedStrongSpan>각오는 하고</RedStrongSpan> 들어오셔야 합니다...<br/>
            <GreenSpan>아자!</GreenSpan><br/>
            <br/>
            기획/컨설팅 분야의 우리 커리어를 <br/>
            팔랑크스에서 출발해보자구요.<br/>
            <StrongSpan>9기, 진심으로! 환영합니다.</StrongSpan> <br/>

            <br/><br/>

            <GraySpan>-클럽 팔랑크스, 9기 운영진-</GraySpan>

          </p>
        </Content>
       
      </TextBox>
    </BackGroundSrc>
  );
};

// 이하 스타일은 이전과 동일합니다.


const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.5),  
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.9)
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


const ImageContainer = styled.div`

width: ${({ width }) => width};
height: auto;
object-fit: cover;
background-color: transparent;
transform : rotate(${({ rotate }) => rotate});
top:${({ top }) => top};
left: ${({ left }) => left};
position: absolute; /* 겹치는 요소에 position 추가 */
opacity : 60%
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

  //콘테이너 디자인//

const SectionBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow : column wrap;
  justify-content: center;
  align-items: center;
  color : white;
  margin: 25vh 0vw 5vh 0vw;
`;

const Heading = styled.div`
    width: 100%;
    height : 25vh;
    font-size: 9vmin;
    font-family : '세종';
    text-align : right;
    line-height : 150%;
    position : relative;
`
const Title = styled.h1`
    font-size: 9vmin;
    font-family : '세종';
    z-index : 3;
    position: absolute;
    top:10%;
    right:10%;
`

// 텍스트 박스 스타일
const TextBox = styled.div`
  width: 80%;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 40px;
  margin-top: 20px;
  transition: height 0.5s ease;
  overflow-y: auto;
  text-align:left;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "55vh")};
`;



const ToggleButton = styled.button`
  width: 100%;
  font-size: 4vmin;
  font-family : '스윗';
  font-weight : 600;
  margin-bottom:5%;
  top:0;
  left : 60%;
  padding: 10px;
  color: black;
  border: none;
  border-radius: 5px;
  position: -webkit-sticky;
  position: sticky;
  cursor: pointer;
  outline: none;
  background-color: rgba(255, 255, 252, 0.8);
  z-index:2;
`;
const Content = styled.div`
  font-size: 5vmin;
  font-family : '스윗';
  line-height : 150%;
  position:relative;
  overflow-y : auto;
  overflow-x:hidden;
`;
const GraySpan = styled.span`
  width: 100%;
  font-size: 3.6vmin;
  font-family : '스윗';
  font-weight : 600;
  color : #585858;
`;
const RedSpan = styled.span`
  width: 100%;
  font-size: 5vmin;
  font-family : '스윗';
  font-weight : 600;
  color : #FF0000;
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
  width: 100%;
  font-size: 5vmin;
  font-family : '스윗';
  font-weight : 600;
  color : #298A08;
`;
export default LeaderMessage;