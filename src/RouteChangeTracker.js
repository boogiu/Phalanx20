import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA4 from "react-ga4";

/**
 * uri 변경 추적 컴포넌트
 * uri가 변경될 때마다 pageview 이벤트 전송
 */
const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // localhost는 기록하지 않음
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA4.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID); // GA4 측정 ID 사용
      setInitialized(true);
    }
  }, []);

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      ReactGA4.send("pageview", { page_path: location.pathname }); // GA4에서는 send() 메서드를 사용하여 이벤트를 전송합니다.
    }
  }, [initialized, location]);

  // 개발용
  
};

export default RouteChangeTracker;
