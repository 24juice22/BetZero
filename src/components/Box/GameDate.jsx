import React from 'react';

const GameDate = ({ startTime }) => {
  // Format date
  const date = new Date(startTime).toLocaleString('en-US').split('');
  date.splice(date.length - 6, 4);
  let formattedDate = date.join('').split(',').join('');
  const currentDate = `${
    new Date().getMonth() + 1
  }/${new Date().getDate()}/${new Date().getFullYear()}`;

  // Check if date is today's date
  const dateToCompare = formattedDate.split(' ');
  if (dateToCompare[0] === currentDate)
    formattedDate = `Today ${dateToCompare[1]}`;

  return <p className='date'>{formattedDate}</p>;
};

export default GameDate;
