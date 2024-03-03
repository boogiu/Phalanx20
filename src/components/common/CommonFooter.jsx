import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaAnglesUp } from "react-icons/fa6";
import { useLocation } from 'react-router-dom'; // useLocation을 불러와야 합니다.

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1000;
  transition: top 0.7s;
  background:transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  color: #2EFE2E;
  font-size: 1rem;
  font-weight: 400;
  font-family: "스윗";
  overflow-x: hidden;
  opacity: 80%;
`;

const GOUp = styled(FaAnglesUp)`
  font-size: 3rem;
  cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능한 것처럼 보이도록 합니다. */
  margin: 10px;
  position: fixed;
  bottom: 10px; /* hidden 상태에 따라 위치 변경 */
  right: ${({ hidden }) => (hidden ? '-150px' : '10px')};
  transition: right 1s;
`;

const NowState = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 150px;
  background: black;
  border-radius: 10px;
  padding : 10px 0px ;
  position: fixed;
  bottom: 10px; /* hidden 상태에 따라 위치 변경 */
  left: ${({ hidden }) => (hidden ? '-150px' : '10px')};
  transition: left 1s;
`;

const Circle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #2EFE2E;
  margin: 3px;
`;

const CommonFooter = () => {
    const {pathname} = useLocation();
    const [hidden, setHidden] = useState(false);

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [pathname]);

    const handleGoUpClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 스무스한 스크롤을 적용합니다.
    };

    useEffect(() => {
        let scrollTimer = null;
      
        const handleScroll = () => {
          clearTimeout(scrollTimer);
          const currentScrollPos = window.scrollY;
      
          setHidden(currentScrollPos > 80);
      
          scrollTimer = setTimeout(() => {
            const newScrollPos = window.scrollY;
            if (newScrollPos === currentScrollPos) {
              setHidden(false);
            }
          }, 150);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return (
        <FooterContainer>
            <NowState hidden={hidden}>
                <Circle/>
                <p>리크루팅 진행 중</p>
            </NowState>
            <GOUp onClick={handleGoUpClick} hidden={hidden} /> {/* GOUp 아이콘에 hidden 상태 전달 */}
        </FooterContainer>
    );
};

export default CommonFooter;
