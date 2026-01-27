import React, { useState } from 'react';

const SimpleValidationForm = () => {
  
  // 1. Easy State: One variable for each input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 2. Error State: One variable for each error message
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh

    // Reset errors before checking
    setUsernameError("");
    setPasswordError("");

    // Use a simple variable to track success
    let isValid = true;

    // --- CHECK USERNAME ---
    if (username === "") {
      setUsernameError("Username is required");
      isValid = false; // Mark form as bad
    }

    // --- CHECK PASSWORD ---
    if (password.length < 6) {
      setPasswordError("Password must be 6 characters");
      isValid = false; // Mark form as bad
    }

    // --- FINAL DECISION ---
    if (isValid === true) {
      alert("Success! Form is valid.");
    } else {
      alert("Error! Please check the fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple Login</h2>

      {/* Username Input */}
      <label>Username:</label>
      <br />
      <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <small>{usernameError}</small>

      <br /><br />

      {/* Password Input */}
      <label>Password:</label>
      <br />
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <small>{passwordError}</small>

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleValidationForm;