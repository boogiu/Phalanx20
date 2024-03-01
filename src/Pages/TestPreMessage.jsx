import React, { useEffect, useRef, useState } from 'react';
import {TransText, ImgComponent,HannaProTxt,TextGruop3, SectionBlock3, TextGruop2, Balloon, GradientButton, SectionBlock2, TextGruop, RedSpan,StrongTxt,StyledContainer, SectionBlock, BackGroundSrc, HannaTxt, GrenBlock } from '../components/common/GlobalStyle';
import styled,{css,keyframes} from 'styled-components';
import { fadeInFromLeft } from "../components/common/Animation"
import IntersectionObserverComponent from '../components/common/IntersectionObserverComponent'
import AnimatedLogo from '../components/Layout/PreMessage/AnimatedLogo'
import { useNavigate } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

const TestPreMessage = () => {
  const navigate = useNavigate();
  const FirstRef = useRef(null);
  const SecondRef = useRef(null);
  const ThirdRef = useRef(null);

  const [isInViewport, setIsInViewport] = useState(false);   
  const handleLinkClick = () => {

        console.log('다음 페이지');
        ReactGA4.event({
            category: 'Intro Navigation',
            action: 'new Intro Skipped',
            label: 'new Intro Page Skipped'
        });
        navigate('/DefaultPage');
    } 

  useEffect(() => {
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsInViewport(true);
            } else {
                setIsInViewport(false);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0
    });

    if (FirstRef.current) {
        observer.observe(FirstRef.current);
    }
    if (SecondRef.current) {
        observer.observe(SecondRef.current);
    }
    if (ThirdRef.current) {
        observer.observe(ThirdRef.current);
    }

    return () => {
        if (FirstRef.current) {
            observer.unobserve(FirstRef.current);
        }
        if (SecondRef.current) {
            observer.unobserve(SecondRef.current);
        }
        if (ThirdRef.current) {
            observer.unobserve(ThirdRef.current);
        }
    };
}, []);

  return (
    <StyledContainer>
            
      <BackGroundSrc imagePath={"PreBack1.png"}>
         <SectionBlock>
            <AnimatedLogo/>
        </SectionBlock>
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PreBack2.png"} >
         <SectionBlock2>
            <Balloon>
              <HannaTxt>기획...? <RedSpan>그게 뭐야?</RedSpan></HannaTxt>
            </Balloon>
            <StrongTxt>하던 너</StrongTxt>
            <Balloon>
            <HannaTxt>에이 바보들...이렇게 하면 <RedSpan>더 괜찮은데</RedSpan></HannaTxt>
            </Balloon>
            <StrongTxt>하던 너!</StrongTxt>
            <Balloon>
            <HannaTxt>이건 이렇게 바꾸는게<RedSpan> 더 좋은데?</RedSpan></HannaTxt>
            </Balloon>
            <StrongTxt><Dinglediv3>
              하던 너!!
              </Dinglediv3></StrongTxt>
              <Balloon>
            <HannaTxt>내가하면 <RedSpan>더 잘할 것 같은데?</RedSpan></HannaTxt>
            </Balloon>
            <StrongTxt><Dinglediv4>
              하던 너!!!</Dinglediv4></StrongTxt>
        </SectionBlock2>
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PreBack3.png"} >
         <SectionBlock2>
          <ImgComponent imagePath={"back10.png"} 
                  top={"12%"} 
                  left={"65%"}
                  rotate={"-30deg"}
                  width={"50%"}/>
          <HannaTxt><BiggerSpan>여태것 너가 해온 <RedSpan>그런 기획?</RedSpan></BiggerSpan></HannaTxt>
          <TextGruop2>
            <HannaProTxt>우리는 그걸 <br/><RedSpan><BiggerSpan>"상상" 그리고 "취향"</BiggerSpan></RedSpan><br/>이라고 불러요</HannaProTxt>
          </TextGruop2>
              <HannaTxt>기획에는 <BiggerSpan>
                <GreenSpan>방법과 단계&nbsp;</GreenSpan></BiggerSpan>가 있고</HannaTxt>
              <TextGruop>
                <BingleDiv>
              <HannaProTxt>
                <GreenSpan>
                  우리 팔랑크스는 그 방법과 단계를 <br/>
                  찾아가는 사람들이에요!
                </GreenSpan>
              </HannaProTxt></BingleDiv>
              </TextGruop>
        </SectionBlock2>
       
        <SectionBlock3>
        <ImgComponent imagePath={"MadGirl.png"} 
          top={"53%"} 
          left={"-20%"}
          rotate={"0deg"}
          width={"30%"}/>
            <BiggerSpan>만약, 당신이 <RedSpan>기획의 천재</RedSpan>라서</BiggerSpan>
            <BiggerSpan>그래서 기획의 방법따윈</BiggerSpan>
         <Dinglediv4><TextGruop3>
            <HannaTxt><BiggerSpan>개나 줘버리라면!!</BiggerSpan></HannaTxt>  
          </TextGruop3></Dinglediv4>
          <TransText><HannaProTxt>
            <BiggestSpan>팔랑크스와는 아마 <br/><RedSpan>맞지 않을거에요😥</RedSpan></BiggestSpan>
            </HannaProTxt>
          </TransText>
          
        </SectionBlock3>
        
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PreBack4.png"} >
    
        <SectionBlock2>
        <ImgComponent imagePath={"Magic.png"} 
                top={"0%"} 
                left={"70%"}
                rotate={"-24deg"}
                width={"50%"}/>
          <StrongTxt>
            <BiggestSpan>하지만 당신에게<br/><br/></BiggestSpan></StrongTxt>
        <TextGruop><HannaProTxt>
            <MoreBigger>기획의 <GreenSpan>니즈를 파악하고</GreenSpan><br/></MoreBigger>
            <MoreBigger>기획의 <GreenSpan>구조를 파악하고</GreenSpan><br/></MoreBigger>
            <MoreBigger>기획의 <GreenSpan>내용을 심화하고</GreenSpan><br/></MoreBigger>
            <MoreBigger>기획의 대상에게<br/> 
            <GreenSpan><BiggestSpan>직접 제안하는</BiggestSpan></GreenSpan></MoreBigger>      
            </HannaProTxt>
            </TextGruop>
            <ImgComponent imagePath={"back6.png"} 
                top={"63%"} 
                left={"73%"}
                rotate={"-10deg"}
                width={"30%"}/>
          <TransText>
            <HannaProTxt><MoreBigger><GreenSpan>기획 분야 최고의</GreenSpan><br/> 
            대학생이 되고자하는<br/>
            <GreenSpan>그러고자 하는 의욕이 있다면!</GreenSpan></MoreBigger></HannaProTxt>
            </TransText>
        </SectionBlock2>
       
      </BackGroundSrc>
      
      <BackGroundSrc imagePath={"PreBack5.png"}>
         <SectionBlock2>
         <ImgComponent imagePath={"heart5.png"} 
                top={"-15%"} 
                left={"-30%"}
                rotate={"-14deg"}
                width={"60%"}/>
            <HannaProTxt>
              <MoreBigger>내가 배우고<br/>
              직접 기획해보는</MoreBigger></HannaProTxt>
            <TextGruop>
            <HannaProTxt>기획/컨설팅 분야 최고의 동아리<br/>
            <MoreBigger><GreenSpan>전국대학연합,<br/>
            클럽 팔랑크스 </GreenSpan></MoreBigger></HannaProTxt>
          </TextGruop>
          <HannaProTxt>한번 구경해볼래요? </HannaProTxt>
          <GradientButton onClick={handleLinkClick}>팔랑크스 알아보기</GradientButton>
        </SectionBlock2 >
      </BackGroundSrc>
      
    </StyledContainer>
  );
};

export default TestPreMessage;







const Dinglediv3 = styled.div`
  animation: dingleAnimation 0.2s ease infinite; /* 애니메이션을 적용합니다. */

  @keyframes dingleAnimation{
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-1px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const Dinglediv4 = styled.div`
  animation: dingleAnimation 0.1s ease infinite; /* 애니메이션을 적용합니다. */

  @keyframes dingleAnimation{
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-2px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const BingleDiv = styled.div`
  animation: BingleAnimation 2s infinite; /* 애니메이션을 적용합니다. */
  width : 100%;
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  @keyframes BingleAnimation{
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-1deg)
    }
    75% {
      transform: rotate(1deg)
    }
    100% {
      transform: rotate(0deg)
    }
  }
`;


const BiggerSpan = styled.span`
  font-size : 7vmin;
  font-style : italic;
  font-family : "한나프로";
`;
const MoreBigger = styled.span`
  font-size : 7vmin;
  line-height : 200%;
`;
const BiggestSpan = styled.span`
  font-size : 8vmin;
  line-height : 280%;
`;
const GreenSpan = styled.span`
color : #00FF00;

`