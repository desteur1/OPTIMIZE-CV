import "../styles/Copyright.css";

import { useEffect, useState } from "react";

// const Copy = () => {
// const scrollToTop = useCallback(() => {
//   window.scrollTo({ top: 0, behavior: "smooth", scrollToTop });
// }, []);  storing scrolltotop(function) in usecallback to prevent re-rendering
// useEffect(() => {
//   let buttonCopy = document.querySelector(".btn-b");
//   let element = document.querySelector(".copyright");
//   if (element) {
//     element.innerHTML = "&#169; Designed by Desteur Fall";
//     element.style.cursor = "pointer";
//     element.addEventListener("click", scrollToTop);
//   }
//   buttonCopy.innerHTML = element;
//   return () => {
//     if (element) {
//       element.removeEventListener("click", scrollToTop);
//     }
//   };
// }, [scrollToTop]);  Include scrollToTop in the dependency array

const Copy = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div>
      <p className={`scroll-to-top ${isVisible ? "visible" : "hidden"}`}>
        <button
          type="button"
          onClick={scrollToTop}
          className="scroll-to-top-button"
        >
          &#169; Designed by Desteur Fall
        </button>
      </p>
    </div>
  );
};
// };
export default Copy;
