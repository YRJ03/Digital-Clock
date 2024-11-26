import { useState, useEffect } from 'react';
import './App.css';

const Clock = () => {
  const [time, setTime] = useState('');

  const updateClock = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);

    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <p id="time">{time}</p>
      </div>
    </div>
  );
};

export default Clock;
