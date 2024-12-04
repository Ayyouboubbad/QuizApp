
import React from 'react';
import '../style/ProgressNavbar.css'; 
const ProgressNavbar = ({ currentStep, totalSteps }) => {
  return (
    
    <div className="progressive-navbar">
      <div className="progressive-navbar-container">
        <div className="progressive-navbar-step">
          <span>{`Question ${currentStep} sur ${totalSteps}`}</span>
        </div>
        <div className="progressive-navbar-fill" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
      </div>
    </div>
  );
};

export default ProgressNavbar;
