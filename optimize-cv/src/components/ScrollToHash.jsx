import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Si l'URL contient une ancre (hash)
      const id = location.hash.replace("#", ""); // supprimer le # pour obtenir l'id de l'élément

      setTimeout(() => {
        const element = document.getElementById(id); // trouver l'élément correspondant à l'id
        element?.scrollIntoView({ behavior: "smooth" }); // faire défiler jusqu'à l'élément de manière fluide
      }, 150);
    } else {
      window.scrollTo({ top: 0 }); // Si aucune ancre n'est présente, faire défiler vers le haut de la page
    }
  }, [location]); // Exécuter l'effet à chaque changement de location

  return null;
};

export default ScrollToHash;

//react router ne gère pas le scroll vers les ancres, ce composant vas permettre de le faire
