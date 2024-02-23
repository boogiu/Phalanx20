import React, { useRef, useEffect } from 'react';

const IntroCanvas = () => {
    const canvasRef = useRef(null);
    const doorHeight = 200; // 문의 높이
    let scrollY = 0; // 초기 스크롤 위치
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const doorWidth = canvas.width / 2; // 문의 폭
  
      const drawDoor = (openHeight) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#171321'; // 배경 색상
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        // 문 그리기
        ctx.fillStyle = '#2EFE2E';
        ctx.fillRect(0, 0, doorWidth, openHeight); // 왼쪽 문
        ctx.fillRect(doorWidth, 0, doorWidth, openHeight); // 오른쪽 문
      };
  
      const handleScroll = () => {
        // 스크롤 위치 감지
        const scrollTop = window.scrollY || window.pageYOffset;
        const openHeight = Math.max(0, scrollTop - scrollY); // 열린 문의 높이 계산
        drawDoor(openHeight);
        scrollY = scrollTop;
      };
  
      // 초기에 한 번 문 그리기
      drawDoor(0);
  
      // 스크롤 이벤트 리스너 등록
      window.addEventListener('scroll', handleScroll);
  
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return <canvas ref={canvasRef} width={300} height={600} />;
  };

export default IntroCanvas;
