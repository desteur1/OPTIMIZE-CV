import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return null;
};

export default ScrollToHash;

//react router ne gère pas le scroll vers les ancres, ce composant vas permettre de le faire
