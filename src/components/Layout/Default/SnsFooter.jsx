import React from 'react';
import styled from 'styled-components';
import ReactGA4 from 'react-ga4';
import { useNavigate } from 'react-router-dom';

const FooterContainer = styled.footer`
  color: #fff;
  padding: 20px;
  
`;


const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  text-align: center;
  color: white;
  font-size: 3vmin;
  font-family: '스윗';
  text-decoration: none;
`;


const SocialLinkimg = styled.div`
  width: 13vmin;
  height: 13vmin;
  object-fit: cover;
  overflow:hidden;
  border-radius: 50%;
  margin: 10%  10%;
  transition: background-color 0.3s ease;
  border : none;
  &:hover {
    background-color: #ccc;
  }
  box-shadow: 0px 0px 0px 0px #979797;
`;

const MoreTxt = styled.h2`
    font-size: 9vmin;
    font-family : '세종';
    margin: 3vh 0vw 8vh 3vw;
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


const SnsFooter = () => {
  const navigate = useNavigate();
  const handleLinkClick = (url, elementId) => {
    navigate(url);
    ReactGA4.event({
      category: 'User Interaction',
      action: 'Social Click',
      label: `Clicked Element ID: ${elementId}`,
    });
  };

  const handleClick = (event, elementId) => {
    // 클릭된 요소의 정보를 추적합니다.
    // 이벤트를 추적합니다.
    ReactGA4.event({
      category: 'User Interaction',
      action: 'Social Click',
      label: `Clicked Element ID: ${elementId}`,
    });
  };

  return (
  <BackGroundSrc imagePath={"modalback.png"}>
    <FooterContainer>
            <MoreTxt>클럽, 팔랑크스 <br/>더 알아보기
            <IconImg
            imagePath={'Zoom.png'}/>
            </MoreTxt>
            
          <SocialLinks>

            {/* Render social links with names and icons */}
            <SocialLink href="https://cafe.naver.com/phalanx" 
            onClick={(event) => handleClick(event,'네이버 카페')}
            >
              <ImgComponent imagePath={"cafe.png"}/> 카페(네이버)
            </SocialLink>
            <SocialLink href="https://phalanx-club.tistory.com/"
            onClick={(event) => handleClick(event, '티스토리')}>
              <ImgComponent imagePath={"tstory.png"}/> 아카이빙 채널
            </SocialLink>
            <SocialLink href="https://blog.naver.com/phalanx_official"
            onClick={(event) => handleClick(event, '네이버 블로그')}>
              <ImgComponent imagePath={"blog.png"}/> 블로그(네이버)
            </SocialLink>
            <SocialLink href="https://docs.google.com/forms/d/e/1FAIpQLSf_GwY-CKdyQFUZNIB0rITSQnJQqG2bIybe805hXHUrJPmcsg/viewform"
            onClick={(event) => handleClick(event, '지원서')}>
              <ImgComponent imagePath={"Form.png"}/> 지원하기
            </SocialLink>
            <SocialLink href="https://www.instagram.com/phalanx.club/"
            onClick={(event) => handleClick(event, '인스타그램')}>
              <ImgComponent imagePath={"insta.png"}/> 인스타그램
            </SocialLink>
            <SocialLink href="https://www.youtube.com/@phalanxclub"
            onClick={(event) => handleClick(event, '유튜브')}>
              <ImgComponent imagePath={"utube.png"}/> 유튜브
            </SocialLink>
            <SocialLink onClick={() => handleLinkClick("/LinkTree", '동아리 시스템')}>
                <ImgComponent imagePath={"System.png"}/> 동아리 시스템
            </SocialLink>
            <SocialLink href="https://pf.kakao.com/_RxluiG"
            onClick={(event) => handleClick(event, '카카오 플친')}>
              <ImgComponent imagePath={"kakao.png"}/> 플러스친구
            </SocialLink>
            
            
          </SocialLinks>
        </FooterContainer>

  </BackGroundSrc>
   
  );
};

export default SnsFooter;


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