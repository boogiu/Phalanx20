import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCaretDownFill } from "react-icons/bs";
import ChatData from '../../Data/ChatData.json'; 

const ChatSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState(ChatData); // ChatData를 messages 상태에 설정

  const toggleChat = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <BackGroundSrc imagePath={"ChatBack.png"}>
      <Wrapper isExpanded={isExpanded}>
        <ToggleBtn onClick={toggleChat}>
          {isExpanded ? '닫기' : <BsCaretDownFill style={{fontSize:"8vmin"}}/>} 
        </ToggleBtn>
        <Header>
          <h2>팔랑크스 방명록</h2>
        </Header>
        <ChatContainer className={isExpanded ? 'open' : ''}>
          <Body>
            {messages.map((message, index) => (
              <Message key={index}>
                <ProfilePicture src={`${process.env.PUBLIC_URL}/imgData/${message.imagePath}`} 
                alt="페이지 이미지" />
                <MessageContent>
                  <ContentBox>
                    <strong><Username>{message.Name}</Username>
                    </strong>
                    <DateTxt>{message.date}</DateTxt> 
                  </ContentBox>
                  <ChatTxt>{message.content}</ChatTxt>
                  
                </MessageContent>
              </Message>
            ))}
          </Body>
          
        </ChatContainer>
        <InputContainer>
            <InputField type="text" 
            placeholder=  "현재 댓글 사용이 중단되었습니다. "/>
            <SendButton>전송</SendButton>
          </InputContainer>
      </Wrapper>
    </BackGroundSrc>
  );
}  


const BackGroundGroup = styled.div`
  height: auto;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9), 
    rgba(0, 0, 0, 0.4), 
    rgba(0, 0, 0, 0.4), 
    rgba(0, 0, 0, 0.55)
  ),
    url(${({ BackGroundImage }) => BackGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 13vh 0vw 3vh 0vw;
`;

const BackGroundSrc = ({ imagePath, children }) => {
  return (
    <BackGroundGroup
      BackGroundImage={`${process.env.PUBLIC_URL}/imgData/${imagePath}`}
    >
      {children}
    </BackGroundGroup>
  );
};

const Wrapper = styled.div`
  position: relative; /* 상대 위치로 변경 */
  width: 95%;
  height: ${props => props.isExpanded ? '90vh' : '46vh'};
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-around;
  margin: 13vh 0vw 0vh 0vw;
  backdrop-filter: blur(3px) saturate(122%);
    -webkit-backdrop-filter: blur(3px) saturate(122%);
    background-color: rgba(2, 2, 2, 0.27);
    border-radius: 12px;
`;
const ToggleBtn = styled.button`
  width: 100%;
  height : auto;
  color: #fff;
  border-radius: 20% 20% 0% 0%;
  cursor: pointer;
  transition: all 0.5s ease;
  font-size:5vmin;
  &:hover {
    background-color: #0056b3;
  }
  background-color:rgba(0, 0, 0, 0);
  box-shadow : 2px 2px  rgba(255, 255, 255, 0.5);
  border : none;
`;

const ChatContainer = styled.div`
  position: relative; /* 절대 위치에서 상대 위치로 변경 */
  margin-top:10vh;
  width: 100%;
  height: 30vh; /* 기본적으로 확장된 상태의 높이입니다. */
  transition: all 0.5s ease;
  background-color:rgba(0, 0, 0, 0);
  box-shadow: 0 0  rgba(0, 0, 0, 0.5);
  flex-direction: column-reverse; /* 아래에서 위로 요소가 쌓이도록 설정 */
  overflow-y: auto; 
  -webkit-scrollbar {
    display: none;
  }    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
  &.open {
    height: auto;
  }
`;


const Header = styled.div`
  position: absolute; /* Header를 부모 요소를 기준으로 절대적인 위치를 설정합니다. */
  top: 8vh; /* 상단에 위치하도록 설정합니다. */
  left: 5%; /* 좌측에 정렬합니다. */
  display: flex;
  z-index: 1;
  color: white;
  font-family: '스윗';
  font-size: 4vmin;
`;



const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  left: 5%; /* 좌측에 정렬합니다. */
`;

const Message = styled.div`
  
  display: flex;
  justify-content: flex-start; /* 여기를 수정합니다. */
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  color : white;
  border-radius: 30px;
  box-shadow : 0px 0px 0px 0px  rgba(255, 255, 255, 0.5);
  padding: 10px;
  font-family: '스윗';
  margin-bottom: 10px;
  width :auto;
  font-size: 5vmin;
`;

const ContentBox = styled.div`
  
  display: flex;
  flex-flow : row wrap;
  align-items : flex-end; /* 여기를 수정합니다. */
  margin: 0 0 5px 0;
`;

const ProfilePicture = styled.img`
  width: 9vmin;
  height: 9vmin;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow : 0.5px 0.5px 1px 1px  rgba(255, 255, 255, 0.2);
`;

const MessageContent = styled.div`
  flex: 1;
  text-align :left ;
`;

// 나머지 스타일들은 이전과 동일합니다.


const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content : space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  height :13vmin;
  background-color: rgba(255, 255, 255, 0);
`;

const InputField = styled.input`
  width : 60%;
  height: 10%;  /* 부모의 높이를 상속받아 동일하게 설정 */
  padding: 5px;
  margin-left: 3%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding : 3%;
  font-size: 4vmin;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const SendButton = styled.button`
  width : 20%;
  height: 60%;
  padding: 10px 20px;
  margin-right: 3%;
  background-color: #00f008;
  color: #052001;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: '스윗';
  font-size: 3.5vmin; /* 글꼴 크기를 조정합니다. */
  min-width: 50px; /* 최소 너비를 지정합니다. */
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #45a049;
  }
`;


const Username = styled.p`
  font-family: '스윗';
  font-size: 4vmin; /* 글꼴 크기를 조정합니다. */
  margin: 0 8px 0 0;
`
const ChatTxt = styled.p`
font-family: '스윗';
  font-size: 4.5vmin; /* 글꼴 크기를 조정합니다. */
`
const DateTxt = styled.p`
font-family: '스윗';
  font-size: 2vmin; /* 글꼴 크기를 조정합니다. */
`



export default ChatSection;
