import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #fff;
  padding: 20px;
  margin: 13vh 0vw 3vh 0vw;
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
  &:hover {
    background-color: #ccc;
  }
  box-shadow: 0px 0px 3.6px 0px #979797;
`;

const MoreTxt = styled.h2`
    font-size: 9vmin;
    font-family : '세종';
    margin: 3vh 0vw 8vh 3vw;
    text-align : start;
    line-height : 150%;
    position : relative;
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
  return (
    <FooterContainer>
        <MoreTxt>클럽, 팔랑크스 <br/>더 알아보기
        <IconImg
        imagePath={'Zoom.png'}/>
        </MoreTxt>
        
      <SocialLinks>

        {/* Render social links with names and icons */}
        <SocialLink href="https://cafe.naver.com/phalanx">
          <ImgComponent imagePath={"cafe.png"}/> 카페(네이버)
        </SocialLink>
        <SocialLink href="https://phalanx-club.tistory.com/">
          <ImgComponent imagePath={"tstory.png"}/> 티스토리
        </SocialLink>
        <SocialLink href="https://blog.naver.com/phalanx_official">
          <ImgComponent imagePath={"blog.png"}/> 블로그(네이버)
        </SocialLink>
        <SocialLink href="https://docs.google.com/forms/d/e/1FAIpQLSf_GwY-CKdyQFUZNIB0rITSQnJQqG2bIybe805hXHUrJPmcsg/viewform">
          <ImgComponent imagePath={"Form.png"}/> 지원하기
        </SocialLink>
        <SocialLink href="https://www.instagram.com/phalanx.club/">
          <ImgComponent imagePath={"insta.png"}/> 인스타그램
        </SocialLink>
        <SocialLink href="https://www.youtube.com/@phalanxclub">
          <ImgComponent imagePath={"utube.png"}/> 유튜브
        </SocialLink>
        <SocialLink href="https://phalanxpms.azurewebsites.net/graduatepage">
          <ImgComponent imagePath={"System.png"}/> 동아리 시스템
        </SocialLink>
        <SocialLink href="https://pf.kakao.com/_RxluiG">
          <ImgComponent imagePath={"kakao.png"}/> 플러스친구
        </SocialLink>
        
        
      </SocialLinks>
    </FooterContainer>
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