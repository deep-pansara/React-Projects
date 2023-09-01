import React, { useState } from 'react';
import validator from 'validator';

function EmailValidation() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    // List of allowed domains
    const allowedDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];

    // Check if it's a valid email format
    if (!validator.isEmail(email)) {
      return false;
    }

    // Extract the domain from the email address
    const domain = email.split('@')[1];

    // Check if the domain is in the list of allowed domains
    if (allowedDomains.includes(domain)) {
      return true;
    }

    return false;
  };

  const handleInputChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  return (
    <div>
      <h1>Email Validation</h1>
      <input
        type="text"
        placeholder="Enter an email"
        value={email}
        onChange={handleInputChange}
      />
      {isValid ? (
        <p className="valid-email">Valid email address</p>
      ) : (
        <p className="invalid-email">Invalid email address</p>
      )}
    </div>
  );
}

export default EmailValidation;
