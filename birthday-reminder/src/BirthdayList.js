import React from 'react';

const BirthdayList = ({ birthdays, removeBirthday }) => {
  return (
    <ul>
      {birthdays.map((birthday, index) => (
        <li key={index}>
          {birthday.name} - {birthday.date}
          <button onClick={() => removeBirthday(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BirthdayList;
