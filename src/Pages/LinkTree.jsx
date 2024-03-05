import React from 'react';
import styled from 'styled-components';
import ReactGA4 from 'react-ga4';

const FooterContainer = styled.footer`
  color: #fff;
  height: auto;
  padding : 10% 5%;
`;


const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: 40px;
  text-align: center;
  color: white;
  font-size: 5vmin;
  font-family: '한나프로';
  text-decoration: none;
  background : rgb(255,255,255,0.3);
  width: 90%;
  height: 15vh;
  border-radius: 50px;
  @media (max-width: 768px) {
    height: 110px; /* 기기의 너비가 768px 미만인 경우 */
  }
`;


const SocialLinkimg = styled.div`
  width: 100px;
  height: 100px;
  object-fit: cover;
  overflow:hidden;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  box-shadow: 0px 0px 3.6px 0px #979797;
  margin : 5% 3% 5% 3%;

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const MoreTxt = styled.h2`
    font-size: 9vmin;
    font-family : '한나프로';
    text-align : start;
    line-height : 150%;
    position : relative;
    margin: 25vh 0vw 3vh 0vw;
`
const IconContainer = styled.div`

width: 40%;
height: auto;
object-fit: cover;
background-color: transparent;
border : none;
transform : rotate(${({ rotate }) => rotate});
top:-50%;
left: 50%;
position: absolute; /* 겹치는 요소에 position 추가 */
`;

const IconImg = ({ imagePath }) => {
  return (
      <IconContainer>
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} alt="페이지 이미지" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </IconContainer>
      
  );
};


const LinkTree = () => {
  const handleClick = (event, elementId) => {
    // 클릭된 요소의 정보를 추적합니다.
    // 이벤트를 추적합니다.
    ReactGA4.event({
      category: 'User Interaction',
      action: 'SystemLink Click',
      label: `Clicked Element ID: ${elementId}`,
    });
  };

  return (
  <BackGroundSrc imagePath={"modalback.png"}>
    <FooterContainer>
            <MoreTxt>
              팔랑크스 <br/>동아리 시스템
            </MoreTxt>
            
          <SocialLinks>
            <SocialLink href="https://phalanxpms.azurewebsites.net/qna"
            onClick={(event) => handleClick(event, '커뮤니케이션 페이지')}>
              <ImgComponent imagePath={"CCpage.png"}/> 커뮤니케이션 페이지
            </SocialLink>
            <SocialLink href="https://phalanxpms.azurewebsites.net/graduatepage/"
            onClick={(event) => handleClick(event, '졸업 절차 시스템')}>
              <ImgComponent imagePath={"Gradpage.png"}/> 졸업 절차 시스템
            </SocialLink>
            <SocialLink href="https://phalanxpms.azurewebsites.net/curriculum"
            onClick={(event) => handleClick(event, '커리큘럼 기록 조회')}>
              <ImgComponent imagePath={"Curipage.png"}/> 커리큘럼 기록 조회
            </SocialLink>
            <SocialLink href="https://phalanx.bond/api/auth/signin?callbackUrl=https%3A%2F%2Fphalanx.bond%2F"
            onClick={(event) => handleClick(event, '활동 내역 관리')}>
              <ImgComponent imagePath={"Amanpage.png"}/> 활동 내역 관리
            </SocialLink>
            <SocialLink href="https://phalanxpms.azurewebsites.net/teamselect"
            onClick={(event) => handleClick(event, '세부 진행 지원')}>
              <ImgComponent imagePath={"Teampage.png"}/> 세부 진행 지원
            </SocialLink>
            <SocialLink href="https://phalanxpms.azurewebsites.net/restchange"
            onClick={(event) => handleClick(event, '활동 휴식 신청')}>
              <ImgComponent imagePath={"Restpage.png"}/> 활동 휴식 신청
            </SocialLink>
            <SocialLink href="https://phalanxpms.azurewebsites.net/snsid"
            onClick={(event) => handleClick(event, '정보 변경 신청')}>
              <ImgComponent imagePath={"Chanpage.png"}/> 정보 변경 신청
            </SocialLink>
          </SocialLinks>
        </FooterContainer>

  </BackGroundSrc>
   
  );
};

export default LinkTree;


const ImgComponent = ({ imagePath}) => {
  return (
      <SocialLinkimg>
          <img src={`${process.env.PUBLIC_URL }/imgData/4x/${imagePath}`} alt="페이지 이미지" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </SocialLinkimg>
  );
};


const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.98), 
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