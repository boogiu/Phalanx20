import React, { Children, useEffect, useRef,useState  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import IntersectionObserverComponent from '../components/common/IntersectionObserverComponent'
import { fadeInFromLeft,fadeInFromBottom } from "../components/common/Animation"
import ChatSection from '../components/Layout/ChatSection'
import SlideShow from '../components/Layout/SlideShow';
import FirstSection from '../components/Layout/FirstSection';
import SeocndSection from '../components/Layout/SecondSection';
import ThirdSection from '../components/Layout/ThirdSection';
import MapLink from '../components/Layout/MapLink';
import ImageRoll from '../components/common/ImageRoll';
import SnsFooter from '../components/Layout/SnsFooter';
import Footer from '../components/common/Footer';
import LeaderMessage from '../components/Layout/LeaderMessage';
import { useAppContext } from '../AppContext';


const DefaultSection = () => {
  const { scrollToRef } = useAppContext();
  const sectionDefault = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    if (scrollToRef === 'section1' && section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (scrollToRef === 'section2' && section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (scrollToRef === 'section3' && section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (scrollToRef === 'default' && sectionDefault.current) {
      sectionDefault.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToRef, section1Ref, section2Ref, section3Ref,sectionDefault]); // ref들도 의존성 배열에 추가해주어야 합니다.
  

    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const descriptionRef = useRef(null);
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

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        if (subTitleRef.current) {
            observer.observe(subTitleRef.current);
        }
        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
            if (subTitleRef.current) {
                observer.unobserve(subTitleRef.current);
            }
            if (descriptionRef.current) {
                observer.unobserve(descriptionRef.current);
            }
        };
    }, []);
  
  return (
    <StyledContainer>
       {/*<Header/>*/}
      <div style={{margin : "13vh 0 0 0"}}>
        <div ref={sectionDefault}/>
        <FirstSection/>
        <LeftSlideGroup ref={titleRef} isInViewport={isInViewport}>
          <SeocndSection/>
        </LeftSlideGroup>
        <ChatSection/>
        <div ref={section2Ref}/>
        <ImageRoll/>
        <div ref={section1Ref}/>
        <ThirdSection/>
        <SlideShow/>
        <MapLink/>
        <div ref={section3Ref}/>
        <LeaderMessage  />
        <SnsFooter/>
        
        <Footer/>
        
      </div>
      
    </StyledContainer>
   
  );
};

export default DefaultSection;



  //콘테이너 디자인//
const StyledContainer = styled.div`
  width: 100%;
  height:auto;
  background-color: black;
  display: flex;
  flex-flow : column nowrap;
  justify-content:center;
  align-content: center;
  overflow: hidden;
  background-color: black;
  margin : 0;
  position : relative;
  `;

const LeftSlideGroup = styled.section`
    opacity : 0%;
    animation: 
  ${({ isInViewport }) => (isInViewport ? 
    css`${fadeInFromLeft} 1s ease forwards` : 'none')};
  }
`;

