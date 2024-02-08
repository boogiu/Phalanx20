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
import Header from '../components/common/Header';
import SnsFooter from '../components/Layout/SnsFooter';
import Footer from '../components/common/Footer';
import LeaderMessage from '../components/Layout/LeaderMessage';


const DefaultSection = () => {
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);

    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

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
      <Header scrollToElement={scrollToElement} />

      <div style={{margin : "13vh 0 0 0"}}>
        <FirstSection/>

        <LeftSlideGroup ref={titleRef} isInViewport={isInViewport}>
          <SeocndSection/>
        </LeftSlideGroup>
        <ChatSection id='Def1'/>

        <ImageRoll/>

        <ThirdSection id='Def2'/>

        <SlideShow/>

        <MapLink/>
        <LeaderMessage/>
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

