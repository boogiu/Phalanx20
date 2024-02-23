import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsHouseHeart ,BsSignpost2 ,BsRocketTakeoff,BsHeartPulse ,BsMortarboard  ,BsEnvelopePaperHeart  } from "react-icons/bs";
import { useAppContext } from '../../AppContext';
import ReactGA4 from 'react-ga4';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 17vmax;
  background-color: rgb(0,0,0,0.7);
  z-index: 1000;
  font-family : "한나";
  display: grid;
  gap : 10px;
  grid-template-rows: 5fr 1fr;
  backdrop-filter: blur(15px);
  transition: top 0.7s; /* 이 부분을 추가합니다. */
  &.hidden {
    top: -17vh; /* 헤더를 숨깁니다. */
  }
`;
const SubMenuTxt = styled.div`
    color: white;
    font-family : "한나";
    font-size : 3vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    margin : 1%;
    border-radius : 15px;
    background: linear-gradient(45deg, rgb(051,255,051,0.3), rgb(051,255,051,0.6));
    backdrop-filter: blur(15px);
`
const HeaderDiv = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 3fr 1fr;

`
const FirstLine = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items :center;
`

const SecondLine = styled.div`
height: 100%;
margin : 2%;
display: grid;
grid-template-columns: repeat(3, 1fr); /* 3개의 열을 만듭니다. */
grid-template-rows: repeat(2, 1fr); /* 2개의 행을 만듭니다. */
cursor: pointer;
position: relative;
color: white;
gap : 2px;
`;

const ThirdLine = styled.div`
height: 100%;
color: white;
font-family : "한나";
display: grid;
grid-template-rows: 1fr 1fr 1fr;
font-size: 1vmax;
margin : 2%;
`;
const BtnDiv = styled.a`
  border-radius: 5px; /* Rounds the corners of the button */
  background: linear-gradient(25deg, rgb(051,255,051,0.6),rgb(000,255,000,0.4)); 
  cursor: pointer; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  font-family: "한나"; 
  font-size: 3vmin; 
  margin: 3%; 
  box-shadow: 0px 1px 0px 0px rgb(000,255,000,0.3); 
  color: white; 
  text-decoration: none; 
  animation: blinkAnimation 2s ease infinite; 
  transition: all 0.8s ease; 
}

@keyframes blinkAnimation {
  50% {
    transform: scale(0.98);
  }
 
}
`

const MenuBox = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items :center;
    position : relative;
    border-radius : 10px;
    box-shadow: inset 0 0 3px rgba(255,255,255,0.5); /* 내부 셰도우를 추가합니다. */
`
const MenuIcon = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items :center;
position : absolute;
border-radius : 50%;
font-size: 2vmax;
margin : 5%;
font-weight : 600;
opacity : 40%;
&.open {
    transform: translateX(0%);
    transform: translateY(50%);
    font-size: 3vmax;
    opacity : 100%;
    color : green;
    animation: dingleAnimation 2s ease infinite; /* 애니메이션을 적용합니다. */
  }
  transition: all 0.8s ease;
  @keyframes dingleAnimation{
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
`
const IconTitle = styled.p`
font-size : 2.5vmin;
position : absolute;
bottom : 0;
margin : 5%;

`

const Logo = styled.img`
  height: 20vmin; /* 로고의 높이를 조절해주세요 */
  border-radius: 50%; /* 보더를 둥글게 만듭니다 */
  background: linear-gradient(45deg, rgb(051,255,051,0.1), rgb(000,255,000,0.5));
  box-shadow: inset 0 0 3px rgba(051,255,051,0.5); /* 내부 셰도우를 추가합니다. */
`;

const SubMenuDiv = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
color: white;
font-family : "한나";

`
const NewHeader = () => {
    const appContext = useAppContext();
    const [toggleIndex, setToggleIndex] = useState(null); // 상태 변수명을 toggleIndex로 변경
    const navigate = useNavigate(); // useNavigate 훅으로 navigate 함수 가져오기
    const [hidden, setHidden] = useState(false); // 스크롤 이벤트에 따라 헤더를 숨길지 여부를 결정하는 상태
    
    const handleClick = (refName) => {
      appContext.setScrollToRef(refName); // 컨텍스트 객체에서 함수 직접 호출
    };
  
    const toggleMenu = (index) => {
      setToggleIndex((prevState) => (prevState === index ? null : index)); // toggleIndex를 업데이트할 때 함수형 업데이트 사용
    };
  
    const handleLinkClick = (url) => {
      navigate(url); // navigate 함수를 사용하여 페이지 이동
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
          }, 150); // 150ms 이후에 스크롤 위치가 변하지 않으면 스크롤이 멈춘 것으로 간주합니다.
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    

    return (
      <HeaderContainer className={hidden? 'hidden' : ''}>
        <HeaderDiv>
            <FirstLine>
              <Logo src={`${process.env.PUBLIC_URL}/imgData/Logo.png`} alt="Logo" />
            </FirstLine>
            <SecondLine>
            {headerNav.map((nav, index) => (
                <MenuBox key={index}>
                  
                  <MenuIcon
                      className={toggleIndex === index ? 'open' : ''}
                      onClick={() => {
                      toggleMenu(index);
                      handleLinkClick(nav.url);
                      handleClick("default")
                      }}
                  >
                      <>{nav.Icon}</>
                  </MenuIcon>
                  <IconTitle>{nav.title}</IconTitle>
                </MenuBox>
            ))}
            </SecondLine>
            <ThirdLine>
              <BtnDiv href="https://docs.google.com/forms/d/e/1FAIpQLSf_GwY-CKdyQFUZNIB0rITSQnJQqG2bIybe805hXHUrJPmcsg/viewform"
              >팔랑크스 <br/>지원하기</BtnDiv>
              <BtnDiv href="https://abaft-faucet-515.notion.site/1b823d9452624d7285b496675a8aff9d"
              >팔랑크스 <br/>훈련지도</BtnDiv>
              <BtnDiv onClick={() => handleLinkClick("/DocuPass")}>면접 안내</BtnDiv>
            </ThirdLine>
        </HeaderDiv>
        <SubMenuDiv>
          {headerNav.map((nav, index) => (
            toggleIndex === index && (
              <React.Fragment key={index}>
                {nav.subMenu.map((subItem, subIndex) => (
                    <SubMenuTxt key={subIndex} onClick={() => handleClick(subItem.url)}>
                    {subItem.title}</SubMenuTxt>
                ))}
              </React.Fragment>
            )
          ))}
        </SubMenuDiv>
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
    { title: "일반 크루/심화 크루", url: "section2" },
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