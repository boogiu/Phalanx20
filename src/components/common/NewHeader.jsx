import React, { useState, useRef,useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsHouseHeart, BsSignpost2, BsRocketTakeoff, BsHeartPulse, BsMortarboard, BsEnvelopePaperHeart } from "react-icons/bs";
import { useAppContext } from '../../AppContext';
import ReactGA4 from 'react-ga4';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  min-height: 150px;
  z-index: 1000;
  transition: top 0.7s; /* 이 부분을 추가합니다. */
  background:black;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  &.hidden {
    top: -20vh; /* 헤더를 숨깁니다. */
  }
  border-radius : 0px 0px 5px 5px;  
  color: white;
  font-size: 2vmax;
  font-weight : 400;
  font-family : "스윗";
  overflow-x: hidden;
  gap : 10px;

  @media (max-width: 768px) {
    height: 15vh; /* 기기의 너비가 768px 미만인 경우 */
  }
`;
const SubMenuTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vmax;  
    font-weight : 400;
    border: 2px solid transparent; /* 투명한 테두리 */
    border-bottom-width : 0.5px;
    border-bottom-color : #00FF00;
`
const HeaderDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  border-radius : 5px;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const SecondLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  height: 100%;
  position: relative;
  border: 2px solid transparent; /* 투명한 테두리 */
`;

const MenuBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: fit-content; /* 내용물에 따라 너비 조정 */
  height: 60%; 
  white-space: nowrap; /* 자동 줄바꿈 방지 */
  margin : 5px;
  padding : 5px;
  transition: all 0.8s ease;
  opacity : 50%;
  &.open {
    font-size: 2.5vmax;
    opacity : 100%;
    animation: dingleAnimation 2s ease infinite; /* 애니메이션을 적용합니다. */
    
  }
  @keyframes dingleAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
const MenuIcon = styled.div``;
const IconTitle = styled.p``;
const ThirdLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  gap : 10px;
`;
const BtnDiv = styled.button`
  cursor: pointer;
  width: 250px;
  height : auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  margin : 10px 0px  0px  0px;
  font-size: 1vmax; /* 폰트 사이즈 조정 */
  color: white;
  transition: all 0.8s ease; /* 애니메이션 속도 조정 */
  font-family : "스윗";
  font-weight : 600;
  background: linear-gradient(105deg, #336633,#339933, #336633);
  border-radius : 5px;
  border : none;
  padding : 5px;
  @media (max-width: 768px) {
    width: 100px; /* 기기의 너비가 768px 미만인 경우 */
  }
`;
const SubMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transition: all 0.8s ease; /* 애니메이션 속도 조정 */
  opacity : 0%;
  &.hidden {
    opacity : 100%;
  }
`;
const NewHeader = () => {
  const appContext = useAppContext();
  const [toggleIndex, setToggleIndex] = useState(null);
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const [headerRef, setHeaderRef] = useState(null);
  const [Subhidden, setSubhidden] = useState(false);

  const handleHeaderRef = useCallback(node => {
    setHeaderRef(node);
  }, []);

  const handleClick = (refName) => {
    appContext.setScrollToRef(refName);
  };

  const toggleMenu = (index) => {
    setToggleIndex((prevState) => (prevState === index ? null : index));
  };

  const HiddenSubMenu = () => {
    setSubhidden(true);
    console.log("숨겨!")
  };

  const handleLinkClick = (url) => {
    navigate(url);
    ReactGA4.event({
      category: 'MenuClick',
      action: `${url}`,
      label:  `${url}`
    });
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
  
  const handleMenuClick = (index) => {
    const headerRef = document.getElementById("header-container");
    const menuBoxRef = document.getElementById(`menu-box-${index}`);
    
    if (headerRef && menuBoxRef) {
      const headerWidth = headerRef.offsetWidth;
      const menuBoxWidth = menuBoxRef.offsetWidth;
      const scrollLeft = menuBoxRef.offsetLeft - (headerWidth - menuBoxWidth) / 2;
      headerRef.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };
  
  
  return (
    <HeaderContainer className={hidden ? 'hidden' : ''}>
      <ThirdLine>
        <BtnDiv href="https://docs.google.com/forms/d/e/1FAIpQLSf_GwY-CKdyQFUZNIB0rITSQnJQqG2bIybe805hXHUrJPmcsg/viewform">팔랑크스 지원하기</BtnDiv>
        <BtnDiv href="https://abaft-faucet-515.notion.site/1b823d9452624d7285b496675a8aff9d">팔랑크스 훈련지도</BtnDiv>
        <BtnDiv onClick={() => handleLinkClick("/DocuPass")}>면접 안내</BtnDiv>
      </ThirdLine>
      <HeaderDiv ref={handleHeaderRef} id="header-container"> {/* ref를 설정하고 ID를 부여 */}
        <SecondLine>
          {headerNav.map((nav, index) => (
            <MenuBox  
              id={`menu-box-${index}`} // 각 메뉴박스에 고유한 ID 부여
              key={index}
              className={toggleIndex === index ? 'open' : ''}
              onClick={() => {
                toggleMenu(index);
                handleLinkClick(nav.url);
                handleClick("default");
                handleMenuClick(index);
                HiddenSubMenu();
              }}
            >
              <MenuIcon>{nav.Icon}</MenuIcon>
              <IconTitle>{nav.title}</IconTitle>
            </MenuBox>
          ))}
        </SecondLine>
      </HeaderDiv>
      <SubMenu className={!Subhidden? '' : 'hidden'}>
        {headerNav.map((nav, index) => (
          toggleIndex === index && (
            <React.Fragment key={index}>
              {nav.subMenu.map((subItem, subIndex) => (
                <SubMenuTxt key={subIndex} onClick={() => handleClick(subItem.url)}>
                  {subItem.title}
                </SubMenuTxt>
              ))}
            </React.Fragment>
          )
        ))}
      </SubMenu>
    </HeaderContainer>
  );
};

export default NewHeader;


const headerNav = [
    {   index: "1",
        Icon: <BsHouseHeart  />,
        url: "/DefaultPage",
        title: "동아리 개요",
        subMenu: [
          { title: "동아리 소개", url: "section1" },
          { title: "기획이란?", url: "section2" },
          { title: "단장의 말", url: "section3" }
        ]
    },
    { index: "2",
      Icon: <BsSignpost2  />,
      url: "/CenturionPage",
      title: "중앙 활동",
      subMenu: [
        { title: "위즈덤&에세이", url: "section1" },
        { title: "세션", url: "section2" },
        { title: "캘린더", url: "section3" }
      ]
  },
  { index: "3",
    Icon: <BsRocketTakeoff />,
    url: "/DetailPage",
    title: "세부 활동",
    subMenu: [
      { title: "세부팀", url: "section1" },
      { title: "커리큘럼", url: "section2" },
      { title: "세부진행", url: "section3" }
    ]
  },
  {index: "4",
    Icon: <BsHeartPulse/>,
    url: "/SpecialPage",
    title: "특별 활동",
    subMenu: [
      { title: "실무 연계 프로젝트", url: "section1" },
      { title: "포럼", url: "section2" },
      { title: "특별행사", url: "section3" }
    ]
  },
  { index: "5",
  Icon: < BsMortarboard/>,
  url: "/DirectingPage",
  title: "운영 행정",
  subMenu: [
    { title: "시즌과 주차", url: "section1" },
    { title: "일반/심화 크루", url: "section2" },
    { title: "졸업과 포트폴리오", url: "section3" }
  ]
},
  {index: "6",
    Icon: <BsEnvelopePaperHeart />,
    url: "/ETCPage",
    title: "기타 사항",
    subMenu: [
      { title: "관련 안내", url: "section1" },
      { title: "F&Q", url: "section2" },
      { title: "더 알아보기", url: "section3" }
    ]
  },
  ];