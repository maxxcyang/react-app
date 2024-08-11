import React from 'react';

const SentEmail: React.FC = () => {
  const headingStyle: React.CSSProperties = { 
    textAlign: 'center'
  };
 
  return (
    <h2 className="SentEmail" style={headingStyle}>Sent you an email, talk to you soon!</h2>
  );
}

export default SentEmail;
