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
  height: 22vh;
  z-index: 1000;
  transition: top 0.7s; /* 이 부분을 추가합니다. */
  background:black;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  &.hidden {
    top: -20vh; /* 헤더를 숨깁니다. */
  }
  color: white;
  font-size: 1rem;
  font-weight : 400;
  font-family : "스윗";
  overflow-x: hidden;
  @media (max-width: 768px) {
    height: 18vh; /* 기기의 너비가 768px 미만인 경우 */
  }
  `;
const SubMenuTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px solid transparent; /* 투명한 테두리 */
    border-right-width : 1px;
    border-right-color : #A9F5E1;
    color :white;
  
`
const HeaderDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  background-image: linear-gradient(to right, #04ce6d 0, #03cb87 33.33%, #03c89e 66.66%, #02c5b6 100%);
  @media (max-width: 768px) {
    height: 50px; /* 기기의 너비가 768px 미만인 경우 */
  }
  `;

const SecondLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
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
  transition: all 0.4s ease;
  opacity : 50%;
  &.open {
    font-size: 1rem;
    opacity : 100%;
    animation: dingleAnimation 2s ease infinite; /* 애니메이션을 적용합니다. */
    border: 0px solid transparent; /* 투명한 테두리 */
    border-bottom-width : 3px;
    border-bottom-color : #E0F8E0;
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
`;
const BtnDiv = styled.button`
  cursor: pointer;
  width: 250px;
  height : auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  margin : 10px 0px  10px  0px;
  color: white;
  font-size: 0.8rem;  
  font-family : "스윗";
  background : black;
  border-radius : 3px;
  border: 0px solid transparent; /* 투명한 테두리 */
  border-bottom-width : 2px;
  border-bottom-color : #A9F5E1;
  padding : 5px;
  @media (max-width: 768px) {
    width: 110px; /* 기기의 너비가 768px 미만인 경우 */
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
  const [toggleIndex, setToggleIndex] = useState(0);
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const [headerRef, setHeaderRef] = useState(null);
  const [Subhidden, setSubhidden] = useState(true);

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
  const gotoLink = (link) => {
    console.log("링크로 갑니다!", link);
    window.location.href = link; // 링크로 이동
    ReactGA4.event({
      category: 'User Interaction',
      action: 'GoTo Click',
      label: `Clicked Element ID: ${link}`,
    });
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
      <BtnDiv onClick={() => gotoLink("https://docs.google.com/forms/d/e/1FAIpQLSf_GwY-CKdyQFUZNIB0rITSQnJQqG2bIybe805hXHUrJPmcsg/viewform")}>
        팔랑크스 지원하기
      </BtnDiv>

       <BtnDiv onClick={() => gotoLink("https://abaft-faucet-515.notion.site/1b823d9452624d7285b496675a8aff9d")}>팔랑크스 훈련지도</BtnDiv>
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