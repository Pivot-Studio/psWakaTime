import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function detect() {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    detect();
    window.addEventListener("resize", detect);
    return () => {
      window.removeEventListener("resize", detect);
    };
  });
  return isMobile;
}
