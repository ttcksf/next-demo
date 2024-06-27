import React from 'react';

const card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: '100px',
    margin: '10px',
    border: '1px solid #333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return <div style={cardStyle}>{children}</div>;
};

export default card;
