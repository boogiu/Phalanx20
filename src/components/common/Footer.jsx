import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 6%;
  font-size: 4vmin;
`;

const CopyRight = styled.div`
  text-align: start;
  font-family : '스윗';
`;

const CopyTxt = styled.div`
text-align: start;
font-family : '스윗';

`

const Footer = () => {
  return (
    <FooterContainer>
      <CopyRight>&copy; 2024 팔랑크스. All rights reserved.</CopyRight>
      <CopyTxt><br/>
      전국대학연합 기획/컨설팅 동아리, 클럽 팔랑크스<br/>
      phalanxclub.official@gmail.com <br/><br/></CopyTxt>
      <Txt>
      *본 페이지의 모든 contents와 Interface에 대한 권한은 <br/>
      클럽 팔랑크스에 있습니다. <br/>
      *본 페이지의 지원/제작에 도움을 주신 선배 크루들께 <br/>진심으로 감사드립니다. <br/>
    <GraySpan>(그냥 하는 말 아님. 솔직히 진짜 감사해요ㅎㅎ..우리 맘 알져?)</GraySpan><br/><br/>
    - 송찬영, 이소정(이상 4기) 외<br/>
    - 파호, 박진섭, 이도경, 이진아(이상 5기) 외<br/>
    - 이혜나, 이준, 김예찬(이상 7기) 외<br/><br/>
    *본 페이지의 내용과 contents를 공식 제휴 없이 무단 도용할 시, 법적 조처될 수 있습니다. 
    </Txt>
    </FooterContainer>
  );
};

export default Footer;
const GraySpan = styled.span`
    color : #D8D8D8;
`

const YellowSpan = styled.span`
    color : #F2F5A9;
`
const GreenSpan = styled.span`
    color : #BCF5A9;
`


const Txt = styled.p`
  font-family : '스윗';
  font-size : 3.5vmin;
  text-align:start;
  line-height : 150%;
`
