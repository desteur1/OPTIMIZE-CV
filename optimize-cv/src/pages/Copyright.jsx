import "../styles/Copyright.css";

import { useEffect, useState } from "react";

const Copy = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    const offset = 10; // add a small offset to ensure the calculation is consistent and . The offset ensures that even if the scroll position is very close to the bottom, the button will still appear
    if (
      window.scrollY + window.innerHeight >=
      document.body.offsetHeight - offset
    ) {
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
