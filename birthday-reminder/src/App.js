import React, { useState } from 'react';
import BirthdayForm from './BirthdayForm';
import BirthdayList from './BirthdayList';

const App = () => {
  const [birthdays, setBirthdays] = useState([]);

  const addBirthday = (birthday) => {
    setBirthdays([...birthdays, birthday]);
  };

  const removeBirthday = (index) => {
    const newBirthdays = birthdays.filter((_, i) => i !== index);
    setBirthdays(newBirthdays);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Birthday Reminder</h1>
      <BirthdayForm addBirthday={addBirthday} />
      <BirthdayList birthdays={birthdays} removeBirthday={removeBirthday} />
    </div>
  );
};

export default App;
