import React, { useState } from "react";

function SignUpButton() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <button onClick={togglePopup}>Sign Up</button>
      {showPopup && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px" }}>
            <h2>Sign Up Form</h2>
            {/* Add your sign up form elements here */}
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUpButton;
