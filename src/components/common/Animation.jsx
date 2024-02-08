// animations.js 파일

import { keyframes } from 'styled-components';

export const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const fadeInFromBottom = keyframes`
    from {
      opacity: 0;
      transform: translateY(50px); /* 아래로 이동하는 애니메이션을 위해 translateY 사용 */
    }
    to {
      opacity: 1;
      transform: translateY(0); /* 위로 이동하는 애니메이션을 위해 translateY 사용 */
    }
`;

export const scaleInAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const slideDiagonal = keyframes`
  0% {
    opacity :0%;
    transform: translateY(-100%) translateX(100%);
  }
  1% {
    opacity :100%;
    transform: translateY(-100%) translateX(100%);
  }
  

  100% {
    opacity :100%;
    transform: translateY(100%) translateX(-200%);
  }
`;

export const flipAnimation = keyframes`
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(-90deg); /* 왼쪽 면을 기준으로 회전합니다. */
  }
  100% {
    transform: rotateY(-180deg); /* 왼쪽 면을 기준으로 회전합니다. */
  }
`;

export const shadowAnimation = keyframes`
0% {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
}
100% {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
`;