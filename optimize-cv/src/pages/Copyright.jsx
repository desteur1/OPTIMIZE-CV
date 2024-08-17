import "../styles/Copyright.css";

import { useEffect, useCallback } from "react";

const Copy = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth", scrollToTop });
  }, []); // storing scrolltotop(function) in usecallback to prevent re-rendering
  useEffect(() => {
    let element = document.querySelector(".copyright");
    if (element) {
      element.innerHTML = "&#169; Designed by Desteur Fall";
      element.style.cursor = "pointer";
      element.addEventListener("click", scrollToTop);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", scrollToTop);
      }
    };
  }, [scrollToTop]); // Include scrollToTop in the dependency array

  return (
    <div>
      <p className="copyright"></p>
    </div>
  );
};

export default Copy;
