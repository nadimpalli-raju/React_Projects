import React, { useState } from 'react';

const BirthdayForm = ({ addBirthday }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && image) {
      addBirthday({ name, date, image: URL.createObjectURL(image) });
      setName('');
      setDate('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      <button type="submit">Add Birthday</button>
    </form>
  );
};

export default BirthdayForm;
