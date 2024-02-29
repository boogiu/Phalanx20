import React, { useEffect, useRef, useState } from 'react';
import { SectionBlock2, TextGruop, RedSpan,StrongTxt,StyledContainer, SectionBlock, BackGroundSrc, HannaTxt, GrenBlock } from '../components/common/GlobalStyle';
import styled,{css,keyframes} from 'styled-components';
import { fadeInFromLeft } from "../components/common/Animation"
import IntersectionObserverComponent from '../components/common/IntersectionObserverComponent'
import AnimatedLogo from '../components/Layout/PreMessage/AnimatedLogo'
const TestPreMessage = () => {

  const FirstRef = useRef(null);
  const SecondRef = useRef(null);
  const ThirdRef = useRef(null);

  const [isInViewport, setIsInViewport] = useState(false);   

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
        
         <SectionBlock >
          <TextGruop>
            <HannaTxt>기획...? <RedSpan>그게 뭐야?</RedSpan></HannaTxt>
            <StrongTxt>하던 너</StrongTxt>
            <HannaTxt>에이 바보들...이렇게 하면 <RedSpan>더 괜찮은데</RedSpan></HannaTxt>
            <StrongTxt>하던 너!</StrongTxt>
            <HannaTxt>이건 이렇게 바꾸는게<RedSpan> 더 좋은데?</RedSpan></HannaTxt>
            <StrongTxt><Dinglediv3>
              하던 너!!
              </Dinglediv3></StrongTxt>
            <HannaTxt>내가하면 <RedSpan>더 잘할 것 같은데?</RedSpan></HannaTxt>
            <StrongTxt><Dinglediv4>
              하던 너!!!</Dinglediv4></StrongTxt>
          </TextGruop>
        </SectionBlock>
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PreBack3.png"} >
      <LeftSlideGroup ref={FirstRef} isInViewport={isInViewport}>
         <SectionBlock2>
         <HannaTxt>여태것 너가 해온 <RedSpan>그런 기획?</RedSpan></HannaTxt>
         <TextGruop>
          <HannaTxt>우리는 그걸 <br/><RedSpan>"상상" 그리고 "취향"</RedSpan><br/>이라고 불러요</HannaTxt>
         </TextGruop>
            <HannaTxt>기획에는 방법과 단계가 있고</HannaTxt>
            <HannaTxt>우리 팔랑크스는 그 방법과 단계를 <br/>찾아가는 사람들이에요!</HannaTxt>
         
          
        </SectionBlock2>
  
        <SectionBlock2>
            <HannaTxt>만약, 당신이 기획의 천재라서</HannaTxt>
            <HannaTxt>그래서 기획의 방법따윈</HannaTxt>
         <TextGruop>
            <HannaTxt><RedSpan>개나 줘버리라면</RedSpan></HannaTxt>  
          </TextGruop>
            <HannaTxt>팔랑크스와는 아마 맞지 않을거에요</HannaTxt>
        </SectionBlock2>
        </LeftSlideGroup>
      </BackGroundSrc>

      <BackGroundSrc imagePath={"PreBack4.png"} >
         

        <SectionBlock2>
          <HannaTxt>하지만 당신에게</HannaTxt>
        <TextGruop>
            <HannaTxt>기획의 니즈를 파악하고</HannaTxt>
            <HannaTxt>기획의 구조를 파악하고</HannaTxt>
            <HannaTxt>기획의 내용을 심화하고</HannaTxt>
            <HannaTxt>기획의 대상에게 제안하는</HannaTxt>      
            
            </TextGruop>
            <HannaTxt>기획 분야 최고의 대학생이 되고자하는</HannaTxt>      
            <HannaTxt>그러고자 하는 의욕이 있다면</HannaTxt>
        </SectionBlock2>
      </BackGroundSrc>
      
      <BackGroundSrc imagePath={"PreBack5.png"}>
         <SectionBlock2>
            <HannaTxt>내가 배우고</HannaTxt>
            <HannaTxt>직접 기획해보는</HannaTxt>
            <TextGruop>
            <HannaTxt>기획/컨설팅 분야 최고의 동아리</HannaTxt>
            <HannaTxt>전국대학연합,</HannaTxt>
            <HannaTxt>클럽 팔랑크스 </HannaTxt>
            <HannaTxt>한번 구경해볼래요? </HannaTxt>
          </TextGruop>
        </SectionBlock2>
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


const LeftSlideGroup = styled.section`
    opacity : 0%;
    animation: 
  ${({ isInViewport }) => (isInViewport ? 
    css`${fadeInFromLeft} 1s ease forwards` : 'none')};
  }
`;