import React, { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';

const flowRolling = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const BannerContainer = styled.div`
  overflow: hidden;
  display: flex;
  max-width: 1180px;
  margin: 30px auto;
  background : transparent;
`;

const BannerList = styled.ul`
  display: flex;
  
  animation: ${flowRolling} ${(props) => props.animationDuration}s linear infinite;
`;

const BannerListItem = styled.li`
  white-space: nowrap;
  font-size: 18px;
  color: #fff;
  padding: 20px;
  list-style: none;
`;

const SlideImg = styled.img`
  max-width: 320px;
  max-height: 180px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 40px;
`;

const InfiniteBanner = ({ animationSpeed, items }) => {
  const [cloneItems, setCloneItems] = useState([]);

  useEffect(() => {
    const cloneItemsArray = [...items, ...items];
    setCloneItems(cloneItemsArray);
  }, [items]);

  return (
    <BannerContainer>
      <BannerList animationDuration={cloneItems.length * animationSpeed}>
        {cloneItems.map((item, index) => (
          <BannerListItem key={index}>
            <SlideImg src={item} alt={`Slide ${index + 1}`} />
          </BannerListItem>
        ))}
      </BannerList>
    </BannerContainer>
  );
};

export default InfiniteBanner;