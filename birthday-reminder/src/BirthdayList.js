import React from 'react';

const BirthdayList = ({ birthdays, removeBirthday }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
      {birthdays.map((birthday, index) => (
        <li key={index} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', // Center items horizontally
            marginBottom: '10px',
            gap: '10px' // Space between items
          }}>
          <img 
            src={birthday.image} 
            alt={birthday.name} 
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover'
            }} 
          />
          <p style={{ margin: 0 }}>{birthday.name} - {birthday.date}</p>
          <button onClick={() => removeBirthday(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BirthdayList;