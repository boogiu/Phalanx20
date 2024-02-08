import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsGrid3X3GapFill } from "react-icons/bs";
const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  max-height : 15vh;
  background-color: rgb(0,0,0,0.8);
  padding: 3%;
  z-index: 1000;
  font-size: 3vmin;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items : center;
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.3); /* 여기에 그림자 효과를 추가합니다 */
`;

const Logo = styled.img`
  height: 15vmin; /* 로고의 높이를 조절해주세요 */
  border-radius : 40%;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

const StyledLink1 = styled(Link)`
  color: #fff;
  font-size : 4.5vmin;
  font-family : '워헤븐';
  text-decoration: none;
  line-height : 150%;
  margin : 8% 0% 0% 10%;
  &:hover {
    color: #27FF97;
  }
`;



const StyledLink2 = styled(Link)`
  color: #fff;
  font-size : 3.5vmin;
  text-decoration: none;
  margin : 0% 0% 0% 10%;
  overflow : hidden;
  height : 0;
  transition: all 0.8s ease;
  &:hover {
    color: #27FF97;
  }
  line-height : 150%;
  &.open {
    height: 4.5vh;
  }
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  margin: 5% 10% 5% 5%;
`;

const IconStyle =styled(BsGrid3X3GapFill)`
color: #fff;
font-size : 10vmin;

`

const SideMenu = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 100%;
  right: ${props => props.isOpen ? '0' : '-200%'};
  width: 90%;
  height: 100vh;
  background-color: rgb(0,0,0,0.8);
  z-index: 1001;
  transition: all 0.4s ease;
  text-align : left;
  border-radius : 0 0 0 15%;
  overflow : auto;
`;
const TitleDiv = styled.div`
  width : 60%;
  height: auto;
`;
const SmallDiv = styled.div`
  width : 100%;
  color: #fff;
  font-size : 3vmin;
  font-family : '스윗';
  display: flex;
  flex-flow : row wrap;
  justify-content: center;
  align-items: center;
`;
const SmallLink = styled.a`
  margin : 15px 5px 0 5px;
  text-align: center;
  color: white;
  font-size: 3vmin;
  font-family: '스윗';
  text-decoration: none;
`;
const Title = styled(Link)`
  color : white;
  font-size : 8vmin;
  font-family : '워헤븐';
  font-style : 'italic';
  text-decoration : none;
  
`;

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [ToggleIndex, setToggleMenu] = useState(null);
  const toggleMenu = (index) => {
    setToggleMenu(ToggleIndex === index ? null : index); // Toggle the menu item
  };
  

// Header 컴포넌트 내에 scrollToSection 함수 추가
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <HeaderContainer>
      <>
      <Logo src={`${process.env.PUBLIC_URL}/imgData/Logo.png`} alt="Logo" />
    </>
      <TitleDiv>
        <Title to='/DefaultPage' >Phalanx</Title>
        
        <SmallDiv>
        <SmallLink href="https://docs.google.com/forms/d/e/1FAIpQLSf_GwY-CKdyQFUZNIB0rITSQnJQqG2bIybe805hXHUrJPmcsg/viewform">지원하기
        </SmallLink>
        <SmallLink href="https://abaft-faucet-515.notion.site/1b823d9452624d7285b496675a8aff9d"
        >훈련지도</SmallLink>
        
        </SmallDiv>
      </TitleDiv>
      
      <HamburgerMenu onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
        <IconStyle/>
      </HamburgerMenu>

      <SideMenu isOpen={isSideMenuOpen}>
        <MenuList>
          {headerNav.map((nav, index) => (
            <MenuItem key={index}>
              <StyledLink1 onClick={() => toggleMenu(index)} to={ToggleIndex === index ? nav.url : '#'}>
                {nav.title}
              </StyledLink1>
                <>
                  <StyledLink2 className={ToggleIndex === index? 'open' : ''} 
                  onClick={() => scrollToSection(nav.sectionId)}>{nav.Subtitle1}</StyledLink2>
                  <StyledLink2 className={ToggleIndex === index? 'open' : ''} 
                  onClick={() => scrollToSection(nav.Subtitle2)}>{nav.Subtitle2}</StyledLink2>
                  <StyledLink2 className={ToggleIndex === index? 'open' : ''} 
                  onClick={() => scrollToSection(nav.sectionId3)}>{nav.Subtitle3}</StyledLink2>
    
                </>
            </MenuItem>
          ))}
        </MenuList>
      </SideMenu>
    </HeaderContainer>
  );
};

export default Header;

const headerNav = [
  {   index: "1",
      title: "동아리 개요",
      url: "/DefaultPage",
      Subtitle1: "동아리 소개",
      sectionId1: "Def1",
      Subtitle2: "기획이란?",
      sectionId2: "Def2",
      Subtitle3: "단장의 말",
      sectionId3: "Def3",
  },
  { index: "2",
    title: "중앙 활동",
    url: "/CenturionPage",
    Subtitle1: "위즈덤&에세이 ",
    url1: "#intro",
    Subtitle2: "세션",
    url2: "#intro",
    Subtitle3: "캘린더",
    url3: "#intro",
},
{ index: "3",
  title: "세부 활동",
  url: "/DetailPage",
  Subtitle1: "세부 팀",
  url1: "#intro",
  Subtitle2: "커리큘럼",
  url2: "#intro",
  Subtitle3: "세부진행",
  url3: "#intro",
},
{ index: "4",
  title: "특별 활동",
  url: "/SpecialPage",
  Subtitle1: "실무 연계 프로젝트",
  url1: "#intro",
  Subtitle2: "포럼",
  url2: "#intro",
  Subtitle3: "특별행사",
  url3: "#intro",
},
{index: "5",
  title: "운영 행정",
  url: "/DirectingPage",
  Subtitle1: "시즌과 주차",
  url1: "#intro",
  Subtitle2: "활동 포인트",
  url2: "#intro",
  Subtitle3: "졸업과 포트폴리오",
  url3: "#intro",
},
{index: "6",
  title: "기타 사항",
  url: "/ETCPage",
  Subtitle1: "관련 안내",
  url1: "#intro",
  Subtitle2: "F&Q",
  url2: "#intro",
  Subtitle3: "더 알아보기",
  url3: "#intro",
},
];