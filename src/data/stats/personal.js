import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-08-26T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(7));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 3,
    link:
      'https://www.google.com/maps/d/edit?mid=1ocS3HkBMdeUnORq8a3BCxlFepClBSw5P&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Baton Rouge, LA',
  },
];

export default data;
