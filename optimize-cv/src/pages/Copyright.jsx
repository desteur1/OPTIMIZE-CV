import "../styles/Copyright.css";

import { useEffect } from "react";

const Copy = () => {
  useEffect(() => {
    let element = document.querySelector(".copyright");
    if (element) {
      element.innerHTML = "&#169; Designed by Desteur Fall";
    }
  }, []);

  return (
    <div>
      <p className="copyright"></p>
    </div>
  );
};

export default Copy;
