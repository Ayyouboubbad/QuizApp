import React from "react";
import "../style/Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Chargement des questions...</p>
    </div>
  );
};

export default Loader;
