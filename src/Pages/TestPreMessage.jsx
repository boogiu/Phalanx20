import React from 'react';
import ChatBubble from '../components/Layout/PreMessage/ChatBubble';
import { StyledContainer } from '../components/common/GlobalStyle';
import styled from 'styled-components';


const TestPreMessage = () => {
  return (
    <StyledContainer >
      <ChatBubble/>
    </StyledContainer>
  );
};

export default TestPreMessage;

