import React, { useState } from 'react';

import './App.css'; // Import your CSS file for styling
import GetStartedPage from './GetStartedPage';
import ExistingUserPage from './ExistingUserPage';


const SignUpPage = () => {
   const [showGetStarted, setShowGetStarted] = useState(false);
   const [showAlreadyUser, setShowAlreadyUser] = useState(false);

   const handleGedStarted = () => {
    setShowGetStarted(true);
    setShowAlreadyUser(false);
   };
   const handleAlreadyHaveAccount = () => {
       setShowAlreadyUser(true);
       setShowGetStarted(false);
   }
  return (
    <div className="container">
      <div className="content">
       if (showGetStarted){
            (<GetStartedPage />)
       }
       if (showAlreadyUser){
            (<ExistingUserPage />)
        }

//        <h1>Here are fun facts about pension</h1>
        <div className="button-container">
          <button className="get-started-button" onClick={handleGedStarted}>Get Started</button>
          <button className="already-have-account-button"onClick={handleAlreadyHaveAccount}>I Have an Account Already</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
